import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import App from './App';
import reducers from './reducers';

// import './index.css';

const logger = createLogger({
  collapsed: true
})

const enhancer = applyMiddleware(logger, reduxThunk)
const store = createStore(reducers, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </ Provider>
  , document.getElementById('root'))
registerServiceWorker()
