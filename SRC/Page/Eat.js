import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Dimensions,FlatList,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer ,createDrawerNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerComponent from '../Component/DrawerComponent'
import{connect} from 'react-redux'
import{fetchProducts, setItem} from '../Services/action'
import Visiting from './Visiting'


let dim=Dimensions.get('window')


 class Eat extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text : '',
      select:false
      
    }
    
  }


  setText(input ){
        
    if( input.length > 0 ){
        this.setState ({text : input})
  }
}



  render() {

    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const backgroundColor = navigation.getParam('backgroundColor');
   
    return (
    
      <View style = {styles.container}>
   

   <View style = {[styles.headerStyle , {justifyContent : 'space-between',backgroundColor:backgroundColor}]}>
        <View style = {styles.headerStyle}>
            <TouchableOpacity 
            onPress={() =>this.props.navigation.openDrawer()}>
                <Icon name="align-justify" size={22} color='white' style={{marginLeft:15}} />
            </TouchableOpacity>
            <Text style={styles.textoption}>{name}</Text>
        </View>
        
                 

        <View style = {[styles.headerStyle , {justifyContent : 'flex-end'}]}>

            <TouchableOpacity  onPress = {this.Changer.bind(this)}>
                <Icon name="search" size={22} color='white' style={{marginRight:15}}/>
            </TouchableOpacity>

           

        </View>
        
      </View> 
    

  
        
       
      <View style = {styles.bodyStyle}>
          <View style={styles.Listener}>
              <Visiting/>
          </View>
          <View style={styles.Changer}>
          <TextInput 
                placeholder = {'Type here...'}
               value={this.state.text}
                // placeholderStyle={{ fontSize:22, borderColor: 'red' }}
                style={styles.inputStyle}
                onChangeText = {this.setText.bind(this)}
                />
                <TouchableOpacity  onPress= {()=>
                    {if( this.state.text.length > 0 ){
                    this.props.setItem(this.state.text, name)
                    this.setState({text:''})
                   
                            }
                            }
                        }
                style ={styles.bottonStyle}>
                    <Text style = {styles.fontStyle}>Done</Text>
                
                </TouchableOpacity>
          </View>
      </View>
    
  </View>
)
}
}

const styles = StyleSheet.create({


container: {
  flex: 1,
},
searchStyle : {
  width : 35,
  height : 35,
  
},
threeStyle : {
  width : 20,
  height : 20
},
headerStyle :{
    flexDirection: 'row', 
  
    flex : 1,
    alignItems: 'center',
},
bodyStyle : {
    flex : 9
},
headerText : {
  marginLeft : 20,
  fontWeight: 'bold',
  color : 'white',
  fontSize : 20,
},
drawerBotton : {
  marginLeft : 15
},
drawerBottonRight :{
  marginRight : 15,
},
Listener:{
  flex:8,
  backgroundColor:'#e7e7e7'

},
Changer:{
 
  flexDirection:'row',
  backgroundColor:'#e7e7e7'
},
textoption:{
  color:'white',
marginLeft:20,
fontSize:22
},
inputStyle:{
  flex : 8 ,
  height:60,
  backgroundColor: '#f2f3f7',
  borderWidth: 2,
  borderColor : '#E1E2E7',
  borderBottomColor:'#F10C39',
  marginBottom:30,
   margin:10,
   elevation : 15
},
bottonStyle:{
  flex : 1,
  justifyContent: 'center',
  alignItems: 'center',
  elevation : 15,
  marginBottom:20,
  marginRight: 10,
},

fontStyle : {
  color : '#F10C39',  
  fontWeight : "200" , 
  fontSize : 14 ,
},
fontStyle2 : {
  color : '#98042D',  
  fontWeight : "200" , 
  fontSize : 20 ,
},
flatStyle :{
  marginTop : 25 ,
},
itemStyle :{
  width : 400,
  flexDirection: 'row',
  flex :1,
 
  borderBottomColor:'#98042D',
  marginStart : 15,
  justifyContent: 'flex-start',
  marginTop : 10,
},

});

const mapStateToProps=(state)=>{
  return{
   
    items : state.item
  }
  
  }
 
let connectedEat = connect(mapStateToProps,{fetchProducts,setItem})(Eat);

export const rootstack = createDrawerNavigator(
  {
      
      Eat: {
        screen:connectedEat, 
      },
      Work: {
        screen: connectedEat,
      },
      Visite: {
        screen: connectedEat,
      },
      Learning: {
        screen:connectedEat,
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
      initialRouteName: "Eat"
    }
  );
 
  
    
    
    
    export default rootstack;

