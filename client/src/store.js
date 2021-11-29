import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { getAllProductsReducer, getProductByIdReducer } from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import {registerNewUserReducer, loginReducer} from './reducers/userReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const finalReducer = combineReducers({

    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerNewUserReducer:registerNewUserReducer,
    loginReducer: loginReducer

})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
    cartReducer: { cartItems: cartItems }
}



const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
