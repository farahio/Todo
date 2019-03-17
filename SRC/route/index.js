
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

// const eatStack = createStackNavigator({
//   Eat: {
//     screen: connectedEat,
//   },
// })

// eatStack.navigationOptions = {
//   tabBarLabel: 'Home!',
// };

const rootstack = createDrawerNavigator(
    {
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
  