package com.plantkit.app;

import com.facebook.react.ReactActivity;

// REACT_NATIVE_REANIMATED
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "PlantKit";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       ReactRootView reactRootView = new RNGestureHandlerEnabledRootView(MainActivity.this);
       // If you opted-in for the New Architecture, we enable the Fabric Renderer.
       reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
       return reactRootView;
      }


      @Override
      protected boolean isConcurrentRootEnabled() {
        // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
        // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
        return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
      }
    };
  }

  //         @Override
  //         public void onNewIntent(Intent intent) {
  //             super.onNewIntent(intent);
  //             setIntent(intent);
  //         }
}
