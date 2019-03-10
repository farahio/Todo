import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer ,createDrawerNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';



let dim=Dimensions.get('window')


 export default class Eat extends Component {
  static navigationOptions=({navigation})=>{
    return{
    headerLeft: null,
   headerTitle: navigation.getParam('name', 'NO-ID'),
   headerLeft:<TouchableHighlight onPress={this.onPress} style={{marginLeft:20}}>
   <Icon name="align-justify" size={22} color='white' />
   </TouchableHighlight>,
      headerRight:<TouchableHighlight onPress={this.onpress} style={{marginRight:20}}>
      <Icon name="search" size={22} color='white' />
      </TouchableHighlight>,
    headerStyle:{
      backgroundColor:'#32A93F', 
    },
    headerTitleStyle:{
      color:'white',
      fontSize:24,
    }
  }
  }
 onPress=()=>{this.onpress}

  render() {


    return (
      <View style={styles.container}>
      
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3EBB4B'
    
  },
iconstyle:{
  marginLeft:20
}
 
});



