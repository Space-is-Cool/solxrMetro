/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';
import React, { Component, useState, useEffect, View, TouchableOpacity, Image, StyleSheet} from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARSceneNavigator,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroSpotLight
} from '@viro-community/react-viro';
import { updateLocale } from 'moment';
import {
  sharedSpace,
  milkyOne,
  milkyTwo,
  desertOne,
  desertTwo,
  shipOne,
  shipTwo,
  earthOne,
  earthTwo
} from './boombox';
const Portal = ({navigation, route}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) {
      sharedSpace.stop();
      milkyTwo.stop();
      milkyOne.stop();
      desertOne.stop();
      desertTwo.stop();
      shipOne.stop();
      shipTwo.stop();
      earthOne.stop();
      earthTwo.stop();
    } else {
      sharedSpace.play().setNumberOfLoops(-1);
      milkyTwo.setVolume(0).setNumberOfLoops(-1).play();
      milkyOne.setVolume(0).setNumberOfLoops(-1).play();
      desertOne.setVolume(0).setNumberOfLoops(-1).play();
      desertTwo.setVolume(0).setNumberOfLoops(-1).play();
      shipOne.setVolume(0).setNumberOfLoops(-1).play();
      shipTwo.setVolume(0).setNumberOfLoops(-1).play();
      earthOne.setVolume(0).setNumberOfLoops(-1).play();
      earthTwo.setVolume(0).setNumberOfLoops(-1).play();
    }
  }, [isFocused]);
  
  const [focused, setFocused] = useState(Math.random);

  const onCameraTransformUpdate = (({rotation, position, forward, up}) => {

    const zLevel = position[2];
    const xLevel = position[0];
    zLevel > 0 && milkyOne.setVolume(zLevel - 0.3);
    zLevel > 0.4 && milkyTwo.setVolume(zLevel - 0.6);
    zLevel < 0 && desertOne.setVolume(-zLevel - 0.3);
    zLevel < -0.4 && desertTwo.setVolume(-zLevel - 0.6);
    xLevel > 0 && shipOne.setVolume(xLevel - 0.3);
    xLevel > 0.4 && shipTwo.setVolume(xLevel - 0.6);
    xLevel < 0 && earthOne.setVolume(xLevel - 0.3);
    xLevel < -0.4 && earthTwo.setVolume(-xLevel - 0.6);
  });
  const Galaxy = () => {
    return (
      <ViroARScene
        onCameraTransformUpdate={onCameraTransformUpdate}
      >
        <ViroAmbientLight color="#ffffff" intensity={200} />
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
          <ViroPortal 
            position={[0, 0.3, -1]} 
            scale={[0.25, 0.3, 0.25]} 
          >
            <Viro3DObject
              source={require('./assets/portals/wood_frame/portal_wood_frame.vrx')}
              resources={[
                require('./assets/portals/wood_frame/portal_wood_frame_diffuse.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_normal.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_specular.png'),
              ]}
              type="VRX"
              opacity={.5}
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/places/atacoma_desert4k.tiff')} />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          {/* back view */}
          <ViroPortal
            position={[0, 0.3, 1]}
            scale={[0.25, 0.3, 0.25]}
            rotation={[0, 180, 0]}
          >
            <Viro3DObject
              source={require('./assets/portals/wood_frame/portal_wood_frame.vrx')}
              resources={[
                require('./assets/portals/wood_frame/portal_wood_frame_diffuse.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_normal.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_specular.png'),
              ]}
              type="VRX"
              opacity={.5}
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/places/milky_way.jpeg')} />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          <ViroPortal
            position={[1, 0.3, 0]}
            scale={[0.25, 0.3, 0.25]}
            rotation={[0, 270, 0]}
          >
            {/* right hand side view */}
            <Viro3DObject
              source={require('./assets/portals/wood_frame/portal_wood_frame.vrx')}
              resources={[
                require('./assets/portals/wood_frame/portal_wood_frame_diffuse.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_normal.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_specular.png'),
              ]}
              type="VRX"
              opacity={.5}
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/places/space_shuttle360.png')} />
        </ViroPortalScene>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}>
          {/* left hand side view */}
          <ViroPortal
            position={[-1, 0.3, 0]}
            scale={[0.25, 0.3, 0.25]}
            rotation={[0, 90, 0]}
          >
            <Viro3DObject
              source={require('./assets/portals/wood_frame/portal_wood_frame.vrx')}
              resources={[
                require('./assets/portals/wood_frame/portal_wood_frame_diffuse.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_normal.png'),
                require('./assets/portals/wood_frame/portal_wood_frame_specular.png'),
              ]}
              type="VRX"
              opacity={.5}
            />
          </ViroPortal>
          <Viro360Image source={require('./assets/places/earth_moon.jpeg')} />
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
