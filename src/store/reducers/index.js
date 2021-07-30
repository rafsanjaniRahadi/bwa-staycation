import { combineReducers } from "redux";
import checkout from "./checkout.js";
import page from "./page";

export default combineReducers({
    checkout,
    page
})