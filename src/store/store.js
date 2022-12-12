import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import todoReducer from './reducers/data';
import  combineReducers from './reducers/reducer';
import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

// import { createStore } from "redux";
// import todoReducer from './reducers/data';

// export default createStore(todoReducer);
