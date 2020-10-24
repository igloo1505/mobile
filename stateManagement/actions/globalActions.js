import {SET_FOCUSED} from "./Types"

export const setFocused = (focusScreen) => async (dispatch) => {
    dispatch({ type: SET_FOCUSED, payload: focusScreen})
}