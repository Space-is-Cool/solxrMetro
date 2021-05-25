/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import PlanetSelector from './Planets/PlanetSelector.js';
import Timeline from './Tech/Timeline.js';

const LearnScreen = ({navigation, route}) => {
  //need to create a selective render of either the planet screen or tech screen based on what user clicks
  //need to add onClick property to an image???
  //how do we css the text w/ the image? should we just make an image w/ text baked in?

  const [view, setView] = useState('');
  const onPress = (name) => {
    setView(name);
  };
  const viewSwitcher = (view) => {
    { if (view === '') {
      return (<>
        <Text>wow</Text>
        <Text>wow</Text>
        <Text>wow</Text>
        <Button
          title="Select Planets"
          onPress={() => onPress('planets')}
        />
        <Text>...</Text>
        <Button
          title="Select Tech"
          onPress={() => onPress('tech')}
        />
      </>);
    } else if (view === 'planets') {
      return (
        <>
          <Button
            title="Back to Learn"
            onPress={() => onPress('')}
          />
          <PlanetSelector navigation={navigation} route={route}/>
        </>
      );

    } else {
      return (
        <>
          <Button
            title="Back to Learn"
            onPress={() => onPress('')}
          />
          <Timeline />
        </>
      );
    }
    }
  };

  return (
    <View>
      {viewSwitcher(view)}
    </View>
  );
};
export default LearnScreen;
