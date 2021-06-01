import Sound from 'react-native-sound';

export const sharedSpace = new Sound(require('./assets/music/AR-shared-space.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });

export const desertOne = new Sound(require('./assets/music/AR-desertOne-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
export const desertTwo = new Sound(require('./assets/music/AR-desertTwo-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  // }
  });
export const milkyOne = new Sound(require('./assets/music/AR-galaxyOne-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
export const milkyTwo = new Sound(require('./assets/music/AR-galaxyTwo-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
export const shipOne = new Sound(require('./assets/music/AR-shipOne-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
export const shipTwo = new Sound(require('./assets/music/AR-shipTwo-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
export const earthOne = new Sound(require('./assets/music/AR-earthOne-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
export const earthTwo = new Sound(require('./assets/music/AR-earthTwo-mono.wav'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
