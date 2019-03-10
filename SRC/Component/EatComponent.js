import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let dim = Dimensions.get('window')
export default class EatComponent extends Component {
  
   
  
    render() {
      return (
        <View style={styles.header}>
        <Icon name="align-justify" size={22} color='white' style={styles.Icon}/>
        <Text style={styles.text}>eat</Text>
        <Icon name="search" size={22} color='white' style={styles.Icon2}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    header:{
        width:dim.width,
        height:60,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#32A93F',

    },
    Icon:{
        marginLeft:20
    },
    text:{
        fontSize:24,
        color:'white',
        fontWeight: '400',
        marginLeft:50
    },
    Icon2:{
        marginLeft:220
    }
  
   
  });