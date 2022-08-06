#!/bin/bash
if [ -z "$APPCENTER_BUILD_ID" ]&&[ -z "$CI" ]
then
    echo "APPCENTER_BUILD_ID and CI not defined"
    cd ../ && npm i && cd ./mobile
#    cd ./ios && USE_FABRIC=1 RCT_NEW_ARCH_ENABLED=1 arch -x86_64 pod install --repo-update && cd ..
    cd ./ios && arch -x86_64 pod install --repo-update && cd ..
else
    echo "APPCENTER_BUILD_ID is defined"
fi
