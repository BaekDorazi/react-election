import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import firebase from "./util/firebase";

import './styles/app.scss';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
