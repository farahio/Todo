import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import { createStore , applyMiddleware  } from 'redux'
import {Provider}  from 'react-redux'
import Home from './SRC/Page/Home'
import reducer from './SRC/Services/reducer'
import thunk from "redux-thunk"
import Visiting from './SRC/Page/Visiting'
import Loading from './SRC/Page/Loading'



export const store = createStore(reducer,applyMiddleware(thunk));
export default class App extends Component{
    render(){
        return(
            <Provider  style={styles.container} store={store}>
                <Loading/>
           </Provider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});