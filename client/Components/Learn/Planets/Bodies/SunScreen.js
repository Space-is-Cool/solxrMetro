/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import SunInfo from './sunInfo.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    width: 420,
    height: 420,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  }
});

const SunScreen = ({ reload, setReload }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/sun.png')}
      />
      <ScrollView style={styles.info} loadMinimal={true} loadMinimalSize={0}>
        <SunInfo reload={reload} setReload={setReload}/>
      </ScrollView>
    </View>
  );
};

export default SunScreen;
