import React, {Component} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity , Alert , View , FlatList , Animated , Dimensions , PanResponder}  from 'react-native';
import{connect} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import { fetchProducts, setItem,getDone,setRemoveItem,editItem,setSearchItem,setType} from "../Services/ServicesData/action";

class Element extends Component {
  constructor(props) {
    super(props);

    this.gestureDelay = -35;
    this.scrollViewEnabled = true;

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 35) {
        //   this.setScrollViewEnabled(false);
          let newX = gestureState.dx + this.gestureDelay;
          position.setValue({x: newX, y: 0});
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < 150) {
          Animated.timing(this.state.position, {
            toValue: {x: 0, y: 0},
            duration: 150,
            useNativeDriver: true
          }).start(() => {
            this.setScrollViewEnabled(true);
          });
        } else {
          Animated.spring(this.state.position, {
            toValue: {x: 100, y: 0},
            damping : 10,
            useNativeDriver: true
          }).start(() => {
            this.setScrollViewEnabled(true);
          });
        }
      },
    });

    this.panResponder = panResponder;
    this.state = { panResponder , position};
  }
  
  setText(input) {
    
    this.setState({ text: input });
  }
  setScrollViewEnabled(enabled) {
    if (this.scrollViewEnabled !== enabled) {
      this.props.setScrollEnabled(enabled);
      this.scrollViewEnabled = enabled;
    }
  }
  setTextEdit(input,item) {
    this.setState({ 
      
      item:item,
      text: input ,
      color:'red',
      
      select: false,
      selectItem:0,
      
      edit:false,
      enable: true,
    });

  }

    
completeTask = (id) => {
  this.props.getDone(id)

};

  render(){
    let item = this.props.item
    return(
      <View>
      <View>
        <TouchableOpacity onPress={() => this.props.setRemoveItem(item.id)}>

        </TouchableOpacity>
        <TouchableOpacity onPress={ this.setTextEdit.bind(this,item.type , item)}>

        </TouchableOpacity>
      </View>
      <Animated.View style = {[styles.flatStyle ,  {transform: [{ translateX: this.state.position.x }, { translateY: this.state.position.y }]} ]} {...this.state.panResponder.panHandlers}>
      <View style ={styles.container}>
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
            <TouchableOpacity  style={styles.delete} onPress={ this.setTextEdit.bind(this,item.type , item)}>
            <Icon name="edit" color="white" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={this.completeTask.bind(this, item.id)}
        style={styles.delete}>
                <Icon name="check" color='white' size={20}/> 
            </TouchableOpacity>
            </View>
            </View>
            </View>
    </View>
      </View>
      </Animated.View>
      </View>
    )
  }
}
export default connect(null,{fetchProducts,setItem,setType,setSearchItem,setRemoveItem,getDone,editItem})(Element);


const styles = StyleSheet.create({
  container : {
    flex : 1
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
      
      paddingHorizontal: 10,
      elevation:10,
      borderRadius:5
  },
  button:{
    flexDirection:'row',
   marginLeft:30
},

  boxText:{
    width:200,
  },
  textOption2: {
    color: "white",
    fontSize: 22
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
delete:{
  width:35,
  height:35,
  backgroundColor:'pink',
  justifyContent:'center',
  alignItems:'center',
  margin:5,
  borderRadius:7
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

})