// this is just one of the reducers

import { GET_TEST_DATA, ADD_TEST_DATA} from '../actions/constants' 
const initailState = {
    testData : []
 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){

    console.log('action :', action);
    switch(action.type){
        case GET_TEST_DATA:
        return {
            ...state,
            testData : action.payload,
        }
        case ADD_TEST_DATA:
        return {
            ...state,
            testData : [action.payload , ...state.testData],
        }
        default : 
            return state
    }
 }
