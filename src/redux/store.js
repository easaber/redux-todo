import { createStore, applyMiddleware, compose } from 'redux'
import todoReducer from './todo/todoReducer'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoReducer, composeEnhancers(applyMiddleware(reduxThunk,logger)))

export default store