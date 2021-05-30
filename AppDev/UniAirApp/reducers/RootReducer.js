import {combineReducers} from "redux"
import SetUpReducer from './SetUpReducer'

const rootReducer = combineReducers(
  {setUp : SetUpReducer}
  
)

export default rootReducer;