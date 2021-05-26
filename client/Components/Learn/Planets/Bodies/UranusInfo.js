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


class UranusInfo extends Component {
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
      {this.props.reload === 9 &&  <TypeWriter style={{...Font, ...styles.header}} typing={1} minDelay={-50}>{bodies.uranus.name}</TypeWriter>}
      {this.props.reload === 9 &&  <TypeWriter style={{...Font, ...styles.headerTwo}} typing={1} minDelay={-50}>The Sidways planet</TypeWriter>}
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
        {this.props.reload === 9 && <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
          <TypeWriter style={{...Font, ...styles.headerThree}} typing={1} minDelay={-50}>More Info...</TypeWriter>
          </TouchableOpacity>}
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
          <Text></Text>
          <Text></Text>
          <TypeWriter style={{...Font, ...styles.basicFacts}} typing={1} minDelay={-100000}>  Latin: {bodies.uranus.latin}    Diameter: {bodies.uranus.diameter}       Moons: 27 </TypeWriter>
            <Text></Text>
          <Text style={{...Font, ...styles.headerThree}}>Special Characteristics:</Text>
            <Text style={{...Font, ...styles.textX}}>
            It's turned over on its side!
            </Text>
          <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Fun Facts:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Coldest surface temperature
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Most dramatic axial tilt
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            The only planet other than Earth not named after a Roman God
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Funniest name
            </Text>
            <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Discovered By:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.uranus.discoveredBy}
            </Text>
            <Text style={{...Font, ...styles.headerThree}}>Name Origin:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.uranus.nameOrigin}
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

export default UranusInfo;

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