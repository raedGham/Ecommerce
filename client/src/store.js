import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { getAllProductsReducer, getProductByIdReducer } from './reducers/productReducer';
import addToCartReducer from './reducers/cartReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const finalReducer = combineReducers({

    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    addToCartReducer: addToCartReducer

})

const store = createStore(finalReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
