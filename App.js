
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './SRC/Page/Home'

export default class App extends Component
 {
  render() {
    return (
      <View style={styles.container}>
     <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'pink',
  },

});
