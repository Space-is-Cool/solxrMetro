/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {IotdContext, MusicContext, FontContext, MusicChoiceContext } from './Context';
import axios from 'axios';
import BottomTab from './RootBottomTab';
import LoginModal from './Login';
import {NASA_KEY} from '@env';


const AppNavigation = createStackNavigator();


const RootNavigator = () => {
  const [IoTD, setIoTD] = useState(null);
  const [Font, setFont] = useState({
    fontSize: 24,
    fontFamily: 'Avenir-Book'
  });
  const [music, setMusic] = useState(true);
  const [chooseMusic, setChooseMusic] = useState(false);

  useEffect(() => {
    getNasa();
  }, []);

  const getNasa = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
      .then(({data}) => {
        setIoTD(data);
      });
  };


  return (
    <FontContext.Provider value={{Font, setFont}}>
      <MusicContext.Provider value={{ music, setMusic }}>
        <MusicChoiceContext.Provider value={{ chooseMusic, setChooseMusic }}>
          <IotdContext.Provider value={IoTD}>
            {IoTD && 
        <NavigationContainer>
          <AppNavigation.Navigator
            mode="modal"
            initialRouteName="login"
            screenOptions={{
              header: () => null
            }}
          >
            <AppNavigation.Screen name="index" children={BottomTab} />
            <AppNavigation.Screen name="login" component={LoginModal} />
          </AppNavigation.Navigator>
        </NavigationContainer>
            }
          </IotdContext.Provider>
        </MusicChoiceContext.Provider>
      </MusicContext.Provider>
    </FontContext.Provider>

  );
};

const Hi = () => {
  return (
    <>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
      <Text>hey</Text>
    </>
  );
};
export default RootNavigator;

