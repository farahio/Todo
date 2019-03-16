import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated,Image,Easing,TouchableOpacity,FlatList} from 'react-native';
import{connect} from 'react-redux'
import {setType,fetchProducts,setItem, setRemoveItem}  from '../Services/action'


class Visiting extends Component {

    componentDidMount(){
        this.props.fetchProducts() 
    }

    constructor(props){
        super(props);
        
        this.state={

            selectItem:0,
       
        }
    }
    
   
    
    render() {

        return (
            <View style={styles.container}>
          
                           
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
                                    <TouchableOpacity style={styles.delete}>
                                        <Text style={styles.textedite}>Edite</Text>
                                    </TouchableOpacity>
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
        alignItems: 'center',
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
        selectedItem: state.selectedItem,
    };
  };
  

export default connect( mapStateToProps ,{setType,fetchProducts,setRemoveItem,setItem})(Visiting)