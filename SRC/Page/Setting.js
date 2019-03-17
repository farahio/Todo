import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

let dim=Dimensions.get('window')

export default class Signin extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>
            hello
      </Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue'
    
  },

 
 
});


