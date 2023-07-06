import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import rootReducer, { RootState } from './rootReducer'
import { rootSaga } from './rootSaga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const sagaMiddleware: SagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store: Store<RootState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
