import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import { Router, Route, Redirect, hashHistory, withRouter } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker();
