import React from 'react';
import ReactDOM from 'react-dom';
// begin::Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// end::Import bootstrap
import './styles/index.css';
// begin::Main
import App from './App';
// end::Main
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
