import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer ,createDrawerNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerComponent from '../Component/DrawerComponent'


let dim=Dimensions.get('window')


 class Eat extends Component {
   
 
  


  render() {

    const { navigation } = this.props;
    const name = navigation.getParam('name');
    return (
    
      <View style = {styles.container}>
      <View style = {[styles.headerStyle , {justifyContent : 'space-between'}]}>
        <View style = {styles.headerStyle}>
            <TouchableOpacity 
            onPress={() =>navigation.toggleDrawer()}>
                <Icon name="align-justify" size={22} color='white' style={{marginLeft:15}} />
            </TouchableOpacity>
            <Text style={{color:'white',marginLeft:20,fontSize:22}}>{name}</Text>
        </View>

        <View style = {[styles.headerStyle , {justifyContent : 'flex-end'}]}>
            <TouchableOpacity>
                <Icon name="search" size={22} color='white' style={{marginRight:15}}/>
            </TouchableOpacity>

           

        </View>

      </View>
      <View style = {styles.bodyStyle}>
          <View style={styles.Listener}></View>
          <View style={styles.Changer}></View>
      </View>
    
  </View>
)
}
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#3EBB4B'
    
//   },
// iconstyle:{
//   marginLeft:20
// }

container: {
  flex: 1,
},
searchStyle : {
  width : 35,
  height : 35,
  
},
threeStyle : {
  width : 20,
  height : 20
},
headerStyle :{
    flexDirection: 'row', 
    backgroundColor: '#000066',
    flex : 1,
    alignItems: 'center',
},
bodyStyle : {
    flex : 9
},
headerText : {
  marginLeft : 20,
  fontWeight: 'bold',
  color : 'white',
  fontSize : 20,
},
drawerBotton : {
  marginLeft : 15
},
drawerBottonRight :{
  marginRight : 15,
},
Listener:{
  flex:8,
  backgroundColor:'#A8F4C2'
},
Changer:{
  flex:1,
  backgroundColor:'green'
}
 
});

const rootstack = createDrawerNavigator(
  {
      
      Eat: {
        screen:Eat, 
      },
      Work: {
        screen: Eat,
      },
      Visite: {
        screen: Eat,
      },
      Learning: {
        screen:Eat,
      },
      
      
    },
    {
      drawerPosition : 'left',
      useNativeAnimations : 'true',
      contentComponent :DrawerComponent ,
      backBehavior : 'initialRoute',
    } ,
    {
      contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
          marginVertical:10,
  
        },
        iconContainerStyle: {
          opacity: 1
        }
      }
    },
    {
      initialRouteName: "Eat"
    }
  );

  export default rootstack;


