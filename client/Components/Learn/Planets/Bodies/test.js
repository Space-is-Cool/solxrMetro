import React, { Component } from 'react';
import { Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import { FontContext } from '../../../Root/Context';
import TypeWriter from 'react-native-typewriter'


const saganQoute = ["“The Earth is a very small stage in a vast cosmic arena. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot.“",
'“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.”',
"“Science is not only compatible with spirituality; it is a profound source of spirituality. When we recognize our place in an immensity of light‐years and in the passage of ages, when we grasp the intricacy, beauty, and subtlety of life, then that soaring feeling, that sense of elation and humility combined, is surely spiritual. So are our emotions in the presence of great art or music or literature, or acts of exemplary selfless courage such as those of Mohandas Gandhi or Martin Luther King, Jr. The notion that science and spirituality are somehow mutually exclusive does a disservice to both.“",
"“Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every superstar, every supreme leader, every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.“"

];
const rando = Math.floor(Math.random() * saganQoute.length);

export default class Test extends Component {
  constructor() {
    super();

    this.state = { expanded: false }

  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <FontContext.Consumer>
      {({ Font }) => (
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
          <TypeWriter style={{...Font, ...styles.btnText }} typing={1} minDelay={5}>Tap here to start your journey.</TypeWriter>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
            <Text style={{...Font, ...styles.text}}>
            {saganQoute[rando]}        -Carl Sagan
            </Text>
            <Text></Text>
            <Text></Text>
            <Text style={{...Font, ...styles.header}}>Swipe right to begin</Text>
          </View>
        </View>
      </View>
      )}
      </FontContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  header: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 10,
    fontWeight: 'bold'
  },

  text: {
    fontSize: 17,
    color: 'white',
    padding: 10
  },

  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },

  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  },

  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});