/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, createContext} from 'react';
import { Button, View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const PortalInfoModal = ({ navigation }) => (
  <>
    <ImageBackground
      style={styles.image}
      source={require('./assets/starfield.png')}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.header}>Portal View</Text>
          <Text></Text>
          <Text style={styles.headerTwo}>Description:</Text>
          <Text></Text>
          <Text style={styles.text}>Step through portals to transport you to new locations</Text>
          <Text></Text>
          <Text style={styles.headerTwo}>Instructions:</Text>
          <Text></Text>
          <Text style={styles.text}>Allow Solxr access to your device camera</Text>
          <Text></Text>
          <Text style={styles.text}>Make sure you have enough room to comfortably walk around in</Text>
          <Text></Text>
          <Text style={styles.text}>Wait for the portals to render around you in the space</Text>
          <Text></Text>
          <Text style={styles.text}>Walk through a portal to transport you to a new space</Text>
          <Text></Text>
          <Text style={styles.text}>To exit the space, just walk back through the portal the way you came in</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={() => navigation.navigate('SplashAR')} title= "Back to AR Menu" />
        </View>
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
export default PortalInfoModal; 
