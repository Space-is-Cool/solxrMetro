/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import Swiper from 'react-native-swiper/src';
import { FontContext } from '../Root/Context';

import eventsData from './eventsData.js';


const List = ({ month }) => {

  return (
    <>
      <Text style={{paddingTop: '2%', width: '100%'}}></Text>
      {month.map((event) => {
        return (
          <FontContext.Consumer key={Math.random()}>
            {({ Font }) => (
              <View style={styles.mainTwo}>
                <Text style={{...Font, ...styles.headerThree}}>{event.summary}</Text>
                <Text style={{...Font, ...styles.textX}}>{event.description.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')}</Text>
                <Text style={{...Font, ...styles.text}}>{moment(event.dtstamp).format('LLLL')}</Text>
                <Text></Text>
              </View>
            )}
          </FontContext.Consumer>
        );
      })}
    </>
  );
};

const EventsByMonth = (Font) => {
  return eventsData.map(month => {

    const nameOfMonth = moment(month[0].uid.slice(0, 6), 'YYYYMM').format('MMMM');
    return <ImageBackground
      style={styles.image}
      key={Math.random()}
      source={require('./assets/starfield.png')}>
      <Text style={{...Font, ...styles.header}}>{nameOfMonth} Astronomy Calendar</Text>
      <ScrollView
        key={Math.random()} >
        <List month={month} Font={Font}/>
      </ScrollView>
    </ImageBackground>;
  });
};

const Events = ({navigation, route}) => {

  const [key, setKey] = useState(Math.random());

  const isFocused = useIsFocused();

  useEffect(() => {
    setKey(Math.random);
  }, [isFocused]);

  const getCurrentMonth = () => {
    const thisMonth = moment().format('YYYYMM');
    eventsData.indexOf();
    for (let i = 0; i < eventsData.length; i++) {
      if (eventsData[i][0].uid.slice(0, 6) === thisMonth) {
        return i;
      }
    }
  };

  return (
    <FontContext.Consumer key={key}>
      {({ Font }) => (
        <>
          <Swiper
            style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            showsPagination={false}
            loop={false}
            // loadMinimal={true}
            index={getCurrentMonth()}
          >
            {EventsByMonth(Font)}
          </Swiper>
        </>
      )}
    </FontContext.Consumer>
  );
};





export default Events;

const styles = StyleSheet.create({
  mainTwo: {
  },
  header: {
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '2%',
    color: '#9ee7ff',
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: '#072852',
    width: '100%'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 15,
    fontStyle: 'italic'
  },
  headerThree: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
    fontWeight: '900',
    paddingTop: 25
  },
  basicFacts: {
    color: '#9ee7ff',
  },
  container: {
    flex: 1,
    fontFamily: 'Baskerville',
  },
  text: {
    fontSize: 14,
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textX: {
    fontSize: 17,
    color: 'white',
    paddingTop: 6,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollview: {
    textAlign: 'center',
    alignContent: 'center',

  }
});
