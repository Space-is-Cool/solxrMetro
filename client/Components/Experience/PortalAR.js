/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';
import React, { Component, useState, useEffect, View, TouchableOpacity, Image, StyleSheet} from 'react';
import { useIsFocused } from '@react-navigation/native';
import Sound from 'react-native-sound';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARSceneNavigator,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from '@viro-community/react-viro';
import { updateLocale } from 'moment';
const Portal = ({navigation, route}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('is focused is called!!!', isFocused);
    stopAll();
  }, [isFocused]);
  const [musicControl, setMusicControl] = useState(false);
  const [focused, setFocused] = useState(Math.random);
  const sharedSpace = new Sound(require('./assets/music/AR-shared-space.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const desertOne = new Sound(require('./assets/music/AR-desertOne-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const desertTwo = new Sound(require('./assets/music/AR-desertTwo-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      // }
    });
  const milkyOne = new Sound(require('./assets/music/AR-galaxyOne-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const milkyTwo = new Sound(require('./assets/music/AR-galaxyTwo-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const shipOne = new Sound(require('./assets/music/AR-shipOne-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const shipTwo = new Sound(require('./assets/music/AR-shipTwo-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const earthOne = new Sound(require('./assets/music/AR-earthOne-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });
  const earthTwo = new Sound(require('./assets/music/AR-earthTwo-mono.wav'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
    });

  let playing = false;
  const playAll = () => {
    console.log('time to rpess play', sharedSpace);
    if (playing) {
      return;
    }
    playing = true;
    sharedSpace.play();
    sharedSpace.setNumberOfLoops(-1);
    milkyTwo.setVolume(0);
    milkyTwo.play();
    milkyTwo.setNumberOfLoops(-1); 
    milkyOne.setVolume(0);
    milkyOne.play();
    milkyOne.setNumberOfLoops(-1);
    desertOne.setVolume(0);
    desertOne.play();
    desertOne.setNumberOfLoops(-1);
    desertTwo.setVolume(0);
    desertTwo.play();
    desertTwo.setNumberOfLoops(-1);
    shipOne.setVolume(0);
    shipOne.play();
    shipOne.setNumberOfLoops(-1);
    shipTwo.setVolume(0);
    shipTwo.play();
    shipTwo.setNumberOfLoops(-1);
    earthOne.setVolume(0);
    earthOne.play();
    earthOne.setNumberOfLoops(-1);
    earthTwo.setVolume(0);
    earthTwo.play();
    earthTwo.setNumberOfLoops(-1);
  };

  const stopAll = () => {
    console.log('time 2 stop', sharedSpace);
    sharedSpace.pause();
    sharedSpace.stop();
    sharedSpace.release();
    console.log(sharedSpace);
    milkyTwo.stop();
    milkyOne.stop();
    desertOne.stop();
    desertTwo.stop();
    shipOne.stop();
    shipTwo.stop();
    earthOne.stop();
    earthTwo.stop();
  };

  const onCameraTransformUpdate = (({rotation, position, forward, up}) => {

    const zLevel = position[2];
    const xLevel = position[0];
    zLevel > 0 && milkyOne.setVolume(zLevel);
    zLevel > 0.6 && milkyTwo.setVolume(zLevel - 0.6);
    zLevel < 0 && desertOne.setVolume(-zLevel);
    zLevel < -0.6 && desertTwo.setVolume(-zLevel - 0.6);
    xLevel > 0 && shipOne.setVolume(xLevel);
    xLevel > 0.6 && shipTwo.setVolume(xLevel - 0.6);
    xLevel < 0 && earthOne.setVolume(xLevel);
    xLevel < -0.6 && earthTwo.setVolume(-xLevel - 0.6);
  });
  const Galaxy = () => {
    return (
      <ViroARScene
        onAnchorFound={()=> {
          // setMusicControl(true); 
          playAll();
        }}
        onCameraTransformUpdate={onCameraTransformUpdate}
      >
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/atacoma_desert4k.tiff')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[0, 0, 1]} scale={[.1, .1, .1]} rotation={[0, 180, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portarl_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/milky_way.jpeg')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 270, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/space_shuttle360.png')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[-1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 90, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/earth_moon.jpeg')} />
        </ViroPortalScene>
      </ViroARScene>
    );
  };
  return (
    <>
      <ViroARSceneNavigator
        focused={focused}
        initialScene={{scene: Galaxy}} />
    </>
  );
};

module.exports = Portal;
