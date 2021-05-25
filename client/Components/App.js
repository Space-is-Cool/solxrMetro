import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from './Root/Root.js';

LogBox.ignoreAllLogs();


export default function App() {
  return (
    <>
      <RootNavigator />
    </>
  );
}
