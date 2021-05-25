import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import NasaScreen from "../Components/Home/Nasa/NasaScreen";
import NasaScreen from './Nasa/NasaScreen';
import CommunityScreen from './Community/CommunityScreen';
import FavoritesScreen from './Favorites/FavoritesScreen';




const AppTopNavigator = createMaterialTopTabNavigator();

const HomeTopTab = () => (
  <AppTopNavigator.Navigator
    initialRouteName="IMAGE OF THE DAY"
    tabBarOptions={{
      style: { backgroundColor: '#072852' },
      labelStyle: { fontSize: 14, fontWeight: 'bold' },
      activeTintColor: '#9ee7ff',
      indicatorStyle: { height: 3, backgroundColor: '#9ee7ff', paddingBottom: 6 },
      inactiveTintColor: '#9ee7ff',
      tabStyle: { height: 100, justifyContent: 'flex-end' }
    }}
  >
    <AppTopNavigator.Screen component={NasaScreen} name="IMAGE OF THE DAY" />
    {/* <AppTopNavigator.Screen component={CommunityScreen} name="COMMUNITY" /> */}
    <AppTopNavigator.Screen component={FavoritesScreen} name="FAVORITES" />
  </AppTopNavigator.Navigator>
);

export default HomeTopTab;
