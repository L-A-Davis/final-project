import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import companyBasicInfoReducer from './reducers/index'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistedState = loadState();
const store = createStore(companyBasicInfoReducer, persistedState, composeWithDevTools(
applyMiddleware(thunk))) ;

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();

// const store = createStore(companyBasicInfoReducer, applyMiddleware(thunk),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//
// createStore(companyBasicInfoReducer, persistedState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
