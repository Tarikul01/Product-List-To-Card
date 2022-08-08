import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware,compose,createStore} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// create react-redux store 
const store=createStore(reducer,compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

