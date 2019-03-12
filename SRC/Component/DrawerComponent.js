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
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import {setType} from '../Services/action'
import{connect} from 'react-redux'
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
                this.props.navigation.navigate('Eat',{ name :item.title,color:item.Color})
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
         
            onPress={() =>
              this.props.navigation.navigate('Eat', { name: "Favorite" })
            }
            style={styles.favoriteview}
          >
          <View style={styles.favoriteview}>
           <Image
              source={require("../assets/Photo/hearts.png")}
              style={styles.favorite}
            /> 
            <Text style={styles.textfavorite}>Favorite</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          
            onPress={() =>
              this.props.navigation.navigate('Eat', { name: "Setting" })
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

          <TouchableOpacity
          
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
            style={styles.setting}
          >
          <View style={styles.favoriteview}>
          <Icon name='home' size={27} color='green' style={styles.icon}/>
            <Text style={styles.textfavorite}>Home</Text>
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
    flex: 3,
    
  },
  list: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
    marginLeft: 20
  },
  option: {
    width: dim.width,
    height: 65,

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
export default connect( null ,{ setType})(DrawerComponent)