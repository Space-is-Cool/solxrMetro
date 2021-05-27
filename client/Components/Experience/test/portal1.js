/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';

import React, { Component, useState, View, TouchableOpacity, Image, StyleSheet} from 'react';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroMaterials,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  ViroARSceneNavigator,
  Viro360Image,
  ViroQuad,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroSpatialSound,
  ViroSound,
} from '@viro-community/react-viro';

const TestPortal = ({navigation, route}) => {

  const Test = () => {

    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        {/* <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}} >
          <ViroPortal position={[0, -1, -1]} scale={[1, 2, 1]} rotation={[0, 0, 0]}>
            <Viro3DObject source={require('../assets/portals/archway/portal_archway.vrx')} 
              resources={[
                require('../assets/portals/archway/portal_archway_diffuse.png'),
                require('../assets/portals/archway/portal_archway_normal.png'),
                require('../assets/portals/archway/portal_archway_specular.png'),
              ]}
              type="VRX" />
          </ViroPortal>
          <Viro360Image source={require('../assets/places/earth_moon.jpeg')} />
        </ViroPortalScene> */}
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}} >
          <ViroPortal position={[0, 0, 1]} scale={[.1, .1, .1]} rotation={[0, 180, 0]}>
            <Viro3DObject source={require('../assets/portals/ship_portal/portal_ship.vrx')} 
              resources={[
                require('../assets/portals/ship_portal/portal_ship_diffuse.png'),
                require('../assets/portals/ship_portal/portal_ship_normal.png'),
                require('../assets/portals/ship_portal/portal_ship_specular.png'),
              ]}
              type="VRX" opacity={.1} />
          </ViroPortal>
          <Viro360Image source={require('../assets/places/milky_way.jpeg')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}} >
          <ViroPortal position={[1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 270, 0]}>
            <Viro3DObject source={require('../assets/portals/wood_frame/portal_wood_frame.vrx')} 
              resources={[
                require('../assets/portals/wood_frame/portal_wood_frame_diffuse.png'),
                require('../assets/portals/wood_frame/portal_wood_frame_normal.png'),
                require('../assets/portals/wood_frame/portal_wood_frame_specular.png'),
              ]}
              type="VRX" opacity={.5} />
          </ViroPortal>
          <Viro360Image source={require('../assets/places/atacoma_desert4k.tiff')} />
        </ViroPortalScene>
      </ViroARScene>
    );
  };

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{scene: Test}} />
    </>
  );
};

module.exports = TestPortal;
