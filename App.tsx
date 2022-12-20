import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Toast from './src/components/Toast';

import AppNavigator from './src/router';
import { bottomSheetRef, toastRef } from './src/utils/action';
import { Color } from './src/utils/color';

const App = () => {
  useEffect(() => {
    example();
  }, []);

  const example = async () => {
    try {
      const response = await changeNavigationBarColor(Color.balck, false, true);
      console.log('afds', response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
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
        barStyle='light-content'
      />
      <AppNavigator />
      <Toast {...{ ref: toastRef }} />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        backdropComponent={BottomSheetBackdrop}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        // backgroundStyle={{backgroundColor: Color.balck}}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootViewBackground: {
    flex: 1,
  },
});

export default App;
