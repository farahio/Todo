import {createStackNavigator} from 'react-navigation'
import React, { Component } from "react";
import Home from '../Page/Home'
import Eat from '../Page/Eat'


class temp extends Component{
    static navigationOptions={
    
        title:'Eat',
        headerStyle:{
          backgroundColor:'blue'
        }
      
       }
    render(){
        return(
                <Eat/>
        )
    }
}


 const AppNavigator = createStackNavigator(
    {
        Home: Home,
       Eat:temp,
       
       
      },
      { 
        initialRouteName : 'Eat'
      }
  
    );
    export default (AppNavigator)