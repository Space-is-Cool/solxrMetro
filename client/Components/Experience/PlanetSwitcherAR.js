/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
'use strict';

import React, { Component, useState } from 'react';
import Sound from 'react-native-sound';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  ViroMaterials,
  ViroAnimations,
  ViroSphere,
  ViroARSceneNavigator,
  ViroARPlaneSelector,
  ViroImage,
  ViroNode,
  ViroSpatialSound,
  ViroButton,
  ViroCamera
} from '@viro-community/react-viro';



const PlanetSelector = ({navigation, route}) => {



  const PlanetSwitcher = () => {

    const bodies = [
      {rings: false, position: 0, name: 'sun', radius: 25/*109.2*/},
      {rings: false, position: 1, name: 'mercury', radius: 0.38},
      {rings: false, position: 2, name: 'venus', radius: 0.9499},
      {rings: false, position: 3, name: 'earth', radius: 1},
      {rings: false, position: 4, name: 'moon', radius: 0.2727},
      {rings: false, position: 5, name: 'mars', radius: 0.3829},
      {rings: false, position: 6, name: 'jupiter', radius: 10.97},
      {rings: true, position: 7, name: 'saturn', radius: 9.140},
      {rings: false, position: 8, name: 'uranus', radius: 3.981},
      {rings: false, position: 9, name: 'neptune', radius: 3.865},
    ];

    const [planet, setPlanet] = useState(bodies[0]);

    const changePlanet = () => {
      
      setPlanet(planet.position === 9
        ? bodies[0]
        : bodies[planet.position + 1]);
    };

    const [scale, setScale] = useState(1);

    const onPinch = (pinchState, scaleFactor, source) => {
      if (scale <= 0.001 && scaleFactor < 1) {
        setScale(0.1);
      } else {
        setScale(scaleFactor < 1
          ? scale * 0.9
          : scale * 1.1);
      }
    };

    return (
      <ViroARScene onPinch={onPinch}>
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector>
          <ViroNode scale={[scale, scale, scale]}>
            <ViroSphere
              heightSegmentCount={50}
              widthSegmentCount={50}
              radius={planet.radius / 50 + 0.4}
              animation={{name: 'loopRotate', run: true, loop: true}} 
              position={[0, 0, 0]}
              materials={planet.name}
              onClick={changePlanet}
              onPinch={onPinch}
            />
          </ViroNode>
          <ViroImage
            height={scale * 2.4}
            width={scale * 2.4}
            visible = {planet.rings}
            position={[0, 0, 0]}
            rotation={[90, 0, 0]}
            source={require('./assets/saturn_rings_black2.png')}
          />
          <ViroImage
            height={scale * 2.4}
            width={scale * 2.4}
            visible = {planet.rings}
            position={[0, 0, 0]}
            rotation={[270, 0, 0]}
            source={require('./assets/saturn_rings_black2.png')}
          />
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  };

  ViroMaterials.createMaterials({
    sun: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_sun.jpeg')
    },
    mercury: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_mercury.jpeg')
    },
    venus: { shininess: 2.0,
      diffuseTexture: require('./assets/8k_venus.jpeg')
    },
    earth: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_earth.jpeg')
    },
    moon: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_moon.jpeg')
    },
    mars: { shininess: 2.0,
      diffuseTexture: require('./assets/8k_mars.jpeg')
    },
    jupiter: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_jupiter.jpeg')
    },
    saturn: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_saturn.jpeg')
    },
    uranus: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_uranus.jpeg')
    },
    neptune: { shininess: 2.0,
      diffuseTexture: require('./assets/2k_neptune.jpeg')
    }
  });
  
  ViroAnimations.registerAnimations({
    loopRotate: {properties: {rotateY: '+=45'}, duration: 6000},
  });

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{scene: PlanetSwitcher}} />
    </>
  );
};

module.exports = PlanetSelector;
