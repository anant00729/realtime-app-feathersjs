import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import feathers from '@feathersjs/client';
import io from 'socket.io-client';



const initialState = {}

const middelware = [thunk]


//rootReducer : type : function 
//console.log('rootReducer() :', rootReducer());
// on calling rootReducer()
// export default function(state = initailState , action){
//     switch(action.type){
//         case GET_PROFILES:
//             return {
//                 ...state
//             }
//         default : 
//             return state
//     }
//  }


//const store = createStore(rootReducer, initialState , applyMiddleware(...middelware))


const host = 'http://192.168.1.33:3030'
const socket = io(host)
export const app = feathers()
                    .configure(feathers.socketio(socket))
                    








const store = createStore(rootReducer, initialState ,
compose(
    applyMiddleware(...middelware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


export default store
