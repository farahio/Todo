import React from 'react';
export const themes = {
    
    light: {
        backgroundColor: '#42f',
        borderColor:'#77849b',
        fontColor:'red',
        borderWidth:1,
        placeholderTextColor:'#dedede',
        burgerMenu:'#fff',
        saveButton:'#424a57',
        id:"1"
    },
    dark: {
        backgroundColor: '#2f6',
        fontColor:'#262626',
        greenFont:'red',
        placeholderTextColor:'#474747',
        burgerMenu:'#282c34',
        saveButton:'#8979f3',
        id:"2"
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark
});