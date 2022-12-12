import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {NAVKEY} from '../constant/pageKey';

import {Tabbar} from './tabbar';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Homebar  = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={NAVKEY.HOME} component={Home}/>
    </Stack.Navigator>
  );
}

const Tabnav = () => {
  return (
    <Tab.Navigator
      initialRouteName={NAVKEY.HOMETAB}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
      }}
      tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen name={NAVKEY.HOMETAB} component={Homebar} />
    </Tab.Navigator>
  );
};

export default Tabnav;
