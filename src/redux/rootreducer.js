import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './combinereducer';
import {watchImages} from '../sagas/rootsaga';
//import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];


const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watchImages)

export default store;