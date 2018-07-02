import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import buyReducer from "./buyReducer";


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    buy: buyReducer
});
