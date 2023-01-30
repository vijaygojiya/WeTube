import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';

import ProfileScreen from '../screens/others/profile';
import VideoDetailScreen from '../screens/others/video';
import {VideoType} from '../typeing';
import {RootStackParamList} from '../typings';
import {Color} from '../utils/color';
import {Routes} from './routes';

import TabNavigator from './tabnavigator';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Routes.MainNav} component={TabNavigator} />
      <Screen name={Routes.Profile} component={ProfileScreen} />
      <Screen
        options={{
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom',
          animationDuration: 100,
        }}
        name={Routes.VideoDetail}
        component={VideoDetailScreen}
      />
    </Navigator>
  );
}

export default AppNavigator;
