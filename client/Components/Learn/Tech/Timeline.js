/* eslint-disable no-dupe-else-if */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';
import Fifty from './bodies/1950s.js';
import Sixty from './bodies/1960s.js';
import Seventy from './bodies/1970s.js';
import Eighty from './bodies/1980s.js';
import Ninety from './bodies/1990s.js';
import TwoThousands from './bodies/2000s.js';


///cahnged
const TechTimeLine = () => {
  return (
    <Swiper
      style={styles.main}
      loop={false}
    >
      <Fifty/>
      <Sixty/>
      <Seventy/>
      <Eighty/>
      <Ninety/>
      <TwoThousands/>
    </Swiper>
  );
};

// const PlanetSelector = () => {
//   return (
//     <SunScreen/>
//   );
// };

export default TechTimeLine;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black'
  },

});
