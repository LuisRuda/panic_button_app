import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {HomeScreen, ProfileScreen} from '../screens';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#a1a1aa',
        tabBarStyle: {
          height: 80,
          backgroundColor: '#dc2626',
          paddingTop: Platform.OS === 'ios' ? 5 : 0,
        },
      }}>
      <Tab.Screen
        name="SOS"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="alert-octagon" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Router;
