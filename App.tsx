import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

  return (
    <GestureHandlerRootView style={styles.rootViewBackground}><Text>We Tube "Jay Dwarkadhis !"</Text></GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootViewBackground: {
    flex: 1
  }
}
);

export default App;
