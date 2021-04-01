import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import App from './App';
import SubItemTable from './components/subItem-table'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SubItemTable />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
