/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';

import React, { Component, useState } from 'react';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  ViroMaterials,
  ViroAnimations,
  ViroSphere,
  ViroARSceneNavigator,
  ViroARPlaneSelector,
  ViroOrbitCamera,
  ViroNode,
  ViroImage
} from '@viro-community/react-viro';
import Vectors from './Vectors';


const LookUp = ({navigation, route}) => {

  const SolarSystem = () => {

    const segments = 20;

    const [scale, setScale] = useState(1);

    const onPinch = (pinchState, scaleFactor) => {
      if (scale <= 0.001 && scaleFactor < 1) {
        setScale(0.1);
      } else {
        setScale(scaleFactor < 1
          ? scale * 0.95
          : scale * 1.05);
      }
    };
  
    const onPinchPlanet = (pinchState, scaleFactor, source) => {
      if (scale <= 0.001 && scaleFactor < 1) {
        setScale(0.1);
      } else {
        setScale(scaleFactor < 1
          ? scale * 0.95
          : scale * 1.05);
      }
    };
    
  
    const bodies = [
      {position: 0, name: 'sun', radius: 12 },
      {position: 1, name: 'mercury', radius: 0.38},
      {position: 2, name: 'venus', radius: 0.9499},
      {position: 3, name: 'earth', radius: 1},
      {position: 4, name: 'moon', radius: 0.2727},
      {position: 5, name: 'mars', radius: 0.3829},
      {position: 6, name: 'jupiter', radius: 10.97},
      {position: 7, name: 'saturn', radius: 9.140},
      {position: 8, name: 'uranus', radius: 3.981},
      {position: 9, name: 'neptune', radius: 3.865},
    ];
  
    return (
      <ViroARScene
        onPinch={onPinch}
      >
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector>
          <ViroNode
            scale={[scale, scale, scale]} >
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              onPinch={onPinchPlanet}
              radius={bodies[0].radius / 100 + 0.04}
              position={Vectors('Sun')}
              materials={'sun'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              onPinch={onPinchPlanet}
              radius={bodies[1].radius / 100 + 0.04}
              position={Vectors('Mercury')}
              materials={'mercury'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              onPinch={onPinchPlanet}
              radius={bodies[2].radius / 100 + 0.04}
              position={Vectors('Venus')}
              materials={'venus'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              onPinch={onPinchPlanet}
              radius={bodies[3].radius / 100 + 0.04}
              position={Vectors('Earth')}
              materials={'earth'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              radius={bodies[4].radius / 100 + 0.04}
              position={Vectors('Moon')}
              materials={'moon'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              radius={bodies[5].radius / 100 + 0.04}
              position={Vectors('Mars')}
              materials={'mars'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              radius={bodies[6].radius / 100 + 0.04}
              position={Vectors('Jupiter')}
              materials={'jupiter'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              radius={bodies[7].radius / 100 + 0.04}
              position={Vectors('Saturn')}
              materials={'saturn'}
            />
            <ViroImage
              height={bodies[7].radius / 10 + 0.02}
              width={bodies[7].radius / 10 + 0.02}
              position={Vectors('Saturn')}
              rotation={[90, 0, 0]}
              source={require('./assets/planets/saturn_rings_black2.png')}
            />
            <ViroImage
              height={bodies[7].radius / 10 + 0.02}
              width={bodies[7].radius / 10 + 0.02}
              position={Vectors('Saturn')}
              rotation={[270, 0, 0]}
              source={require('./assets/planets/saturn_rings_black2.png')}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              radius={bodies[8].radius / 100 + 0.04}
              position={Vectors('Uranus')}
              materials={'uranus'}
            />
            <ViroSphere
              heightSegmentCount={segments}
              widthSegmentCount={segments}
              radius={bodies[9].radius / 100 + 0.04}
              position={Vectors('Neptune')}
              materials={'neptune'}
            />
          </ViroNode>
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  };

  ViroMaterials.createMaterials({
    sun: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_sun.jpeg')
    },
    mercury: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_mercury.jpeg')
    },
    venus: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/8k_venus.jpeg')
    },
    earth: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_earth.png')
    },
    moon: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_moon.jpeg')
    },
    mars: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/8k_mars.jpeg')
    },
    jupiter: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_jupiter.jpeg')
    },
    saturn: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_saturn.jpeg')
    },
    uranus: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_uranus.jpeg')
    },
    neptune: { shininess: 2.0,
      diffuseTexture: require('./assets/planets/2k_neptune.jpeg')
    }
  });
  
  ViroAnimations.registerAnimations({
    loopRotate: {properties: {rotateY: '+=45'}, duration: 6000},
  });

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{scene: SolarSystem}} />
    </>
  );
};

module.exports = LookUp;
