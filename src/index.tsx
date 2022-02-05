import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutesC from "./components/routes/RoutesC";
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
        <Router >
            <RoutesC/>
        </Router >
    </React.StrictMode>
,
document.getElementById('root')
);
