import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  FlatList,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Easing,
  PanResponder
} from "react-native";
import { createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import Eat from './Eat'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { setType, fetchProducts } from '../Services/ServicesData/action'
import rootstack from "../route";
import { datadrawer } from "../Component/ComponentData/DrawerData"


let dim = Dimensions.get('window')


class Home extends Component {
  static navigationOptions = {

    title: 'Choose Option',
    headerStyle: {
      backgroundColor: 'blue'
    }

  }





  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(100),
      animatedValue2: new Animated.Value(-100),
      newState: null,
      identity:'',
      //  position : new Animated.ValueXY(),
      //  position1: new Animated.ValueXY() ,
      items : [
        {
          id: 0
        }, {
          id: 1
  
        }, {
          id: 2
  
        }, {
          id: 3
  
        }, {
          id: 4
  
        }, {
          id: 5
  
        }
      ]
    }

  }
  componentWillMount() {
  

    const newState = this.state.items.map((item, index) => { return { id: item.id, position: new Animated.ValueXY() } })
    this.setState({ newState: newState })
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gesture) => {
        // this.state.position.setOffset({x:this.state.position.x._value , y:this.state.position.y._value})
        // this.state.position.setValue({x:0,y:0})
      },
      onPanResponderMove: (event, gesture,) => {
        this.state.newState[this.state.identity].position.setValue({ x: gesture.dx, y: gesture.dy })
        
      },

      onPanResponderRelease: (e, gesture) => {

        Animated.timing(this.state.newState[this.state.identity].position, {
          toValue: 0,
          timing: 500,
          useNativeDriver: true
        }).start()
        this.state.newState[this.state.identity].position.flattenOffset()
      },

    });
  }

  componentDidMount() {


    this.animate()
  }
  animate = () => {
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.back()
      }
    ).start()
    Animated.timing(
      this.state.animatedValue2,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.back()
      }
    ).start()
  }

  onPresser = () => {
    this.props.navigation.navigate('Eat', { name: 'Film To Watch', backgroundColor: '#D573ED' })

  }

  sendID=(id)=>{
    this.setState({identity:id})
  }
  
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    let handles = this.panResponder.panHandlers;
    // const movingMargin = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: [-300, 300, 0]
    // })
    // const movingMarginright = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: [300, -300, 0]
    // })
    // const topMargin = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    // outputRange: [-100, 10]
    // })

    let id0 = 0
    let id1 = 1
    let id2 = 2
    let id3 = 3
    let id4 = 4
    let id5 = 5
    return (

      <View style={styles.countainer}>
        <View style={styles.headerStyle}>
          <Image
            source={require('../assets/Photo/logo8.png')}
            style={styles.logotitle}
          />
          <Text style={styles.headerText}>Choose Option</Text>
        </View>



        <View style={styles.body}>
          <View style={styles.options}>
            <Animated.View style={{ transform: [{ translateX: this.state.animatedValue }, { translateY: this.state.newState[0].position.y }] }}{...handles}>
              <TouchableOpacity
                onPressIn={this.sendID.bind(this,id0)}
                onPress={() =>
                  this.props.navigation.navigate('Eat',{ name: 'Work', backgroundColor: '#EC400D' })

                }
                style={[styles.Viewoption, { backgroundColor: '#EC400D' }]}>
                <Text style={styles.textoption}>Work</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: this.state.animatedValue2 }, { translateY: this.state.newState[1].position.y }] }}{...handles}>

              <TouchableOpacity
              onPressIn={this.sendID.bind(this,id1)}
                onPress={this.onPresser.bind(this)}
                style={[styles.Viewoption, { backgroundColor: '#D573ED' }]}>

                <Text style={styles.textoption}>Film To Watch</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: this.state.animatedValue }, { translateY: this.state.newState[2].position.y }] }}{...handles}>
              <TouchableOpacity
              onPressIn={this.sendID.bind(this,id2)}
                onPress={() => this.props.navigation.navigate('Eat', { name: 'Learning', backgroundColor: '#3C52F6' })}
                style={[styles.Viewoption, { backgroundColor: '#3C52F6' }]}>
                <Text style={styles.textoption}>Learning</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[{ transform: [{ translateX: this.state.animatedValue2 }, { translateY: this.state.newState[3].position.y }] }]}{...handles}>
              <TouchableOpacity
              onPressIn={this.sendID.bind(this,id3)}
                onPress={() => this.props.navigation.navigate('Eat', { name: 'Shoping', backgroundColor: '#C9D751' })}
                style={[styles.Viewoption, { backgroundColor: '#C9D751' }]}>
                <Text style={styles.textoption}>Shoping</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateX: this.state.animatedValue },{ translateY: this.state.newState[4].position.y }] }}{...handles}>
              <TouchableOpacity
              onPressIn={this.sendID.bind(this,id4)}
                onPress={() => this.props.navigation.navigate('Eat', { name: 'Visit', backgroundColor: '#e45' })}
                style={[styles.Viewoption, { backgroundColor: '#e45' }]}>
                <Text style={styles.textoption}>Visit</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[{ transform: [{ translateX: this.state.animatedValue2 },{ translateY: this.state.newState[5].position.y }] }]}{...handles}>
              <TouchableOpacity
              onPressIn={this.sendID.bind(this,id5)}
                onPress={() => this.props.navigation.navigate('Eat', { name: 'Eat', backgroundColor: '#3BE152' })}
                style={[styles.Viewoption, { backgroundColor: '#3BE152' }]}>
                <Text style={styles.textoption}>Eat</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  countainer: {
    flex: 1,
    backgroundColor: '#B4EBDF',
    position: 'relative',
    zIndex: 4,



  },
  headerStyle: {

    flex: 1,
    backgroundColor: '#23A7A7',
    flexDirection: 'row',
  },
  body: {
    flex: 9
  },
  headerText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginTop: 20
  },
  Viewoption: {
    width: 350,
    height: 50,
    backgroundColor: '#5AD6D6',
    margin: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,

  },
  textoption: {
    fontSize: 20,
    color: 'white'
  },
  options: {
    marginTop: 20,
    marginLeft: 10
  },
  logotitle: {
    width: 60,
    height: 60,
    marginLeft: 20
  },
  iconheader: {
    marginLeft: 10
  }
})


const AppNavigator = createSwitchNavigator(
  {
    Home: Home,
    Eat22: rootstack,


  },
  {
    initialRouteName: 'Home'
  }

);







const mapStateToProps = (state) => {
  return {

    item: state.userReducer.items
  }

}

export default connect(mapStateToProps, { setType, fetchProducts })(AppNavigator);