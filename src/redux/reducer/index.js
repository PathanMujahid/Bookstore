import addItemsReducer from "./addItemsReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  addItemsReducer,
});

export default rootReducers;
