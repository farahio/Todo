import React, { Component } from 'react'
import {ThemeContext} from "../Component/ThemeContext";
import {connect} from "react-redux";
import Loading from './Loading';



class Theme extends Component {
    render() {
        return (
            <ThemeContext.Provider value={this.props.changeReducer.theme}>
                <Loading/>
            </ThemeContext.Provider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        changeReducer: state.changeReducer
    }
}
export default connect(mapStateToProps)(Theme)