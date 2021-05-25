/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';

import React, { Component, useState, useEffect, View, TouchableOpacity, Image, StyleSheet} from 'react';
import { useIsFocused } from '@react-navigation/native';

// import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroMaterials,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  ViroARSceneNavigator,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroSpatialSound,
  ViroSound,
} from '@viro-community/react-viro';
// import Vectors from './Vectors';
// const createReactClass = require('create-react-class');

const Portal = ({navigation, route}) => {

  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   setFocused(Math.random);
  // }, [isFocused]);



  

  const [musicControl, setMusicControl] = useState(false);
  const [focused, setFocused] = useState(Math.random);
  // const [playPause, setPlayPause] = useState('./assets/controls/play.png');

  // const switcher = () => {
  //   setMusicControl(!musicControl);
  //   if (musicControl === true) {
  //     setPlayPause('./assets/controls/pause.png');
  //   } else if (musicControl === false) {
  //     setPlayPause('./assets/controls/play.png');
  //   }
  // };
  
  const Galaxy = () => {

    return (
      <ViroARScene onAnchorFound={()=> setMusicControl(true)}>
        {/* <ViroSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          source={require('./assets/music/AR-shared-space.wav')}
          loop={true}
          volume={1.0} /> */}
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={2}
          position={[0, 0, 0]}
          source={require('./assets/music/planeLoop.mp3')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={1}
          position={[0, 0, 0]}
          source={require('./assets/music/solxrA1.wav')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={2}
          position={[0, 0, 1.5]}
          source={require('./assets/music/AR-galaxyOne-mono.wav')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={1}
          position={[0, 0, 2]}
          source={require('./assets/music/AR-galaxyTwo-mono.wav')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={2}
          position={[1.5, 0, 0]}
          source={require('./assets/music/AR-shipOne-mono.wav')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={1}
          position={[2, 0, 0]}
          source={require('./assets/music/AR-shipTwo-mono.wav')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={2}
          position={[-1.5, 0, 0]}
          source={require('./assets/music/AR-earthOne-mono.wav')}
          loop={true}
          volume={1.0} />
        <ViroSpatialSound rolloffModel="linear"
          paused={musicControl}
          muted={false}
          minDistance={0}
          maxDistance={1}
          position={[-2, 0, 0]}
          source={require('./assets/music/AR-earthTwo-mono.wav')}
          loop={true}
          volume={1.0} />
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          {/* front view */}
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/atacoma_desert4k.tiff')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          {/* back view */}
          <ViroPortal position={[0, 0, 1]} scale={[.1, .1, .1]} rotation={[0, 180, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ring.obj')}
              resources={[require('./assets/portal_ring.png')]}
              type="OBJ"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/milky_way.jpeg')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 270, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_wood_frame.vrx')}
              // resources={[require('./assets/portal_ship_diffuse.png'),
              //   require('./assets/portal_ship_normal.png'),
              //   require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/space_shuttle360.png')} />
        </ViroPortalScene>
        {/* <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[-1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 90, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/earth_moon.jpeg')} />
        </ViroPortalScene> */}
        {/* <View>
          <TouchableOpacity style={styles.img} onPress={()=> switcher()}>
            <Image
              style={styles.button}
              source={require('./assets/controls/play.png')}
            />
          </TouchableOpacity>
        </View> */}
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
  
// const styles = StyleSheet.create({
//   img: {
//     position: 'absolute',
//     right: 10,
//     bottom: 10
//   },
//   button: {
//     width: 35,
//     height: 35,
//   }
// });

module.exports = Portal;
