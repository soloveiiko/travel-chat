import { RootState } from '../rootReducer'
import { createSelector } from 'reselect'

const getAuthState = (state: RootState) => state.auth

export const getUserSelector = createSelector(getAuthState, (auth) => auth.data)
export const getUsernameSelector = createSelector(
  getAuthState,
  (auth) => auth.username
)
export const getIsAuthSelector = createSelector(
  getAuthState,
  (auth) => auth.isAuth
)
export const getLoadingSelector = createSelector(
  getAuthState,
  (auth) => auth.loading
)
export const getErrorSelector = createSelector(
  getAuthState,
  (auth) => auth.error
)
