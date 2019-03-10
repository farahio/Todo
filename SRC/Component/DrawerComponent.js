import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {datadrawer} from './ComponentData/DrawerData'
import { TouchableHighlight } from "react-native-gesture-handler";


let dim=Dimensions.get('window')
export default class DrawerComponent extends Component {
 
render() {

    

    return (
        
        <View style={styles.countainer}>
            <View style={styles.headerdrawer}>
                <Text style={styles.list}>List</Text>
            </View>
            <View style={styles.draweroption}>

            <FlatList
                    data={datadrawer}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                     
                    <TouchableOpacity   style={styles.option}>
                        <Image source={item.image}
                                style={styles.image}
                        />
                    <Text style={styles.text}>{item.title}</Text>
                    
                    </TouchableOpacity>

                    }
                />
            
               
            </View>
            <View style={styles.drawersetting}>
                    <TouchableOpacity style={styles.favoriteview}>
                        <Image
                            source={require('../assets/Photo/hearts.png')}
                            style={styles.favorite}
                        />
                        <Text style={styles.textfavorite}>Favorite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setting}>
                    <Image
                            source={require('../assets/Photo/settings-gears.png')}
                            style={styles.favorite}
                        />
                        <Text style={styles.textfavorite}>Setting</Text>
                        </TouchableOpacity>
            </View>
        </View>
        
        
        
        )
}
}
const styles=StyleSheet.create({
    countainer:{
        flex:1
       

    },
    headerdrawer:{
        flex:1,
        backgroundColor: "orange",
        justifyContent: 'center',
        borderBottomWidth:1,
        borderColor:'#D1D8D8',
    
    },
    draweroption:{
        flex:6,
      
        borderBottomWidth:1,
        borderColor:'#D1D8D8',
    },
    drawersetting:{
        flex:3,
  
    },
    list:{
        fontSize:24,
        color:'white',
        fontWeight: '500',
        marginLeft:20,
    },
    option:{
        width:dim.width,
        height:65,

        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width:20,
        height:20,
        marginLeft:20
    },
    text:{
        fontSize:20,
        fontWeight:'500',
        marginLeft:60
    },
    favoriteview:{
        width:dim.width,
        flexDirection:'row',
        height:65,
       
        alignItems:'center'
      
        
    },
    setting:{
        width:dim.width,
        height:65,
      
        alignItems:'center',
        flexDirection:'row',
    },
    favorite:{
        width:30,
        height:30,
        marginLeft:20
        
    },
    textfavorite:{
        fontSize:20,
        fontWeight:'500',
        marginLeft:50,
        
    }

  
})