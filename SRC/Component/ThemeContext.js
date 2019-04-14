import React from 'react';
export const themes = {
    
    light: {
        backgroundColor: '#ffffff',
        borderColor:'#77849b',
        fontColor:'black',
        borderWidth:1,
        placeholderTextColor:'#dedede',
        burgerMenu:'#fff',
        saveButton:'#424a57',
        id:"1"
    },
    dark: {
        backgroundColor: '#7A7E7B',
        fontColor:'white',
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