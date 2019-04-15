import React, {Component} from 'react';
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
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import {setRemoveItem,editItem} from "../Services/ServicesData/action";

let dim=Dimensions.get('window')

 class Favorite extends Component {
  static navigationOptions = () => {
    
    return{
        title:"Done",
       
        headerStyle: {
            backgroundColor: '#ffffe6',
          },
          headerTintColor: '#18751D',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"#53D55B"
          },
    };
    
 
};

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



  render() {
    let data=this.props.doneItem
    let theme = this.context
    return (
      <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
           <FlatList
                            data={data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item,})=>
        
                            <View style={styles.boxGreen}>
                                <View style={styles.boxText}>
                                
                                    <Text style={styles.textOption}>{item.option}</Text>
                                   
                          
                                    <Text style={styles.text}>{item.type}</Text>
                                    <View style={styles.date}>
                                    <Text style={styles.textDate}>{item.date}</Text>
                                    <Text style={styles.textTime}>{item.time}</Text>
                                    
                                
                                <View style={styles.button}>
                                <TouchableOpacity onPress={() => this.props.setRemoveItem(item.id)}
                                style={styles.delete}>
                                        <Icon name="trash" color="white" size={20}/>
                                    </TouchableOpacity>
                                    
                                  
                                    </View>
                                    </View>
                                    </View>
                            </View>

                        }
                        />
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F1F5E0',
    justifyContent:'center',
    alignItems:'center'
    
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
  textOption2: {
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
   text:{
       color:'white',
       fontWeight:'bold',
       fontSize:18,
       paddingVertical:5,
       alignSelf:'flex-end',
   },
   textOption:{
       color:'white',
       fontWeight:'bold',
       fontSize:22,
       paddingVertical:5,
       
   },
   button:{
       flexDirection:'row',
      marginLeft:60
   },

   boxGreen:{
       flexDirection:'row',
       borderColor:'#123738',
       borderWidth:1,
       backgroundColor:'#174849',
       width:350,
       paddingVertical:5,
       justifyContent:'space-between',
       marginTop:10,
       
       paddingHorizontal: 10,
       elevation:10,
       borderRadius:5
   },
   boxText:{
       width:200,
       
     
   },
   delete:{
       width:50,
       height:50,
       backgroundColor:'pink',
       justifyContent:'center',
       alignItems:'center',
       margin:5,
       borderRadius:7
   },
   textDelete:{
       color:'red',
       fontWeight:'500'
   },
   textEdite:{
       color:'#348C16',
       fontWeight:'500'
   },
   date:{
       flexDirection:'row',
       
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
    doneItem: state.userReducer.doneItem,
   
  };
};
export default connect(mapStateToProps,{setRemoveItem,editItem})(Favorite);


