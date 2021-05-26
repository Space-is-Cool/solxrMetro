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
  ViroSpotLight
  // ViroSpatialSound,
  // ViroSound,
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
      <ViroARScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          <ViroAmbientLight color={'#aaaaaa'} influenceBitMask={1} />
          <ViroSpotLight
            innerAngle={5}
            outerAngle={90}
            direction={[0, -1, -0.2]}
            position={[0, 3, 1]}
            color="#aaaaaa"
            castsShadow={true}
          />
          {/* front view */}
          <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]} opacity={1}>
            <Viro3DObject
              source={require('./assets/portal_ship.vrx')}
              resources={[
                require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/atacoma_desert4k.tiff')} />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          {/* back view */}
          <ViroPortal
            position={[0, 0, 1]}
            scale={[0.1, 0.1, 0.1]}
            rotation={[0, 180, 0]}
            opacity={1}>
            <Viro3DObject
              source={require('./assets/portal_ship.vrx')}
              resources={[
                require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png'),
                require('./assets/portal_entry.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/milky_way.jpeg')} />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          <ViroPortal
            position={[1, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
            rotation={[0, 270, 0]}
            opacity={1}>
            {/* right hand side view */}
            <Viro3DObject
              source={require('./assets/portal_ship.vrx')}
              resources={[
                require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png'),
                require('./assets/portal_entry.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/space_shuttle360.png')} />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          {/* left hand side view */}
          <ViroPortal
            position={[-1, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
            rotation={[0, 90, 0]}
            opacity={1}>
            <Viro3DObject
              source={require('./assets/portal_ship.vrx')}
              resources={[
                require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png'),
                require('./assets/portal_entry.png'),
              ]}
              type="VRX"
            />
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
