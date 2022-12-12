import { combineReducers } from 'redux'
import todoReducer from './data'
import user from './user'

export default combineReducers({
    todoReducer,
    user

})