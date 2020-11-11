import {createStore} from "redux";
import rootreducer from "./Reducers/rootReducer";
const store=createStore(rootreducer)
export default store;