import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from '../screens/main/home';
import LibraryScreen from '../screens/main/library';
import ShortsScreen from '../screens/main/shorts';
import SubscriptionsScreen from '../screens/main/subscriptions';
import CustomTabBar from './customtabbar';
import Routes from './routes';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior='history'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => {
        return <CustomTabBar {...props} />;
      }}
    >
      <Tab.Screen
        key='HomeScreenTab'
        name={Routes.Home}
        component={HomeScreen}
      />
      <Tab.Screen
        key='ShortScreenTab'
        name={Routes.Short}
        component={ShortsScreen}
      />
      <Tab.Screen
        key='SubscriptionsScreenTab'
        name={Routes.Subscriptions}
        component={SubscriptionsScreen}
      />
      <Tab.Screen
        key='LibraryScreenTab'
        name={Routes.Library}
        component={LibraryScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
