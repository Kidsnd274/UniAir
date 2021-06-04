import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import airconReducer from './reducers'

// const rootReducer = combineReducers({
//     airconReducer,
// });

const rootReducer = combineReducers(
    {airconReducer}
)

const enhancers = [composeWithDevTools, applyMiddleware(thunk)]

export const store = createStore(rootReducer, compose(...enhancers));