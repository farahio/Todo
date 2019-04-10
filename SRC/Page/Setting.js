import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  UIManager
} from 'react-native';
import {ThemeContext} from '../Component/ThemeContext'
import{connect} from 'react-redux'
import {themeChanger} from '../Services/ServicesTheme/action'


UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
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


constructor(props) {
  super(props);
  this.state = {
      button: new Animated.Value(true)
  };
}



animate = {
  duration: 1000,
  create: {
      property: 'scaleXY',
      type: 'spring',
      duration: 1000,
      springDamping: 0.2
  },
  update: {
      property: 'scaleXY',
      type: 'easeOut',
      duration: 400,
      springDamping: 0.4,
      initialVelocity: .1
  },
  delete: {
      property: 'scaleXY',
      type: 'spring',
      duration: 1000,
      springDamping: 0.5
  }
};

toggleTheme = () => {
  // LayoutAnimation.configureNext(this.animate);
  this.props.themeChanger();
  this.setState({button: !this.state.button})
};


  render() {
    const  {theme}  = this.context
    return (
      <View style={[styles.setting, {backgroundColor:theme.backgroundColor }]}>
      <Text style={{color:theme.fontColor, fontWeight: '600'}}>Theme</Text>
      <View>
          <TouchableOpacity onPress={this.toggleTheme.bind(this)}>
              <View style={this.state.button ? styles.button : styles.buttonDark}>
                  <View style={[styles.buttonWrapper]}></View>
                  
              </View>
              
          </TouchableOpacity>
      </View>
  </View>
    );
  }
}

Setting.contextType = ThemeContext;
const styles = StyleSheet.create({
  setting: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
},

    backButton :{
        marginLeft : 12,
        height : 20,
        width: 20,
      },
    backImage : {
        width : 30,
        height : 30,
      },
  
    textStyle : {
      fontWeight: '400',
      color : '#606060',
      fontSize : 18
    },
    button: {
      backgroundColor: '#b7b7b7',
      width: 100,
      height: 40,
      justifyContent: 'center',
      borderRadius: 50,
      alignItems: 'flex-end'
  },
  buttonDark: {
      backgroundColor: '#afafaf',
      width: 100,
      height: 40,
      justifyContent: 'center',
      borderRadius: 50,
      alignItems: 'flex-start'
  },
  buttonWrapper: {
      width: 20,
      height: 20,
      backgroundColor: '#8979f3',
      borderRadius: 50,
      marginHorizontal: 5
  }
 
 
});

const mapStateToProps = (state) => {
  return {
      theme: state.changeReducer
  }
};
export default connect(mapStateToProps, {themeChanger})(Setting)

