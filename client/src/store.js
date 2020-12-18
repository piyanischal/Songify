import {createStore, applyMiddleware} from 'redux';
//Necesssary imports for creating store for the application
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)));
export default store;