import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from './Root/Root.js';
import {
  sharedSpace,
  milkyOne,
  milkyTwo,
  desertOne,
  desertTwo,
  shipOne,
  shipTwo,
  earthOne,
  earthTwo
} from './Experience/boombox';

LogBox.ignoreAllLogs();


export default function App() {
  sharedSpace;
  milkyOne;
  milkyTwo;
  desertOne;
  desertTwo;
  shipOne;
  shipTwo;
  earthOne;
  earthTwo;
  return (
    <RootNavigator />
  );
}
