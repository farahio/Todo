import React,{Component} from 'react';
import { Button, View,ActivityIndicator,Image,Dimensions,StyleSheet} from 'react-native';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import Home from './Home';
let dim = Dimensions.get('window')
class Loading extends Component {
  componentDidMount() {
setTimeout(()=>this.props.navigation.navigate('Home'),1000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/Photo/colores.jpg')}
          style={styles.image}
        />
        <Image source={require('../assets/Photo/logo8.png')}
          style={styles.logo}
        />
        <View>
          <ActivityIndicator size={'large'}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  image:{
    width:dim.width,
    height:dim.height,
    position:'absolute'
  },
  logo:{
    width:250,
    height:250
  }
})

const MyNavigator = createSwitchNavigator({
  Loading: Loading,
  Home:Home
 
},
{
  initialRouteName: 'Loading'
}
);


export default createAppContainer(MyNavigator);