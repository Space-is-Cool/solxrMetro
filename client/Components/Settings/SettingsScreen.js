/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MusicContext, FontContext, MusicChoiceContext} from '../Root/Context';
import axios from 'axios';
import {sound1} from '../Root/soundOne.js';
import {sound2} from '../Root/soundTwo';
import { Switch } from 'react-native-switch';
import Sound from 'react-native-sound';
import LoginModal from '../Root/Login.js';

const SettingsScreen = ({navigation, route}) => {
  const [toggle, setToggle] = useState({
    accessibility: false,
    music: true,
    theme: false,
    email: false,
  });
  const [emailInput, setEmailInput] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const {accessibility, music, theme, email} = JSON.parse(storedUser);
      setToggle({accessibility, music, theme, email});
    } catch (e) {
      console.log('error', e);
    }
  };

  const musicToggle = (music, chooseMusic) => {
    if (toggle.music === true) {
      sound1.stop();
      sound2.stop();
    } else {
      if (chooseMusic === true) {
        sound1.play(() => {
          sound1.release();
        });
        sound1.setNumberOfLoops(-1);
        sound1.setVolume(0.5);
      } else {
        sound2.play(() => {
          sound2.release();
        });
        sound2.setNumberOfLoops(-1);
        sound2.setVolume(1);
      }
    }
  };

  const CurrentlyPlaying = (chooseMusic) => {
    if (toggle.music === true && chooseMusic === true) {
      sound1.stop();
      sound2.stop();
      sound1.play(() => {
        sound1.release();
      });
      sound1.setNumberOfLoops(-1);
      sound1.setVolume(0.5);
    } else if (toggle.music === true && chooseMusic === false) {
      sound1.stop();
      sound2.stop();
      sound2.play(() => {
        sound2.release();
      });
      sound2.setNumberOfLoops(-1);
      sound2.setVolume(1);
    }
  };

  const modUser = async (prop) => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const user = JSON.parse(storedUser);
      user[prop] = !user[prop];
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setToggle(() => {
        const copy = Object.assign({}, toggle);
        copy[prop] = !copy[prop];
        return copy;
      });
    } catch (e) {
      console.log('there was an error', e);
    }
  };

  const modEmail = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const user = JSON.parse(storedUser);
      user.email = emailInput;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setToggle(() => {
        const copy = Object.assign({}, toggle);
        copy.email = !copy.email;
        return copy;
      });
      setEmailInput('');
      saveToServer();
    } catch (e) {
      console.log('there was an error', e);
    }
  };
  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (e) {
      console.info(e);
    }
    console.log('Done.');
  };
  const saveToServer = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    const user = JSON.parse(storedUser);
    axios.put('http://solxrapp.com/users/update', user)
      .then(() => console.log('success!!!'))
      .catch(err => console.log('fail', err));
  };

  const accessibility = {
    normal: {
      fontSize: 20,
      fontFamily: 'Avenir-Book'
    },
    readable: {
      fontSize: 24,
      fontFamily: 'Arial'
    }
  };

  return (
    <FontContext.Consumer>
      {({ Font, setFont }) => (
        <MusicContext.Consumer>{ ({ music, setMusic }) => (
          <MusicChoiceContext.Consumer>{ ({ chooseMusic, setChooseMusic }) => (
            <ImageBackground
              style={styles.image}
              source={require('./assets/starfield.png')}>
              <View style={styles.container}>
                <Text style={{...Font, ...styles.header}}>Settings</Text>
                <Text style={{...Font, ...styles.value}}>Readable Font</Text>
                <Switch
                  style={styles.switch}
                  circleActiveColor={'#9ee7ff'}
                  circleInActiveColor={'#f4f3f4'}
                  backgroundActive={'rgb(7, 40, 82)'}
                  backgroundInactive={'rgb(7, 40, 82)'}
                  switchLeftPx={5}
                  switchRightPx={5} 
                  onValueChange={() => {
                    modUser('accessibility');
                    toggle.accessibility
                      ? setFont(accessibility.normal)
                      : setFont(accessibility.readable); 
                  }}
                  value={toggle.accessibility}
                />
                <Text style={{...Font, ...styles.value}}>Music</Text>
                { toggle.music && <View style={styles.buttonTwo}>
                  <AwesomeButton
                    style={styles.buttonThree}
                    width={100}
                    height={50}
                    backgroundColor={toggle.theme
                      ? 'rgb(7, 40, 82)'
                      : '#C0C0C0'}	
                    onPress={()=>{
                      setChooseMusic(false);
                      CurrentlyPlaying(false);
                      modUser('theme');
                      setToggle(toggle.theme = false);
                    }}
                  >Ambient
                  </AwesomeButton>
                  <Text></Text>
                  <AwesomeButton
                    style={styles.buttonTwo}
                    width={100}
                    height={50}
                    backgroundColor={toggle.theme
                      ? '#C0C0C0'
                      : 'rgb(7, 40, 82)'}
                    onPress={()=>{
                      setChooseMusic(true);
                      CurrentlyPlaying(true);
                      modUser('theme');
                      setToggle(toggle.theme = true);
                    }}
                  >Original Theme
                  </AwesomeButton>
                </View>}
                <Text></Text>
                <Switch
                  style={styles.switch}
                  circleActiveColor={'#9ee7ff'}
                  circleInActiveColor={'#f4f3f4'}
                  backgroundActive={'rgb(7, 40, 82)'}
                  backgroundInactive={'rgb(7, 40, 82)'}
                  switchLeftPx={5}
                  switchRightPx={5} 
                  onValueChange={() => { setMusic(!music); musicToggle(music, chooseMusic); modUser('music'); }}
                  value={toggle.music}
                />
                {/* <Text style={{...Font, ...styles.value}}>NASA Theme</Text>
            <Switch
              style={styles.switch}
              circleActiveColor={'#9ee7ff'}
              circleInActiveColor={'#f4f3f4'}
              backgroundActive={'rgb(7, 40, 82)'}
              backgroundInactive={'rgb(7, 40, 82)'}
              switchLeftPx={5}
              switchRightPx={5} 
              onValueChange={() => modUser('theme')}
              value={toggle.theme}
            /> */}
                <Text style={{...Font, ...styles.value}}>Sign up for Astral Emails:</Text>
                {toggle.email ?
                  <AwesomeButton
                    style={styles.button}
                    width={200}
                    height={50}
                    onPress={modEmail}>
            Unsubscribe
                  </AwesomeButton> :
                  <>
                    <TextInput
                      style={styles.input}
                      onChangeText={setEmailInput}
                      value={emailInput}/>
                    <AwesomeButton
                      style={styles.button}
                      width={200}
                      height={50}
                      backgroundColor={emailInput
                        ? 'rgb(7, 40, 82)'
                        : '#C0C0C0'}	
                      onPress={modEmail}
                    >Submit
                    </AwesomeButton>
                  </>
                }
                <AwesomeButton
                  style={styles.button}
                  width={200}
                  height={50}
                  // progress
                  onPress={()=> {
                    saveToServer();
           
                  }}
                >
      Save Settings
                </AwesomeButton>
                <AwesomeButton
                  style={styles.button}
                  width={200}
                  height={50}
                  progress
                  onPress={() => {
                    clearStorage();
                    navigation.navigate('login');
                  }}
                >
      Log Out
                </AwesomeButton>
              </View>
            </ImageBackground>
          )
          }</MusicChoiceContext.Consumer>
        )
        }</MusicContext.Consumer>
      )}
    </FontContext.Consumer>
  );
};

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
    fontSize: 26,
    fontWeight: 'bold',
    width: '100%'
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
    fontSize: 30,
    color: '#9ee7ff',
    textAlign: 'center'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
export default SettingsScreen;

