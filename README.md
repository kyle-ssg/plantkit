![gif1.gif](gif1.gif)gif
![gif2.gif](gif2.gif)gif


## Preinstall - using nvm and .nvmrc
In order to standardise the node environment of the team, this project uses an .nvmrc.
- Install zhsrc [here](https://ohmyz.sh/#install)
- Install NVM [here](https://github.com/nvm-sh/nvm#installing-and-updating)
- Add the following to the bottom of ``~/.zshrc`` [here](https://github.com/nvm-sh/nvm#zsh)
- Install XCode (App Store)
- Install Android Studio [here](https://developer.android.com/studio?gclid=CjwKCAjw3K2XBhAzEiwAmmgrAjN1PHIK0Qkxa9fR83LrMUx2dVWu2FqpLmJl1RBdPax_zhZfJRCgwxoCV7cQAvD_BwE&gclsrc=aw.ds)
Add the following to ``~/.zshrc``
  
```shell
export PATH=$PATH:~/Library/Android/sdk/platform-tools
export PATH=$PATH:~/Library/Android/sdk
export PATH=$PATH:~/.android/avd
export PATH=$PATH:~/Downloads/flutter/bin
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk
export ANDROID_AVD_HOME=~/.android/avd
```

## Running Mobile
**Android**
```
npm i
npm run android
```

**iOS**
```
npm i
npm run ios
```
