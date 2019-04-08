import {Home} from '../Page/Home'
 import {rootstack} from './index'

 import {index} from './index'
 import { createSwitchNavigator,createStackNavigator} from "react-navigation";

const AppNavigator = createSwitchNavigator(
    {
        Home: Home,
       Eat:rootstack,
       
       
      },
      
    );
  


    
    
      
    
 
    
       
     export default (AppNavigator)