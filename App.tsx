import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo, useReducer} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {useSharedValue} from 'react-native-reanimated';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigator from './src/router';
import {VideoScreen} from './src/screens/others/video';
import {PlayerContext} from './src/state/context';
import {playerReducer} from './src/state/reducer';
import {initialPlayerState} from './src/state/state';
import {Color} from './src/utils/color';
import {showToast} from './src/utils/toast';

const App = () => {
  const videoTranslateY = useSharedValue(0);
  const [store, dispatch] = useReducer(playerReducer, initialPlayerState);

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

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={styles.rootViewBackground}>
        <StatusBar
          animated={true}
          backgroundColor={Color.balck}
          barStyle="light-content"
        />
        <PlayerContext.Provider value={{store, dispatch}}>
          <NavigationContainer>
            <AppNavigator />
            <VideoScreen videoTranslateY={videoTranslateY} />
          </NavigationContainer>
        </PlayerContext.Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  rootViewBackground: {
    flex: 1,
  },
});

export default App;
