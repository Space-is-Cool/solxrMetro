/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import NeptuneInfo from './NeptuneInfo.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    width: 400,
    height: 400,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  }
});

const NeptuneScreen = ({reload, setReload}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/neptune.jpg')}
      />
      <ScrollView style={styles.info}>
        <NeptuneInfo reload={reload} setReload={setReload}/>
      </ScrollView>
    </View>
  );
};

export default NeptuneScreen;
