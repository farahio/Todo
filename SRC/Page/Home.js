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
import Eat from './Eat'
import {connect} from 'react-redux'
import {setType} from '../Services/action'


let dim=Dimensions.get('window')


 class Home extends Component {

      render() {
        // const { navigation } = this.props;
        // const name = navigation.getParam('name');
        return (
            
            <View style={styles.countainer}>
            <View style={styles.headerStyle}>
                <Image 
                  source={require('../assets/Photo/logo8.png')}
                  style={styles.logotitle}
                />
                <Text style={styles.headerText}>Choose Option</Text>
            </View>

         
            
            <View style={styles.body}>
            <View style={styles.options}>
            <TouchableOpacity 
            
                onPress={() =>{ 
                  // this.props.setType(this.props.name);
                  this.props.navigation.navigate('Eat',{ name :'work', backgroundColor:'#EC400D'})}}
                style={[styles.Viewoption,{backgroundColor:'#EC400D'}]}>
                <Text style={styles.textoption}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Film To Watch', backgroundColor:'#D573ED'})}
                style={[styles.Viewoption,{backgroundColor:'#D573ED'}]}>
                <Text style={styles.textoption}>Film To Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Learning',backgroundColor:'#3C52F6'})}
                style={[styles.Viewoption,{backgroundColor:'#3C52F6'}]}>
                <Text style={styles.textoption}>Learning</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Eat',{ name :'Shoping' , backgroundColor:'#C9D751'})}
                style={[styles.Viewoption,{backgroundColor:'#C9D751'}]}>
                <Text style={styles.textoption}>Shoping</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Visit' , backgroundColor:'#e45'})}
                style={[styles.Viewoption,{backgroundColor:'#e45'}]}>
                <Text style={styles.textoption}>Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Eat',{ name :'Eat' , backgroundColor:'#3BE152'})}
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
          
            flex:1,
            backgroundColor:'#23A7A7',
            flexDirection: 'row',
      },
      body : {
          flex : 9
      },
      headerText : {
        marginLeft : 10,
        fontWeight: 'bold',
        color : 'white',
        fontSize : 20,
        marginTop:20
      },
     Viewoption:{
       width:350,
       height:50,
       backgroundColor:'#5AD6D6',
       margin:20,
       borderRadius: 7,
       justifyContent:'center',
       alignItems: 'center',
       elevation : 15,

     },
     textoption:{
       fontSize:20,
       color:'white'
     },
     options:{
       marginTop:20,
       marginLeft:10
     },
     logotitle:{
       width:50,
       height:50,
       marginTop:10,
       marginLeft:10
     }
    })


      const AppNavigator = createSwitchNavigator(
        {
            Home: Home,
           Eat22:Eat,
           
           
          },
      
        );
        
        
          
        
        const AppContainer = createAppContainer(AppNavigator);
        class App extends Component {
        
           render() {
             return <AppContainer />;
           }
         }

         const mapStateToProps=(state)=>{
          return{
           
            items : state.item
          }
          
          }
         
        export default connect(mapStateToProps,{setType})(App);