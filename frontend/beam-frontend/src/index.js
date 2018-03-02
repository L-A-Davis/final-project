import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import companyBasicInfoReducer from './reducers/index'
import { loadState, saveState } from './localStorage'
import { FormattedNumber } from 'react-intl'
import { IntlProvider, intlReducer } from 'react-intl-redux'
import throttle from 'lodash/throttle'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistedState = loadState();

const reducer = combineReducers({
  ...companyBasicInfoReducer,
  intl: intlReducer,
})

const formats = {
    number: {
        USD: {
            // style: 'currency',
            currency: 'USD'
        }
    }
};


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

//
// const store = createStore(companyBasicInfoReducer, persistedState, composeWithDevTools(
// applyMiddleware(thunk))) ;
//
// ReactDOM.render((
//   <Provider store={store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </Provider>
// ), document.getElementById('root'));
// registerServiceWorker();

//
// ReactDOM.render((
//   <Provider store={store}>
//   <IntlProvider
//     locale='en'
//     formats={formats}
//     defaultFormats={formats}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </IntlProvider>
//   </Provider>
// ), document.getElementById('root'));
// registerServiceWorker();
