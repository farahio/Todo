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
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import Eat from './Eat'
import Loading from './Loading'
import DrawerComponent from '../Component/DrawerComponent'
let dim=Dimensions.get('window')


 class Home extends Component {
   
  static navigationOptions = ({ navigation }) => {
 
 
    return {
      headerTitle:'Choose Option',
      headerTitleStyle:{marginLeft:30,color:'blue'},
      headerStyle:{backgroundColor:'#65C5C8'},
      headerLeft: (
        <TouchableHighlight onPress={()=>navigation.openDrawer()}
         style={styles.drawerhome}>
         <Icon name="align-justify" size={22} color='white' />
         </TouchableHighlight>
      ),
      
    };
  };
      render() {
        return (
            
            <View style={styles.countainer}>
            
            <Button
          title="Eat"
          onPress={() => this.props.navigation.navigate('Eat')}
        />
            </View>
            
            
            
            )
    }
    }
  
    const styles=StyleSheet.create({
        countainer:{
            flex:1,
            backgroundColor:'green',
           
    
        },
        drawerhome:{
        
          marginLeft:20,
        
          alignItems:'center'
        }
     
    })


      const AppNavigator = createStackNavigator(
        {
            Home: Home,
           Defaultpage:Eat,
           
           
          },
      
        );
        
        const rootstack = createDrawerNavigator(
          {
              Home: AppNavigator,
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
              initialRouteName: "Home"
            }
          );
          
        
        export default createAppContainer(rootstack);