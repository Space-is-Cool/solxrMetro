/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import favData from './favData.js';
import { FontContext } from '../../Root/Context';


const FavoritesScreen = ({navigation, route}) => {
  const [realData, setRealData] = useState(favData);
  const isFocused = useIsFocused();



  useEffect(() => {
    dataFetch();
  }, [isFocused]);

  const dataFetch = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    const user = JSON.parse(storedUser);
    axios.get(`http://solxrapp.com/users/iotd/?user_id=${user.id}`)
      .then(({data}) => {
        data.length
          ? setRealData(data)
          : setRealData(favData);
      });
  };

  const list = () => {
    return realData.map((fav) => {
      return (
        <FontContext.Consumer key={fav.id}>
          {({ Font }) => (
            <View style={styles.container} key={fav.id}>
              <ImageBackground
                style={styles.image}
                source={{uri: fav.url}}>
                <Swiper
                  horizontal={false}
                  loop={false}
                  showsPagination={false}
                >
                  <View>
                    <Text style={{...Font, ...styles.headerTwo}}>{fav.title}</Text>
                    <Text style={{...Font, ...styles.headerThree}}>Swipe up for more info</Text>
                  </View>
                  <ScrollView>
                    <Text></Text>
                    <Text style={{...Font, ...styles.textTwo}}>
                      {fav.explanation}
                    </Text>
                    <Text></Text>
                  </ScrollView>
                </Swiper>
              </ImageBackground>
            </View>
          )}
        </FontContext.Consumer>
      );
    });
  };

  return (
    <Swiper
      showsPagination={false}
      loop={false}
    >
      {realData.length && list()}
    </Swiper>
  );
};

export default FavoritesScreen;

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
