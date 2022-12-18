import React, { useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import AppNavigator from './src/router';
import { Color } from './src/utils/color';

const App = () => {
  useEffect(() => {
    example();
  }, []);

  const example = async () => {
    try {
      const response = await changeNavigationBarColor( Color.balck, false, true);
      console.log('afds', response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
    }
  };
  return (
    <GestureHandlerRootView style={styles.rootViewBackground}>
      <StatusBar
        animated={true}
        backgroundColor={Color.balck}
        barStyle="light-content"
      />
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootViewBackground: {
    flex: 1,
  },
});

export default App;
