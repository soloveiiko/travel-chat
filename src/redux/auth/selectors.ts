import { RootState } from '../rootReducer'
import { createSelector } from 'reselect'

const getAuthState = (state: RootState) => state.auth

export const getLoadingSelector = createSelector(
  getAuthState,
  (auth) => auth.loading
)

export const getUserSelector = createSelector(getAuthState, (auth) => auth.data)

export const getErrorSelector = createSelector(
  getAuthState,
  (auth) => auth.error
)

export const getIsAuthSelector = createSelector(
  getAuthState,
  (auth) => auth.isAuth
)
