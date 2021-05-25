import React, {useState, useEffect, createContext} from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const LUInfoModal = ({ navigation }) => (
  <>
    <ImageBackground
      style={styles.image}
      source={require('./assets/starfield.png')}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header}>Look Up</Text>
        <Text></Text>
        <Text style={styles.headerTwo}>Description:</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.text}>See the solar system in its present state This model of the Sun, Moon, and 8 planets is built with live data</Text>
        <Text></Text>
        <Text style={styles.headerTwo}>Instructions:</Text>
        <Text></Text>
        <Text style={styles.text}>Allow Solxr access to your device camera       </Text>
        <Text></Text>
        <Text style={styles.text}>Point your camera towards a flat, rectangular surface on which to place the 3d models</Text>
        <Text></Text>
        <Text style={styles.text}>When presented with a gray rectangle on the surface, click it!</Text>
        <Text></Text>
        <Text style={styles.text}>Pinch any area of the screen not occupied by a solar body to zoom in and out</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('SplashAR')} title= "Back to AR Menu" />
      </View>
    </ImageBackground>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  value: {
    color: '#9ee7ff',
    textAlign: 'center',
    marginVertical: 12
  },
  button: {
    marginBottom: '10%',
  },
  buttonTwo: {
    flexDirection: 'row'
  },
  switch: {
    marginBottom: '30%',
  },
  header: {
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '2%',
    color: '#9ee7ff',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 25,
    fontStyle: 'italic'
  },
  input: {
    height: 40,
    width: 175,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white'

  },
  text: {
    fontSize: 15,
    color: '#9ee7ff',
    textAlign: 'center'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});

export default LUInfoModal;
