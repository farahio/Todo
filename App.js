import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import { createStore , applyMiddleware  } from 'redux'
import {Provider}  from 'react-redux'
import Home from './SRC/Page/Home'
import Theme from './SRC/Page/Theme'
import rootReducer from './SRC/Services/Combiner'
import thunk from "redux-thunk"



export const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends Component{
    render(){
        return(
            <Provider   store={store} >
               <Theme/>
           </Provider>
        )
    }
}
