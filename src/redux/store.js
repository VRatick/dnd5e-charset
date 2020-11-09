import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import characterSet from "./reducers/charset";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    characterSet: characterSet,    
  });

  export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))