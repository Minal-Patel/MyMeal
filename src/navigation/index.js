import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Onbording from '../screens/Onbording';
import {NAVKEY} from '../constant/pageKey';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Tabnav from './tabnavigation';

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={NAVKEY.LOGIN}>
        <Stack.Screen name={NAVKEY.ONBORDING} component={Onbording} />
        <Stack.Screen name={NAVKEY.LOGIN} component={Login} />
        <Stack.Screen name={NAVKEY.WELCOME} component={Welcome} />
        <Stack.Screen name={NAVKEY.TABNAV} component={Tabnav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
