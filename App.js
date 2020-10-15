import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from  './app/views/home';
import WishListPage from './app/views/wishlist';
import ProfilePage from './app/views/profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            console.log("route: ", route)
            console.log("focused: ", focused)
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'profile') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'wishlist') {
              iconName = focused
                ? 'heart'
                : 'heart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={'#000'} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="wishlist" component={WishListPage} />
        <Tab.Screen name="profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}