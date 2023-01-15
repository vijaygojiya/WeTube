import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo, useReducer} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {useSharedValue} from 'react-native-reanimated';

import AppNavigator from './src/router';
// import VideoScreen from './src/screens/others/video';
import {PlayerContext} from './src/state/context';
import {playerReducer} from './src/state/reducer';
import {initialPlayerState} from './src/state/state';
import {Color} from './src/utils/color';
import {showToast} from './src/utils/toast';

const App = () => {
  const [store, dispatch] = useReducer(playerReducer, initialPlayerState);

  const videoTranslateY = useSharedValue(0);

  useEffect(() => {
    updateNavigationBarColor();
  }, []);

  const updateNavigationBarColor = async () => {
    try {
      await changeNavigationBarColor(Color.balck, false, true);
    } catch (e) {
      showToast(`${e.message}`);
    }
  };

  // ref

  // variables
  const snapPoints = useMemo(() => ['45%'], []);

  // callbacks

  return (
    <GestureHandlerRootView style={styles.rootViewBackground}>
      <StatusBar
        animated={true}
        backgroundColor={Color.balck}
        barStyle="light-content"
      />
      <PlayerContext.Provider value={{store, dispatch}}>
        <NavigationContainer>
          <AppNavigator videoTranslateY={videoTranslateY} />
          {/* <VideoScreen /> */}
        </NavigationContainer>
      </PlayerContext.Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootViewBackground: {
    flex: 1,
  },
});

export default App;
