import { combineReducers } from 'redux'
import reducer from './auth/reducer'

const rootReducer = combineReducers({
  auth: reducer,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
