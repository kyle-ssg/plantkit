#!/bin/bash
# $1 = AppCenter ID
# $2 = Code Push Environment
# $3 - Git branch
# $4 - iOS/Android
# $5 - Code Push ID
# $6 - Target (required for iOS only)
# 0 = "="
# 1 = ">"
# 2 = "<"
# i.e. vercomp 2.1 2.2 == "<"
# Test this locally on android  with sh ./../mobile/.bin/distribute-mobile.sh SiteAssist/SiteAssist-Android-Production Staging master android SiteAssist/SiteAssist-Android-Production
# Test this locally on ios  with sh ./../mobile/.bin/distribute-mobile.sh SiteAssist/SiteAssist-iOS-Production Staging master ios SiteAssist/SiteAssist-iOS-Production
# with export APPCENTER_ACCESS_TOKEN=(CHECKGITLAB)
vercomp () {
    if [[ $1 == $2 ]]
    then
        return 0
    fi
    local IFS=.
    local i ver1=($1) ver2=($2)
    # fill empty fields in ver1 with zeros
    for ((i=${#ver1[@]}; i<${#ver2[@]}; i++))
    do
        ver1[i]=0
    done
    for ((i=0; i<${#ver1[@]}; i++))
    do
        if [[ -z ${ver2[i]} ]]
        then
            # fill empty fields in ver2 with zeros
            ver2[i]=0
        fi
        if ((10#${ver1[i]} > 10#${ver2[i]}))
        then
            return 1
        fi
        if ((10#${ver1[i]} < 10#${ver2[i]}))
        then
            return 2
        fi
    done
    return 0
}

ios_target=$6
export ios_target

if [[ $4 == "ios" ]]
then
    currentVersion=$(grep -A 2 CFBundleShortVersionString ios/Info.plist | grep string | sed -e "s/string//g" | sed -e "s/[<>\/]//g"| xargs)
else
    currentVersion=$(grep 'versionName' android/app/build.gradle | grep -o '".*"' | tr -d '"')
fi

echo Running Distribute Mobile 1: $1 2: $2 3: $3 4: $4 5: $5 6: $6

# Checkout last commit to compare the last version number
echo running appcenter build branches list -a $1 grep -A10 -E "Branch: +$3"
commitSHA=$(npx appcenter build branches list -a $1 | grep -A10 -E "Branch: +$3" | grep -E -m 1 'Commit SHA: +' | awk '{split($0,a,": "); print a[2]}' | sed 's/^ *//g')
git reset --hard HEAD
echo "Checking out commitSHA of latest native build"
if [[ ! -z $commitSHA ]]
then
  echo "git checkout $commitSHA"
  git checkout $commitSHA
  if [[ $4 == "ios" ]]
  then
      lastVersion=$(grep -A 2 CFBundleShortVersionString ios/Info.plist | grep string | sed -e "s/string//g" | sed -e "s/[<>\/]//g"| xargs)
  else
      # - // Use this Android alternative and tweak "awk 'NR == 2'" when overriding versionName via product flavors
      # - currentVersion=$(grep 'versionName' android/app/build.gradle | awk 'NR == 2' | grep -o '".*"' | tr -d '"')
      lastVersion=$(grep 'versionName' android/app/build.gradle | grep -o '".*"' | tr -d '"')
  fi
  echo "git checkout $3"
  git checkout $3
  echo "git pull origin $3"
  git pull origin $3
else
  lastVersion="0.0.0"
fi


echo $lastVersion version found at $commitSHA
npm run env_script

echo "Last version: ${lastVersion:-N/A}. Current version: $currentVersion"
vercomp $lastVersion $currentVersion

if [[ $? == 2 ]]
then
    echo "Queueing new native build ($currentVersion) on AppCenter"
    sh ./.bin/clone-config.sh
    npx appcenter build queue -a $1 -b $3
else
    echo "Code-pushing new bundle to $2 environment on AppCenter $5"
    if [[ $4 == "ios" ]]
    then
        APPCENTER_DATA=$(npx appcenter codepush deployment history $2 -a $5 --output json)
        LABEL=$(node ./.bin/get-codepush-label.js "$APPCENTER_DATA" "$2")
        npx appcenter codepush release-react -a $5 -d $2 --disable-duplicate-release-error -m -t $currentVersion --sourcemap-output --output-dir ./build

    else
        # - // Use this Android alternative when overriding versionName via product flavors
        APPCENTER_DATA=$(npx appcenter codepush deployment history $2 -a $5 --output json)
        LABEL=$(node ./.bin/get-codepush-label.js "$APPCENTER_DATA" "$2")
        npx appcenter codepush release-react -a $5 -d $2 --disable-duplicate-release-error -m -t $currentVersion --sourcemap-output --output-dir ./build

    fi
fi

