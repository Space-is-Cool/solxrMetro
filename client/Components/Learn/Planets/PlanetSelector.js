/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SunScreen from './Bodies/SunScreen';
import MercuryScreen from './Bodies/MercuryScreen';
import VenusScreen from './Bodies/VenusScreen';
import EarthScreen from './Bodies/EarthScreen';
import MoonScreen from './Bodies/MoonScreen';
import MarsScreen from './Bodies/MarsScreen';
import JupiterScreen from './Bodies/JupiterScreen';
import SaturnScreen from './Bodies/SaturnScreen';
import UranusScreen from './Bodies/UranusScreen';
import NeptuneScreen from './Bodies/NeptuneScreen';
import Test from './Bodies/test.js';

import Swiper from 'react-native-swiper/src';
import Sound from 'react-native-sound';



const PlanetSelector = () => {

  const [reload, setReload] = useState(0);

  const ping = new Sound(require('./assets/ping.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });

  const playPing = () => {
    ping.play(() => {
      ping.release();
    });
    ping.setVolume(0.5);
    
  };


  return (
    <Swiper
      style={styles.main}
      loop={false}
      onIndexChanged={(i)=>{
        setReload(i);
      }}
      showsPagination={false}
    >
      <Test playPing={playPing}/>
      <SunScreen reload={reload} setReload={setReload}/>
      <MercuryScreen reload={reload} setReload={setReload}/>
      <VenusScreen reload={reload} setReload={setReload}/>
      <EarthScreen reload={reload} setReload={setReload}/>
      <MoonScreen reload={reload} setReload={setReload}/>
      <MarsScreen reload={reload} setReload={setReload}/>
      <JupiterScreen reload={reload} setReload={setReload}/>
      <SaturnScreen reload={reload} setReload={setReload}/>
      <UranusScreen reload={reload} setReload={setReload}/>



      <NeptuneScreen reload={reload} setReload={setReload}/>
    </Swiper>
  );
};

export default PlanetSelector;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black'
  },

});
