import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

let dim=Dimensions.get('window')

export default class Favorite extends Component {
  static navigationOptions = ({ navigation }) => {
    
    return{
    
        headerStyle: {
            backgroundColor: '#ffffe6',
          },
          headerTintColor: '#999999',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };
    
 
};

  render() {
    return (
      <View style={styles.container}>
      <Text>
            hello
      </Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
    
  },

 
 
});


