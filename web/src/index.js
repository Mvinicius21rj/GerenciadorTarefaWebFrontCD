import React from 'react';
import ReactDOM from 'react-dom';
import Home from './View/Home';
import Task from './View/Task'; 
import Rout from './routes/index';



ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

