import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutesC from "./components/routes/RoutesC";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";

import * as firebase from "firebase/app";
import {AuthProvider} from "./components/providers/AuthProvider";
import {store} from "./app/store";


const firebaseConfig = {
    apiKey: "AIzaSyDW_iKaFTWCELa2OHoyGe_J1E-wQ_KUdww",
    authDomain: "page-book-8b450.firebaseapp.com",
    projectId: "page-book-8b450",
    storageBucket: "page-book-8b450.appspot.com",
    messagingSenderId: "860092718777",
    appId: "1:860092718777:web:4dbaf2c9be6aef7c7b0568"
};


firebase.initializeApp(firebaseConfig);



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <Router >
                    <RoutesC/>
                </Router >
            </AuthProvider>
        </Provider>
    </React.StrictMode>
,
document.getElementById('root')
);
