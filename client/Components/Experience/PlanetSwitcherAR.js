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

    
    // const [panA, setPanA] = useState(0);
    // const [panB, setPanB] = useState(0);
    // const [panC, setPanC] = useState(0);
    // const [panD, setPanD] = useState(0);
    const [planet, setPlanet] = useState(bodies[0]);

    const changePlanet = () => {
      
      setPlanet(planet.position === 9
        ? bodies[0]
        : bodies[planet.position + 1]);
    };

    const desert = new Sound(require('./assets/music/AR-desertOne-mono.wav'),
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        } else {
          desert.play();
          desert.setNumberOfLoops(-1);
        }
      });

    const ship = new Sound(require('./assets/music/AR-shipTwo-mono.wav'),
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        } else {
          ship.play();
          ship.setNumberOfLoops(-1);
        }
      });



    //****orbit functionality******
    // const [orbitX, setOrbitX] = useState(0);
    // const [orbitZ, setOrbitZ] = useState(0);
    // const xValues = [0];
    // const zValues = [0];

    // const circle = (radius, steps) => {
    //   for (let i = 0; i < steps; i++) {
    //     xValues[i] = (radius * Math.cos(2 * Math.PI * i / steps));
    //     zValues[i] = (radius * Math.sin(2 * Math.PI * i / steps));
    //   }
    // };
    // circle(1, 2000);
    // console.log(xValues);
    // let index = 0;


    // const animate = () => {
    //   index += 1;
    //   setOrbitX(xValues[index]);
    //   setOrbitZ(zValues[index]);
    //   if (index === 1999) {
    //     index = 0;
    //   }
    // };

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

    const onCameraTransformUpdate = (({rotation, position, forward, up}) => {
      const xPan = forward[0];
      const zPan = forward[2];
      desert.setPan(xPan);
      ship.setPan(zPan);
      console.log(xPan, zPan);
    });
    
    return (
      <ViroARScene
        onPinch={onPinch}
        // onCameraTransformUpdate={({rotation, position, forward, up}) => console.log(rotation)}
        onCameraTransformUpdate={onCameraTransformUpdate}


      >
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector>
          {/* <ViroSpatialSound rolloffModel="linear"
            paused={false}
            muted={false}
            minDistance={0}
            maxDistance={2}
            position={[0, 1, 0]}
            source={require('./assets/audio/solxrA1.mp3')}
            loop={true}
            volume={1.0} /> */}
          <ViroNode scale={[scale, scale, scale]}>
            {/* <ViroButton
              source={require('./assets/icon.png')}
              gazeSource={require('./assets/icon.png')}
              tapSource={require('./assets/icon.png')}
              position={[0, -3, 0]}
              height={1}
              width={1}
              onClick={changePlanet}/> */}
            <ViroSphere
              // onSwipe={() => setInterval(animate, 10)}
              heightSegmentCount={50}
              widthSegmentCount={50}
              // radius={scale * planet.radius / 50 + 0.4}
              radius={planet.radius / 50 + 0.4}
              animation={{name: 'loopRotate', run: true, loop: true}} 
              // position={[orbitX * 3, 1, orbitZ * 3]}
              position={[0, 0, 0]}
              materials={planet.name}
              onClick={changePlanet}
              // rotation={[45, 0, 0]}
              // onPinch={wow}
            />
          </ViroNode>

          <ViroImage
            height={scale * 2.4}
            width={scale * 2.4}
            visible = {planet.rings}
            position={[0, 0, 0]}
            rotation={[90, 0, 0]}
            source={require('./assets/planets/saturn_rings_black2.png')}
          />
          <ViroImage
            height={scale * 2.4}
            width={scale * 2.4}
            visible = {planet.rings}
            position={[0, 0, 0]}
            rotation={[270, 0, 0]}
            source={require('./assets/planets/saturn_rings_black2.png')}
          />
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
      diffuseTexture: require('./assets/planets/2k_earth.jpeg')
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
        initialScene={{scene: PlanetSwitcher}} />
    </>
  );
};

module.exports = PlanetSelector;
