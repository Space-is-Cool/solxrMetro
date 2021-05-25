/* eslint-disable no-unused-vars */

import Sound from 'react-native-sound';

export const sound1 = new Sound(require('./assets/SolXRloop.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
