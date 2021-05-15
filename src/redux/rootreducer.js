import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import allReducers from './combinereducer';
import {rootSaga} from '../sagas/rootsaga';
//import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, {}, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga)

export default store;