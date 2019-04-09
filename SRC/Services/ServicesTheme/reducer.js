import {CHANGE_THEME,} from './type'
import {themes} from "../../Component/ThemeContext";

const initialState = {
    theme: themes.light,
}

function usersReducer(state = initialState, action) {
    
    switch (action.type) {
        case CHANGE_THEME:
            return {
                theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            
            };

        default:
            return state;
    }

}
export default usersReducer