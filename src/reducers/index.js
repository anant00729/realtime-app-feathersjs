// this is going to be root reducers
import { combineReducers } from 'redux'
import testReducer from './testReducer' 




export default combineReducers({
    test : testReducer    
})