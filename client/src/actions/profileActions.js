import axios from "axios";
import { 
	GET_PROFILE,
    GET_ERRORS,
    PROFILE_LOADING,
    SET_CURRENT_USER,
    CLEAR_CURRENT_PROFILE   
} from "./types";


// get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get("/api/profile")
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};

// profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};