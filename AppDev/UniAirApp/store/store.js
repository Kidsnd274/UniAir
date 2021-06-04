import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducers/RootReducer'

const oldStore = createStore(rootReducer, composeWithDevTools());

export default oldStore