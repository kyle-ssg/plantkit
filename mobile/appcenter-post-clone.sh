NODE_MODULE_RAMDISK=$(hdid -nomount ram://4194304) #2GB
newfs_hfs -v NodeModules $NODE_MODULE_RAMDISK
mkdir -p $APPCENTER_SOURCE_DIRECTORY/node_modules || true
diskutil mount -mountPoint $APPCENTER_SOURCE_DIRECTORY/node_modules $NODE_MODULE_RAMDISK

mkdir -p $APPCENTER_SOURCE_DIRECTORY/android/.gradle || true
diskutil mount -mountPoint $APPCENTER_SOURCE_DIRECTORY/android/.gradle $NODE_MODULE_RAMDISK

mkdir -p $APPCENTER_SOURCE_DIRECTORY/ios/Pods || true
diskutil mount -mountPoint $APPCENTER_SOURCE_DIRECTORY/ios/Pods $NODE_MODULE_RAMDISK
