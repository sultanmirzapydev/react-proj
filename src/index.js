import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/css/style.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/rootreducer';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
