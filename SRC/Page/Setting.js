import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import {ThemeContext} from '../Component/ThemeContext'
import{connect} from 'react-redux'
import {themeChanger} from '../Services/ServicesTheme/action'

class Setting extends Component {
  static navigationOptions ={
    headerTitle:'Setting',
    headerTitleStyle:{
      color:"white"
    },
    headerTintColor:'white',
    headerStyle:{
        backgroundColor:"#231F66"
    }
  }
  onPressChangeTheme=()=>{
    this.props.themeChanger()
}
  render() {
    const  {theme}  = this.context
    return (
     
          <View style = {[styles.container , {backgroundColor: theme.backgroundColor}]}>
  
            <TouchableOpacity
            style = {[styles.buttonStyle , {backgroundColor: theme.backgroundColor}]}
            onPress = {this.onPressChangeTheme.bind(this)}>
                <Text style = {[styles.textStyle ,{color : theme.fontColor}]}>Theme</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
            style = {[styles.buttonStyle , {backgroundColor : theme.itemColor}]}>
                <Text style = {[styles.textStyle , {color : theme.fontColor}]}>Language</Text>
            </TouchableOpacity>
  
  
            <TouchableOpacity
            style = {[styles.buttonStyle , {backgroundColor : theme.itemColor}]}>
                <Text style = {[styles.textStyle , {color : theme.fontColor}]}>About Us</Text>
            </TouchableOpacity>
    
          
            <TouchableOpacity
           style = {[styles.buttonStyle , {backgroundColor : theme.itemColor}]}>
                <Text style = {[styles.textStyle , {color : theme.fontColor}]}>Help</Text>
            </TouchableOpacity>
        </View>
        
    );
  }
}

Setting.contextType = ThemeContext;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#68C9D1',
   
    alignItems: 'center',
  },

    backButton :{
        marginLeft : 12,
        height : 20,
        width: 20,
      },
    backImage : {
        width : 20,
        height : 20,
      },
    buttonStyle:{
      borderRadius : 7,
      height : 65,
      width:230,
      margin:20,
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor : '#F9F9F8',
      borderWidth : 4 ,
      borderColor : '#231F66',
      
    },
    textStyle : {
      fontWeight: '400',
      color : '#606060',
      fontSize : 18
    }
 
 
});


export default connect(null ,{ themeChanger })(Setting)

