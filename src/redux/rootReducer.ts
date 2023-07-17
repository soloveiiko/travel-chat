import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import profileReducer from './profile/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
