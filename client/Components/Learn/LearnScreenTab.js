import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PlanetSelector from './Planets/PlanetSelector';
import Timeline from './Tech/Timeline.js';

const LearnNavigator = createMaterialTopTabNavigator();

const LearnTab = () => (
  <LearnNavigator.Navigator
    initialRouteName="NASA"
    tabBarOptions={{
      style: { backgroundColor: '#072852' },
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
