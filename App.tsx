import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo, useReducer} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import AppNavigator from './src/router';
import {PlayerContext} from './src/state/context';
import {playerReducer} from './src/state/reducer';
import {initialPlayerState} from './src/state/state';
import {Color} from './src/utils/color';
import {showToast} from './src/utils/toast';

const App = () => {
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
    <GestureHandlerRootView style={styles.rootViewBackground}>
      <StatusBar
        animated={true}
        backgroundColor={Color.balck}
        barStyle="light-content"
      />
      <PlayerContext.Provider value={{store, dispatch}}>
        <NavigationContainer>
          <AppNavigator />
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
