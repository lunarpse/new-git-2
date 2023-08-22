import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import Counterreducer from './reducer/Counterreducer';
import { Provider } from 'react-redux';
import Reducer from './reducer/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reducers=combineReducers({
  counter:Counterreducer,
  reducer:Reducer
})
const store=createStore(reducers)


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

