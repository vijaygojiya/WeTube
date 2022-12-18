import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/router';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.rootViewBackground}>
      <StatusBar
        animated={true}
        backgroundColor={'white'}
        barStyle="dark-content"
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
