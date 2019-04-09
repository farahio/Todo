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
import { fetchProducts, setItem, setRemoveItem,editItem,setSearchItem,setType} from "../Services/ServicesData/action";
import { withNavigation } from 'react-navigation';

class Header extends Component {

  
  
    constructor(props) {
      super(props);
      this.state = {
        text: "",
        select: false,
        selectItem:0,
        item:null,
        edit:false
      };
    }
  
  
    settingSearch() {
      this.setState({ select: true });
    }
    goBack(type) {
//   this.props.setType (type)
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
  
    setTextEdit(input,item) {
      this.setState({ 
        edit : true,
        item:item,
        text: input 
      });
  
    }
  
    setText(input) {
      
        this.setState({ text: input });
      }
  
      setTextSearch(input ){
      
        this.setState ({searchText : input})
        this.props.setSearchItem (input)
    }
    
  
    render() {
    //   const { navigation } = this.props;
    //   const name = navigation.getParam("name");
    //   const backgroundColor = navigation.getParam("backgroundColor");
  
      return (
        <View style={styles.container}>
          <View style={[styles.headerStyle,{justifyContent: "space-between",backgroundColor: this.props.backgroundcolor}]}>
          {!this.state.select&&
         <View style={styles.headerStyle}>
       <View style={styles.headerStyle}>
  
  
             
          <TouchableOpacity onPress={() =>this.props.navigation.openDrawer()}>
                  <Icon name="align-justify" size={22} color='white' style={{marginLeft:15}} />
              </TouchableOpacity>
              <Text style={styles.textoption2}>{this.props.name}</Text>
          </View>
         
             <View style = {[styles.headerStyle , {justifyContent : 'flex-end'}]}>
                  <TouchableOpacity onPress= {this.settingSearch.bind(this)}>
                      <Icon name="search" size={22} color='white' style={{marginRight:15}}/>
                 </TouchableOpacity>
              </View>
          </View>}
  
  
          {this.state.select&&
                <View style={styles.headerStyle}>
              <TouchableOpacity onPress={this.goBack.bind(this )} style={styles.iconBack}>
                <Icon name="chevron-left" size={22}/>
              </TouchableOpacity>
  
              <View style={{ marginLeft: 20 }}>
                <View style={styles.textInput}>
                
                  <TextInput
                    placeholder={"Search here..."}
                    value = {this.state.searchText}
                    onChangeText= {this.setTextSearch.bind(this)}
                    style={styles.textInput2}
                  />
                </View>
              </View>
              </View>
              }
  
  
  
          </View>
          </View>
          );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:62,
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
    flexDirection: "row",
    backgroundColor: "#e7e7e7"
  },
  textoption2: {
    color: "white",
    marginLeft: 30,
    fontSize: 22
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
    marginVertical:10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
   
    marginHorizontal: 5
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
   text:{
       color:'white',
       fontWeight:'bold',
       fontSize:18,
       paddingVertical:5,
       alignSelf:'flex-end',
   },
   textoption:{
       color:'white',
       fontWeight:'bold',
       fontSize:22,
       paddingVertical:5,
       
   },
   button:{
       flexDirection:'column',
      
   },

   boxGreen:{
       flexDirection:'row',
       borderColor:'#123738',
       borderWidth:1,
       backgroundColor:'#174849',
       flex:5,
       paddingVertical:5,
       justifyContent:'space-between',
       marginTop:10,
       alignItems: 'center',
       paddingHorizontal: 10,
       elevation:10,
       borderRadius:5
   },
   boxtext:{
       width:200,
       
     
   },
   delete:{
       width:50,
       height:50,
       backgroundColor:'pink',
       marginLeft:30,
       justifyContent:'center',
       alignItems:'center',
       margin:5,
       borderRadius:7
   },
   textdelete:{
       color:'red',
       fontWeight:'500'
   },
   textedite:{
       color:'#348C16',
       fontWeight:'500'
   },
   date:{
       flexDirection:'row',
       
   },
   textdate:{
       margin:10,
       color:'white'
   },
   texttime:{
       margin:10,
       color:'white'
   }
});

const mapStateToProps = state => {
  return {
    items: state.item,
    selectedItem: state.selectedItem,
  };
};
export default connect(mapStateToProps,{ fetchProducts, setItem,setType,setSearchItem,setRemoveItem,editItem})(withNavigation(Header));
