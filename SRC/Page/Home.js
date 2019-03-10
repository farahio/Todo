import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { createSwitchNavigator, createAppContainer,createStackNavigator,createDrawerNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import Eat from './Eat'


let dim=Dimensions.get('window')


 class Home extends Component {
   
  // static navigationOptions = ({ navigation }) => {
 
 
  //   return {
  //     headerTitle:'Choose Option',
  //     headerTitleStyle:{marginLeft:30,color:'white'},
  //     headerStyle:{backgroundColor:'#65C5C8'},
  //     headerLeft: (
  //       <TouchableHighlight onPress={()=>navigation.openDrawer()}
  //        style={styles.drawerhome}>
  //        <Icon name="align-justify" size={22} color='white' />
  //        </TouchableHighlight>
  //     ),
      
  //   };
  
      render() {
        return (
            
            <View style={styles.countainer}>
            <View style={styles.headerStyle}>
                <Text style={styles.headerText}>Choose Option</Text>
            </View>

         
            
            <View style={styles.body}>
            <View style={styles.options}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Eat',{ name :'work'})}
                style={[styles.Viewoption,{backgroundColor:'#EC400D'}]}>
                <Text style={styles.textoption}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Film To Watch'})}
                style={[styles.Viewoption,{backgroundColor:'#D573ED'}]}>
                <Text style={styles.textoption}>Film To Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Learning'})}
                style={[styles.Viewoption,{backgroundColor:'#3C52F6'}]}>
                <Text style={styles.textoption}>Learning</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Eat',{ name :'Shoping'})}
                style={[styles.Viewoption,{backgroundColor:'#C9D751'}]}>
                <Text style={styles.textoption}>Shoping</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Visit'})}
                style={[styles.Viewoption,{backgroundColor:'#e45'}]}>
                <Text style={styles.textoption}>Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Eat'})}
                style={[styles.Viewoption,{backgroundColor:'#3BE152'}]}>
                <Text style={styles.textoption}>Eat</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            
        )
    }
    }
  
    const styles=StyleSheet.create({
        countainer:{
            flex:1,
            backgroundColor:'#B4EBDF'
         
           
    
        },
        headerStyle :{
          justifyContent: 'center',
            flex:1,
            backgroundColor:'#23A7A7'
      },
      body : {
          flex : 9
      },
      headerText : {
        marginLeft : 20,
        fontWeight: 'bold',
        color : 'white',
        fontSize : 20,
      },
     Viewoption:{
       width:350,
       height:50,
       backgroundColor:'#5AD6D6',
       margin:20,
       borderRadius: 7,
       justifyContent:'center',
       alignItems: 'center',

     },
     textoption:{
       fontSize:20,
       color:'white'
     },
     options:{
       marginTop:20,
       marginLeft:10
     }
    })


      const AppNavigator = createSwitchNavigator(
        {
            Home: Home,
           Eat22:Eat,
           
           
          },
      
        );
        
        
          
        
        export default createAppContainer(AppNavigator);