import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import NasaScreen from "../Components/Home/Nasa/NasaScreen";
import PlanetSelector from './Planets/PlanetSelector';
import Timeline from './Tech/Timeline.js';


{ /* <AppBottomNavigator.Screen
name="Learn"
children={LearnScreenTab}
options={{
  tabBarIcon: () => <IconA name="planet" size={25} color="#fff" />
}}
/> */ }


const LearnNavigator = createMaterialTopTabNavigator();

const LearnTab = () => (
  <LearnNavigator.Navigator
    initialRouteName="NASA"
    tabBarOptions={{
      style: { backgroundColor: '#072852' },
      // labelStyle: { fontSize: 14, fontWeight: 'bold' },
      activeTintColor: '#9ee7ff',
      indicatorStyle: { height: 3, backgroundColor: '#9ee7ff', paddingBottom: 6 },
      inactiveTintColor: '#9ee7ff',
      tabStyle: { height: 100, justifyContent: 'flex-end' }
    }}
  >
    <LearnNavigator.Screen
      name="Bodies"
      component={PlanetSelector}
    />
    <LearnNavigator.Screen
      name="Tech"
      component={Timeline}
    />
  </LearnNavigator.Navigator>
);

export default LearnTab;
