import { combineReducers } from "redux";
import invitationReducer from "./invitationReducers";

const rootReducer = combineReducers({
  invitationReducer: invitationReducer,
});

export default rootReducer;
