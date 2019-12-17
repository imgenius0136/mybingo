import { combineReducers } from "redux";
import { basicReducer } from "./settingReducer";
import { statusReducer } from "./statusReducer";

const reducers = combineReducers({
  basicReducer,
  statusReducer
});

export default reducers;
