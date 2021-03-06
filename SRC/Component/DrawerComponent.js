import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { datadrawer } from "./ComponentData/DrawerData";
import { TouchableHighlight,Animated} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import {setType} from '../Services/ServicesData/action'
import{connect} from 'react-redux'
import Favorite from '../Page/Favorite'
let dim = Dimensions.get("window");
 class DrawerComponent extends Component {
 

  render() {
  
    return (
      <View style={styles.countainer}>
     
            
        <View style={styles.headerdrawer}>
          <Text style={styles.list}>List</Text>
        </View>
        <View style={styles.draweroption}>
          <FlatList
            data={datadrawer}
            keyExtractor={item => item.title}
            
            renderItem={({ item }) => (
              <TouchableOpacity
              
              onPress={() => {
                
                this.props.setType(item.title );
                this.props.navigation.navigate('Eat',{ name :item.title,Color:item.Color})
                this.props.navigation.closeDrawer()
              }}
                
                style={styles.option}
              >
              <View style={styles.option}>
         <Image source={item.image} style={styles.image} />  
                <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.drawersetting}>
          <TouchableOpacity
         
            onPress={() =>{
            
              this.props.navigation.navigate('Favorite')
              this.props.navigation.closeDrawer()}
              
            }
            style={styles.favoriteview}
          >
          <View style={styles.favoriteview}>
           <Icon name="check" color="green" size={24}
              style={styles.favorite}
            /> 
            <Text style={styles.textfavorite}>Done</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          
            onPress={() =>{
              
              this.props.navigation.navigate('Setting')
              this.props.navigation.closeDrawer()}
            }
            style={styles.setting}
          >
          <View style={styles.favoriteview}>
          <Image
              source={require("../assets/Photo/settings-gears.png")}
              style={styles.favorite}
            />
            <Text style={styles.textfavorite}>Setting</Text>
            </View>
          </TouchableOpacity>

         
        </View>
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  countainer: {
    flex: 1
  },
  headerdrawer: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#D1D8D8"
  },
  draweroption: {
    flex: 6,

    borderBottomWidth: 1,
    borderColor: "#D1D8D8"
  },
  drawersetting: {
    flex:2,
    
  },
  list: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
    marginLeft: 20
  },
  option: {
    width: dim.width,
    height: 60,
    margin: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 60
  },
  favoriteview: {
    width:280,
    flexDirection: "row",
    height: 65,

    alignItems: "center"
  },
  setting: {
    width: 280,
    height: 65,
    alignItems:'center',
    flexDirection: "row"
  },
  favorite: {
    width: 30,
    height: 30,
    marginLeft: 20
  },
  textfavorite: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 50
  },
  icon:{
      marginLeft:25
  }
});

const mapStateToProps = state => {
  return {
      item: state.userReducer.items,
  };
};
export default connect( mapStateToProps,{setType})(DrawerComponent)