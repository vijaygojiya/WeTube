import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/others/profile';
import Routes from './routes';
import TabNavigator from './tabnavigator';
import {Color} from '../utils/color';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: Color.balck,
  },
};

function AppNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.MainNav} component={TabNavigator} />
        <Stack.Screen name={Routes.Profile} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
