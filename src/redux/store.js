import { createStore, combineReducers} from "redux";

import characterSet from './reducers/charset';

const rootReducer = combineReducers({
    characterSet: characterSet,    
  });

  export const store = createStore(rootReducer)