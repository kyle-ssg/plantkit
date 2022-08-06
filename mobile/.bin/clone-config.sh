# Creates a release branch config in appcenter to allow for deployment
# APPCENTER_NAME_ANDROID_PRODUCTION="SiteAssist/SiteAssist-Android-Production" APPCENTER_NAME_IOS_PRODUCTION="SiteAssist/SiteAssist-iOS-Production" CI_COMMIT_REF_NAME="mobile/staging/1.2.7" sh ./.bin/clone-config.sh

echo "Cloning config from main to $CI_COMMIT_REF_NAME"

OWNER_NAME=$(echo "$APPCENTER_NAME_ANDROID_PRODUCTION" | sed -e "s/\/.*//g"| xargs)
APP_NAME_IOS=$(echo "$APPCENTER_NAME_IOS_PRODUCTION" | sed -e "s/.*\///g"| xargs)
APP_NAME_ANDROID=$(echo "$APPCENTER_NAME_ANDROID_PRODUCTION" | sed -e "s/.*\///g"| xargs)
NEW_BRANCH=$(echo "$CI_COMMIT_REF_NAME" | sed -e "s/\//%2F/g")
CLONE_BRANCH="main"
IOS_TOKEN=$APPCENTER_ACCESS_TOKEN
ANDROID_TOKEN=$APPCENTER_ACCESS_TOKEN
echo $IOS_TOKEN
if [ "$NEW_BRANCH" == "$CLONE_BRANCH" ]; then
    exit
else
  echo "Cloning appcenter config $OWNER_NAME $APP_NAME_IOS $APP_NAME_ANDROID $CLONE_BRANCH > $NEW_BRANCH"
fi

####Clone iOS build
curl --location --request POST "https://appcenter.ms/api/v0.1/apps/$OWNER_NAME/$APP_NAME_IOS/branches/$NEW_BRANCH/config" \
--header 'accept: application/json' \
--header "X-API-Token: $IOS_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw "{\"cloneFromBranch\": \"$CLONE_BRANCH\"}"

echo "curl --location --request POST 'https://appcenter.ms/api/v0.1/apps/$OWNER_NAME/$APP_NAME_IOS/branches/$NEW_BRANCH/config' \
--header 'accept: application/json' \
--header 'X-API-Token: $IOS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{\'cloneFromBranch\': \'$CLONE_BRANCH\'}'"


####Clone Android build
curl --location --request POST "https://appcenter.ms/api/v0.1/apps/$OWNER_NAME/$APP_NAME_ANDROID/branches/$NEW_BRANCH/config" \
--header 'accept: application/json' \
--header "X-API-Token: $ANDROID_TOKEN" \
--header 'Content-Type: application/json' \
--data-raw "{\"cloneFromBranch\": \"$CLONE_BRANCH\"}"

