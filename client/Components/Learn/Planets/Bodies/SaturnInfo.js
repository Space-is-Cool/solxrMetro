/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  LayoutAnimation, Platform, UIManager, TouchableOpacity
} from 'react-native';
import bodies from '../data/bodiesData.js';
import { FontContext } from '../../../Root/Context';
import TypeWriter from 'react-native-typewriter'


class SaturnInfo extends Component {
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
      <ScrollView>
      {/* <View style={styles.line}/> */}
      <View style={styles.main}>
      <View style={styles.hud}>
      {this.props.reload === 8 &&  <TypeWriter style={{...Font, ...styles.header}} typing={1} minDelay={-50}>{bodies.saturn.name}</TypeWriter>}
      {this.props.reload === 8 &&  <TypeWriter style={{...Font, ...styles.headerTwo}} typing={1} minDelay={-50}>{bodies.saturn.AKA}</TypeWriter>}
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
        {this.props.reload === 8 && <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
          <TypeWriter style={{...Font, ...styles.headerThree}} typing={1} minDelay={-50}>More Info...</TypeWriter>
          </TouchableOpacity>}
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
          <Text></Text>
          <Text></Text>
          <TypeWriter style={{...Font, ...styles.basicFacts}} typing={1} minDelay={-100000}>  Latin: {bodies.saturn.latin}   Diameter: {bodies.saturn.diameter}   Moons:82</TypeWriter>
          <Text></Text>
          <Text style={{...Font, ...styles.headerThree}}>Special Characteristics:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Look at those rings!   
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Large Hexagonal storm at north pole, we still don't know for sure what causes it  
            </Text>
          <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Fun Facts:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Four spacecraft visiters: Pioneer 11, Voyager 1 and 2, and the Cassini-Huygens
            </Text>
            <Text style={{...Font,...styles.textX}}>
            The most distant planet that can be seen with the naked eye
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Most Moons
            </Text>
            <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Discovered By:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.saturn.discoveredBy}
            </Text>
            <Text style={{...Font, ...styles.headerThree}}>Name Origin:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.saturn.nameOrigin}
            </Text>
          </View>
        </View>
      </View>
      </View>
      </View>
      
      </ScrollView>
        )}
        </FontContext.Consumer>
    )
  }
}

export default SaturnInfo;

const styles = StyleSheet.create({
  main:{
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#0047ba",
  },
  hud: {
    paddingTop: 30,
    paddingBottom: 35,
    backgroundColor: '#00374a'

  },
  header: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 15,
    fontStyle: 'italic'
  },
  headerThree: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  basicFacts: {
    color: '#9ee7ff',
    fontSize: 14
  },
  image: {
    width: 35,
    height: 35
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  text: {
    fontSize: 17,
    color: 'white',
    padding: 10
  },
  textX: {
    fontSize: 17,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    
  },

  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },

  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});