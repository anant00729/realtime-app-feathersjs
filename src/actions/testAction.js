import { GET_TEST_DATA, ADD_TEST_DATA } from './constants'
import axios from 'axios'
import { app } from '../store';



export const getTestData = () => async dispatch => {
    const data = await app.service('ideas').find();

    console.log('data :', data);
    const action = {
        type : GET_TEST_DATA,
        payload : data
    }
    dispatch(action)
}



export const addTestData = (d) => async dispatch => {
    app.service('ideas').create({
        text: d.text,
        tech: d.tech,
        viewer: d.author
      });


    
    // const action = {
    //     type : ADD_TEST_DATA,
    //     payload : data
    // }
    // dispatch(action)
}


export const getSingleTestData = (d) => dispatch => {
    const action = {
        type : ADD_TEST_DATA,
        payload : d
    }
    dispatch(action)
}



