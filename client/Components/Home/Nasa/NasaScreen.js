/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Swiper from 'react-native-swiper/src';
import {IotdContext, FontContext} from '../../Root/Context';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(7, 40, 82)'
  },
  image: {
    flex: 5,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  img: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  },
  //
  header: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: '2%',
    backgroundColor: 'rgba(7, 40, 82, 0.4)'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
    fontStyle: 'italic',
    paddingTop: '2%',
    backgroundColor: 'rgba(7, 40, 82, 0.4)'
  },
  headerThree: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 14,
    backgroundColor: 'rgba(7, 40, 82, 0.4)',
    paddingBottom: '2%',
  },
  textTwo: {
    fontSize: 17,
    color: 'white',
    padding: 10,
    backgroundColor: 'rgba(7, 40, 82, 0.6)'
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  button: {
    width: 35,
    height: 35,
  },
});
const saveToFave = async (title, explanation, url) => {
  const storedUser = await AsyncStorage.getItem('user');
  const user = JSON.parse(storedUser);
  // axios call to backend, with an updated stringified array of this user's favorites
  const data = JSON.stringify({
    'url': url,
    'explanation': explanation,
    'title': title,
    'user_id': user.id
  });
  const config = {
    method: 'put',
    url: 'http://solxrapp.com/users/iotd',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      alert(response.data);
    });
};
const NasaScreen = ({navigation, route}) => {
  return (
    <FontContext.Consumer>
      {({ Font }) => (
        <IotdContext.Consumer>
          {({url, title, explanation}) => (
            <View style={styles.container}>
              <ImageBackground
                style={styles.image}
                source={{uri: url}}>
                <Swiper
                  horizontal={false}
                  loop={false}
                  showsPagination={false}
                >
                  <View>
                    <Text style={{...Font, ...styles.headerTwo}}>{title}</Text>
                    <Text style={{...Font, ...styles.headerThree}}>Swipe up for more info</Text>
                  </View>
                  <ScrollView>
                    <Text></Text>
                    <Text style={{...Font, ...styles.textTwo}}>
                      {explanation}
                    </Text>
                    <Text></Text>
                  </ScrollView>
                </Swiper>
                <TouchableOpacity style={styles.img} onPress={()=> saveToFave(title, explanation, url)}>
                  <Image
                    style={styles.button}
                    source={require('./assets/star.png')}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
        </IotdContext.Consumer>
      )}
    </FontContext.Consumer>
  );
};
export default NasaScreen;
