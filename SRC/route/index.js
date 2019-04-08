
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import DrawerComponent from "../Component/DrawerComponent";
import {connect} from 'react-redux'
import  Eat from '../Page/Eat'
import Favorite from "../Page/Favorite";

import Setting from '../Page/Setting'



// const eatStack = createStackNavigator({
//   Eat: {
//     screen: connectedEat,
//   },
// })

// eatStack.navigationOptions = {
//   tabBarLabel: 'Home!',
// };

const stack = createStackNavigator(
  {
    // Eat22:rootstack,
    // Favorite:Favorite,
    // Setting:Setting
    Eat:{
      screen: Eat
    },
    Visite: {
      screen: Eat
    },
    Learning: {
      screen: Eat
    },
    Shoping:{
      screen:Eat
    },
    Film:{
      screen:Eat
    },
    Favorite:{
      screen:Favorite
    },
    Setting:{
      screen:Setting
    }
  },
  {
    initialRouteName:'Eat'
  }
)

const rootstack = createDrawerNavigator(
    {
      Eat:{
        screen: stack
      },
      Visite: {
        screen: stack
      },
      Learning: {
        screen: stack
      },
      Shoping:{
        screen:stack
      },
      Film:{
        screen:stack
      },
      Favorite:{
        screen:stack
      },
      Setting:{
        screen:stack
      }
    
    },
    {
      drawerPosition: "left",
      useNativeAnimations: "true",
      contentComponent: DrawerComponent,
      backBehavior: "initialRoute"
    },
    {
      contentOptions: {
        activeTintColor: "#e91e63",
        itemsContainerStyle: {
          marginVertical: 10
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
  