
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import DrawerComponent from "../Component/DrawerComponent";
import {connect} from 'react-redux'
import  Eat from '../Page/Eat'


let connectedEat = Eat;
const rootstack = createDrawerNavigator(
    {
      Eat: {
        screen: connectedEat
      },
      Work: {
        screen: connectedEat
      },
      Visite: {
        screen: connectedEat
      },
      Learning: {
        screen: connectedEat
      },
      Shoping:{
        screen:connectedEat
      },
      Film:{
        screen:connectedEat
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
  