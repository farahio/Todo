import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import DrawerComponent from "../Component/DrawerComponent";
import { connect } from "react-redux";
import { fetchProducts, setItem, setSearchItem,setType } from "../Services/action";
import Visiting from "./Visiting";

let dim = Dimensions.get("window");

class Eat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      select: false
    };
  }


  settingSearch() {
    this.setState({ select: true });
  }
  goBack(type) {
    this.props.setType (type)
      this.setState ({
        text : '',
        searchText:'',
        select : false,
      })
  }

  showSearch=()=>{
    this.setState({
      select:true
    })
  }

  setText(input) {
    
      this.setState({ text: input });
    }

    setTextSearch(input ){
    
      this.setState ({searchText : input})
      this.props.setSearchItem (input)
  }
  

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const backgroundColor = navigation.getParam("backgroundColor");

    return (
      <View style={styles.container}>
        <View style={[styles.headerStyle,{justifyContent: "space-between",backgroundColor: backgroundColor}]}>
        {!this.state.select&&
       <View style={styles.headerStyle}>
     <View style={styles.headerStyle}>


           
        <TouchableOpacity onPress={() =>this.props.navigation.openDrawer()}>
                <Icon name="align-justify" size={22} color='white' style={{marginLeft:15}} />
            </TouchableOpacity>
            <Text style={styles.textoption}>{name}</Text>
        </View>
       
           <View style = {[styles.headerStyle , {justifyContent : 'flex-end'}]}>
                <TouchableOpacity onPress= {this.settingSearch.bind(this)}>
                    <Icon name="search" size={22} color='white' style={{marginRight:15}}/>
               </TouchableOpacity>
            </View>
        </View>}


        {this.state.select&&
              <View style={styles.headerStyle}>
            <TouchableOpacity onPress={ this.goBack.bind(this , name)} style={styles.iconBack}>
              <Icon name="chevron-left" size={22}/>
            </TouchableOpacity>

            <View style={{ marginLeft: 20 }}>
              <View style={styles.textInput}>
              
                <TextInput
                  placeholder={"Search here..."}
                  value = {this.state.searchText}
                  onChangeText= {this.setTextSearch.bind(this)}
                  style={{ height: 50, marginRight: 40 }}
                />
              </View>
            </View>
            </View>
            }



        
        </View>

        <View style={styles.bodyStyle}>
          <View style={styles.Listener}>
            <Visiting />
          </View>
          <View style={styles.Changer}>
            <TextInput
              placeholder={"Type here..."}
              value={this.state.text}
              // placeholderStyle={{ fontSize:22, borderColor: 'red' }}
              style={styles.inputStyle}
              onChangeText={this.setText.bind(this)}
            />
            <TouchableOpacity
              onPress={() => {
                if (this.state.text.length > 0) {
                  this.props.setItem(this.state.text, name);
                  this.setState({ text: "" });
                }
              }}
              style={styles.bottonStyle}
            >
              <Text style={styles.fontStyle}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchStyle: {
    width: 35,
    height: 35
  },
  threeStyle: {
    width: 20,
    height: 20
  },
  headerStyle: {
    flexDirection: "row",

    flex: 1,
    alignItems: "center"
  },
  bodyStyle: {
    flex: 9
  },
  headerText: {
    marginLeft: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 20
  },
  drawerBotton: {
    marginLeft: 15
  },
  drawerBottonRight: {
    marginRight: 15
  },
  Listener: {
    flex: 8,
    backgroundColor: "#e7e7e7"
  },
  Changer: {
    flexDirection: "row",
    backgroundColor: "#e7e7e7"
  },
  textoption: {
    color: "white",
    marginLeft: 20,
    fontSize: 22
  },
  inputStyle: {
    flex: 8,
    height: 60,
    backgroundColor: "#f2f3f7",
    borderWidth: 2,
    borderColor: "#E1E2E7",
    borderBottomColor: "#F10C39",
    marginBottom: 30,
    margin: 10,
    elevation: 15
  },
  bottonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
    marginBottom: 20,
    marginRight: 10
  },

  fontStyle: {
    color: "#F10C39",
    fontWeight: "200",
    fontSize: 14
  },
  fontStyle2: {
    color: "#98042D",
    fontWeight: "200",
    fontSize: 20
  },
  flatStyle: {
    marginTop: 25
  },
  itemStyle: {
    width: 400,
    flexDirection: "row",
    flex: 1,

    borderBottomColor: "#98042D",
    marginStart: 15,
    justifyContent: "flex-start",
    marginTop: 10
  },
  textInput:{ 
    width: 350, 
    height: 50, 
    backgroundColor: "white" 
  },
  iconBack:{marginLeft:10}
});

const mapStateToProps = state => {
  return {
    items: state.item,
  };
};
export default connect(mapStateToProps,{ fetchProducts, setItem,setType,setSearchItem})(Eat);

 