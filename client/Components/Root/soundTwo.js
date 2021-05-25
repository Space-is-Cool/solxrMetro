/* eslint-disable no-unused-vars */

import Sound from 'react-native-sound';

export const sound2 = new Sound(require('./assets/SolXRAmbientTrack.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });

