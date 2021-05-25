/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import JupiterInfo from './JupiterInfo.js';
import EarthInfo from './EarthInfo.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    justifyContent: 'center',
    width: 415,
    height: 415,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  }
});

const JupiterScreen = ({reload, setReload}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/jupiter.jpg')}
      />
      <ScrollView style={styles.info}>
        <JupiterInfo reload={reload} setReload={setReload} />
      </ScrollView>
    </View>
  );
};

export default JupiterScreen;
