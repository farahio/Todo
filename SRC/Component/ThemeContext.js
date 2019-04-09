import React from 'react';
export const themes = {
    light: {
        backgroundColor: 'blue',
        fontColor:'#262626',
        greenFont:'red',
        placeholderTextColor:'#474747',
        burgerMenu:'#282c34',
        saveButton:'#8979f3',
     
    },
    dark: {
        backgroundColor: 'black',
        borderColor:'#77849b',
        fontColor:'#dedede',
        borderWidth:1,
        placeholderTextColor:'#dedede',
        burgerMenu:'#fff',
        saveButton:'#424a57',
     
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark
});