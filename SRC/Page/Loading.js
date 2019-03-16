import React,{Component} from 'react';
import { Button, View,ActivityIndicator,Image,Dimensions,Animated,StyleSheet,Easing} from 'react-native';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import Home from './Home';
let dim = Dimensions.get('window')
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rotation: new Animated.Value(100)
    }
}
componentDidMount() {
  this.navigate();
  this.animationloading();
}

navigate=()=>{
  setTimeout(()=>this.props.navigation.navigate('Home'),1000)
};
animationloading = () => {
  Animated.timing(
      this.state.rotation,
      {
          toValue: 0,
          duration: 1000,
          easing: Easing.back(),
          useNativeDriver: true
      }
  ).start(() => this.animationloading())}




//   componentDidMount() {
// setTimeout(()=>this.props.navigation.navigate('Home'),1000);
//   }
  render() {
    const Transform = this.state.rotation.interpolate({
      inputRange: [0, 5, 10],
      outputRange: ['0deg', '180deg', '0deg']
  });
    return (
      <View
        style={{
          flex: 1,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/Photo/back.png')}
          style={styles.image}
        />
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Animated.View style={{transform:[{rotate:Transform}]}}>

          <Image
            source={require('../assets/Photo/loading.png')}
            style={styles.loading}
          />
         </Animated.View>
        </View>
       
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
    width:180,
    height:180
  },
  loading:{
    marginLeft:50,

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