import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../client/reducer";


export default ()=>{
    const store = createStore(reducer,{}, applyMiddleware(thunk));

    return store;
}