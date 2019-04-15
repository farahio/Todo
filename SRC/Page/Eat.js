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
  TouchableHighlight,
  PanResponder,
  Animated
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import DrawerComponent from "../Component/DrawerComponent";
import Header from './Header'
import { connect } from "react-redux";
import { fetchProducts, setItem,getDone,setRemoveItem,editItem,setSearchItem,setType} from "../Services/ServicesData/action";
import Item from '../Component/Element'

let dim = Dimensions.get("window");

class Eat extends Component {

  
  componentDidMount(){
    this.props.fetchProducts() 
   
}


  constructor(props) {
    super(props);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);
    const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
           onPanResponderMove: (event, gestureState) => {
              position.setValue({ x: gestureState.dx, y: gestureState.dy });
           },
           onPanResponderRelease: (evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
          },
      });
        
    this.state = {
      position,
      panResponder,
      text: "",
      select: false,
      selectItem:0,
      item:null,
      edit:false,
      enable: true,
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


  // componentWillMount(){
  //   this.props.setType(this.props.name)
  //   const name = this.props.name;
  //   // const color=this.chooseColor(name);
  //   const stt= this.state;
  //   this.props.navigation.setParams({name,stt});

  // }

  static navigationOptions = ({ navigation }) => {
const inName = navigation.getParam("name","UNDEFINED")
const inBackgroundcolor = navigation.getParam("backgroundColor", "gold")
    return{
      header:<Header  backgroundcolor={inBackgroundcolor} name={inName}  />
};

  }


setScrollEnabled(enable) {
  this.setState({
    enable,
  });
}

renderItem(item) {
  return (
    <Item
      item={item}
      navigation = {this.props.navigation}
      setScrollEnabled={enable => this.setScrollEnabled(enable)}
    />
  );
}
  render() {
    const { navigation} = this.props
    const name = navigation.getParam("name","UNDEFINED")
    return (
      <View style={styles.container}>
  
        <View style={styles.bodyStyle}>
          <View style={styles.Listener}>
          <FlatList
              data={this.props.selectedItem}
              keyExtractor={item => item.id.toString()}
              
              renderItem={({item}) => this.renderItem(item)}
          />
             
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
                if (this.state.text.length > 0 && !this.state.edit) {
                  this.props.setItem(this.state.text, name);
                  this.setState({ text: "" });
                }
                if (this.state.text.length > 0 && this.state.edit) {
                  this.props.editItem(this.state.item.id, this.state.text ,this.state.item);
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
    flex: 1,
    alignItems:'center',
    backgroundColor:'#e7e7e7'
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
    width:350,
    flexDirection: "row",
    
  },

  inputStyle: {
    flex:8,
    backgroundColor:'white',
    borderWidth: 2,
    borderColor: "#E1E2E7",
    borderBottomColor: "#F10C39",
    marginBottom: 30,
    marginVertical: 10,
    elevation: 15
  },
  bottonStyle: {
   flex:2,
    marginVertical:20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
   
    marginHorizontal: 5
  },

  fontStyle: {
    color: "#F10C39",
    fontWeight: "200",
    fontSize: 14,
    marginBottom:20
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
    backgroundColor: "white" ,
    borderRadius:5
  },
  iconBack:{
    marginLeft:10
  },
  textInput2: { 
    height: 50,
    marginRight: 40,
    borderRadius: 5,
  
     },
     box:{
      flex:1,
       alignItems:'center',
       justifyContent:'space-between',
       flexDirection:'row',
       
       
   },
   boxOn:{
       width:350,
      height:300,
      backgroundColor:'#256a75',
      borderRadius:10,
      margin:15,
      alignItems:'center',
      flexDirection:'row',
      paddingHorizontal:10,
      elevation:15
   },

   textMain:{
       color:'white',
       fontSize:18,
       flex: 1,
       textAlign: 'left'
   },
   flatImage:{
       width:15,
       height:15,
       position:'relative',
       paddingRight:20,
   },

   textDate:{
       margin:10,
       color:'white'
   },
   optionIcon:{
    flexDirection:'row'
   },
   textTime:{
       margin:10,
       color:'white'
   },
   icon:{
     marginLeft:15
    },

});

const mapStateToProps = state => {
  return {
    items: state.userReducer.items,
    selectedItem: state.userReducer.selectedItem,
  };
};
export default connect(mapStateToProps,{fetchProducts,setItem,setType,setSearchItem,setRemoveItem,getDone,editItem})(Eat);
