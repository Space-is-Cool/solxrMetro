/* eslint-disable react/no-children-prop */
import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeTopTab from '../Home/HomeTopTab';
import LearnScreenTab from '../Learn/LearnScreenTab';
import ARScreen from '../Experience/SplashAR';
import SettingsScreen from '../Settings/SettingsScreen';
import EventsScreen from '../Events/EventsScreen';

const AppBottomNavigator = createMaterialBottomTabNavigator();

const BottomTab = () => {

  return (
    <AppBottomNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarColor: '#072852'
      }}
    >
      <AppBottomNavigator.Screen
        name="Home"
        children={HomeTopTab}
        options={{
          tabBarIcon: () => <Image source={require('./assets/earthIcon.png')} style={styles.icon}/>
        }}
      />
      <AppBottomNavigator.Screen
        name="Learn"
        children={LearnScreenTab}
        options={{
          tabBarIcon: () => <Image source={require('./assets/planetIcon.png')} style={styles.icon}/>

        }}
      />
      <AppBottomNavigator.Screen
        name="Experience"
        children={ARScreen}
        options={{
          tabBarIcon: () => <Image source={require('./assets/shuttleIcon.png')} style={styles.icon}/>
        }}
      />
      <AppBottomNavigator.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: () => <Image source={require('./assets/teleIcon.png')} style={styles.icon}/>

        }}
      />
      <AppBottomNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Image source={require('./assets/astronautIcon.png')} style={styles.icon}/>
        }}
      />
    </AppBottomNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '90%',
    height: '90%'
  }
});
  
export default BottomTab;
