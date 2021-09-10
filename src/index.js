import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { Captured } from './components/Captured';

ReactDOM.render(
  <React.StrictMode>
    <Captured />
  </React.StrictMode>,
  document.getElementById('root')
);


