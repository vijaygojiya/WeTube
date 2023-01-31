import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Animated from 'react-native-reanimated';

import ProfileScreen from '../screens/others/profile';
import {RootStackParamList} from '../typings';
import BottomTabNavigator from './customtabbar';
import {Routes} from './routes';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

function AppNavigator({
  videoTranslateY,
}: {
  videoTranslateY: Animated.SharedValue<number>;
}) {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Routes.MainNav}>
        {props => (
          <BottomTabNavigator {...props} videoTranslateY={videoTranslateY} />
        )}
      </Screen>
      <Screen name={Routes.Profile} component={ProfileScreen} />
    </Navigator>
  );
}

export default AppNavigator;
