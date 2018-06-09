import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-snapshot';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
//render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
