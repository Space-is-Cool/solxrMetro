/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import MercuryInfo from './MercuryInfo.js';
import Swiper from 'react-native-swiper/src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    paddingTop: 30,
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    width: 340,
    height: 340,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  },
});

const MercuryScreen = ({reload, setReload}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/mercury.png')}
      />
      <ScrollView style={styles.info}>
        <MercuryInfo reload={reload} setReload={setReload}/>
      </ScrollView>

    </View>
  );
};

export default MercuryScreen;

