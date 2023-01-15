import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';

import ProfileScreen from '../screens/others/profile';
import {Color} from '../utils/color';
import Routes from './routes';

export type RootParamList = {
  MainNav: undefined;
  Profile: undefined;
};
import TabNavigator from './tabnavigator';

const {Navigator, Screen} = createNativeStackNavigator<RootParamList>();

const MyTheme = {
  dark: false,
  colors: {
    background: Color.balck,
  },
};

function AppNavigator({
  videoTranslateY,
}: {
  videoTranslateY: SharedValue<number>;
}) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Routes.MainNav}>
        {() => <TabNavigator videoTranslateY={videoTranslateY} />}
      </Screen>
      <Screen name={Routes.Profile} component={ProfileScreen} />
    </Navigator>
  );
}

export default AppNavigator;
