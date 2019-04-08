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
import { fetchProducts, setItem, setRemoveItem,editItem,setSearchItem,setType} from "../Services/action";


let dim = Dimensions.get("window");

class Eat extends Component {

  
  componentDidMount(){
    // this.props.fetchProducts() 
    let titlename=this.props.navigation.getParam("name")
    this.props.setType(titlename);
    let themex = this.props.navigation.getParam("backgroundColor")
    this.props.navigation.setParams({backgroundColor:themex})
}




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

  setTextEdit(input,item) {
    this.setState({ 
      edit : true,
      item:item,
      text: input ,
      color:'red'
    });

  }

  setText(input) {
    
      this.setState({ text: input });
    }

    setTextSearch(input ){
    
      this.setState ({searchText : input})
      this.props.setSearchItem (input)
  }


  componentWillMount(){
    this.props.setType(this.props.name)
    const name = this.props.name;
    // const color=this.chooseColor(name);
    const stt= this.state;
    this.props.navigation.setParams({name,stt});

  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
   
    return{
      title : params ?  (params.name? params.name : 'All') : '' ,
      headerTitleStyle:{
        color:'white'
      },
      headerStyle:{
        backgroundColor:navigation.getParam("backgroundColor")
      },
         
      
        headerLeft:(
          <TouchableOpacity onPress={() =>navigation.openDrawer()}>
          <Icon name="align-justify" size={22} color='white' style={styles.icon} />
   
          </TouchableOpacity>
        ),
      //   headerRight:(
      //     <View>
      //     {!params.state.select&&
      //     <View style = {[styles.headerStyle , {justifyContent : 'flex-end'}]}>
      //     <TouchableOpacity onPress= {this.settingSearch}>
      //         <Icon name="search" size={22} color='black' style={{marginRight:15}}/>
      //    </TouchableOpacity>
         
      // </View>}
      // {params.state.select&&
      //         <View style={styles.headerStyle}>
      //       <TouchableOpacity onPress={ this.goBack.bind(this , name)} style={styles.iconBack}>
      //         <Icon name="chevron-left" size={22}/>
             
      //       </TouchableOpacity>

      //       <View style={{ marginLeft: 20 }}>
      //         <View style={styles.textInput}>
              
      //           <TextInput
      //             placeholder={"Search here..."}
      //             value = {this.state.searchText}
      //             onChangeText= {this.setTextSearch.bind(this)}
      //             style={styles.textInput2}
      //           />
      //         </View>
      //       </View>
      //       </View>
      //       }


      // </View>
      //   )
     
      
    };
    
 
};


  render() {
   
    return (
      <View style={styles.container}>
  
        <View style={styles.bodyStyle}>
          <View style={styles.Listener}>
          <FlatList
                            data={this.props.selectedItem}
                            keyExtractor={item => item.id.toString()}
                           
                            renderItem={({item,})=>
        
                            <View style={styles.boxGreen}>
                                <View style={styles.boxtext}>
                                    <Text style={styles.textoption}>{item.option}</Text>
                                    <Text style={styles.text}>{item.type}</Text>
                                    <View style={styles.date}>
                                    <Text style={styles.textdate}>{item.date}</Text>
                                    <Text style={styles.texttime}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={styles.button}>
                                <TouchableOpacity onPress={() => this.props.setRemoveItem(item.id)}
                                style={styles.delete}>
                                        <Text style={styles.textdelete}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.delete} onPress={ this.setTextEdit.bind(this,item.type , item)}>
                                        <Text style={styles.textedite}>Edite</Text>
                                    </TouchableOpacity>
                                    </View>
                            </View>

                        }
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
    flexDirection: "row",
    backgroundColor: "#e7e7e7"
  },
  textoption2: {
    color: "white",
   
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
   },
   icon:{marginLeft:15}
});

const mapStateToProps = state => {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
  };
};
export default connect(mapStateToProps,{fetchProducts,setItem,setType,setSearchItem,setRemoveItem,editItem})(Eat);

 