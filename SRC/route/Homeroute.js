import {Home} from '../Page/Home'
 import {rootstack} from './index'
 import { createSwitchNavigator} from "react-navigation";

const AppNavigator = createSwitchNavigator(
    {
        Home: Home,
       Eat22:rootstack,
       
       
      },
  
    );
    
    
      
    
 
    
       
     export default (AppNavigator)