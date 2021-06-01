/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect, createContext} from 'react';
import { Button, Image, View, Text, ActivityIndicator, StyleSheet, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import { FontContext } from '../Root/Context';
import PlanetSwitcher from './PlanetSwitcherAR';
import LookUpAR from './LookUpAR';
import PortalAR from './PortalAR';
import LUInfoModal from './LUInfoModal';
import PCInfoModal from './PCInfoModal';
import PortalInfoModal from './PortalInfoModal';

const SplashAR = ({ navigation }) => {

  const [rendering, setRendering] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setRendering(false);
  }, [isFocused]);

  return (
    <FontContext.Consumer>
      {({ Font }) => (
        <>
          <ImageBackground
            style={styles.image}
            source={require('./assets/starfield.png')}>
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.header}>Choose Your AR Experience</Text>
              <Text style={styles.headerTwo}>Press the info button to learn about each feature</Text>
              <Text></Text>
              <Text></Text>
              <View style={styles.exp}>
                <Button
                  onPress={() => {
                    setRendering(true);
                    setTimeout(() => navigation.navigate('PlanetSwitcher'), 10);
                  }} title="Planet Clicker"
                />
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate('PCInfoModal')}>
                  <Image
                    source={require('./assets/iconI.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text></Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    setRendering(true);
                    setTimeout(() => navigation.navigate('LookUp'), 10);
                  }}
                  title="Look Up"
                />
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate('LUInfoModal')}>
                  <Image
                    source={require('./assets/iconI.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text></Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  onPress={() => {
                    setRendering(true);
                    setTimeout(() => navigation.navigate('Portal'), 10);
                  }}
                  title="Portal"
                />
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate('PortalInfoModal')}>
                  <Image
                    source={require('./assets/iconI.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
              {rendering && (
                <>
                  <Text style={{...Font, color: 'white'}}>AR Launching: Please standby</Text>
                  <Text></Text>
                  <ActivityIndicator size="large" color={'#9ee7ff'}/>
                </>
            
              )}
            </View>
          </ImageBackground>
        </>
      )}
    </FontContext.Consumer>
  );
};




const ARExperiences = ({navigation}) => {

  const ARStack = createStackNavigator();

  return (
    <ARStack.Navigator mode="modal" headerMode="none">
      <ARStack.Screen name='SplashAR' component={SplashAR} />
      <ARStack.Screen name='PCInfoModal' component={PCInfoModal} />
      <ARStack.Screen name='LUInfoModal' component={LUInfoModal} />
      <ARStack.Screen name='PortalInfoModal' component={PortalInfoModal} />
      <ARStack.Screen name='PlanetSwitcher' component={PlanetSwitcher} />
      <ARStack.Screen name='LookUp' component={LookUpAR} />
      <ARStack.Screen name='Portal' component={PortalAR} />
    </ARStack.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontSize: 30,
    marginVertical: 20
  },
  h2: {
    fontSize: 20,
    marginVertical: 20
  },
  p: {
    fontSize: 16,
    marginVertical: 12,
    textAlign: 'left',
    maxWidth: '80%',
    alignItems: 'flex-start',
  },
  button: {
    fontSize: 30
  },
  exp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '2%',
    color: '#9ee7ff',
    fontSize: 26,
    fontWeight: 'bold',

    width: '100%'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
    fontStyle: 'italic'
  },
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    color: '#9ee7ff',
    textAlign: 'center'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: '4%'
  }
});

export default ARExperiences;
