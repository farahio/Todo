import {CHANGE_THEME} from './type'
import {themes} from "../../Component/ThemeContext";

const initialState = {
    theme: themes.light,
}
export const usersReducer=(state = initialState, action)=> {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                theme:
                state.theme.id === themes.light.id
                    ? themes.dark
                    : themes.light
            };
        default:
            return state;
    }
}