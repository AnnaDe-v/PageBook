import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutesC from "./components/routes/RoutesC";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";
import * as firebase from "firebase/app";
import {AuthProvider} from "./components/providers/AuthProvider";
import {store} from "./app/store";

const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");







const firebaseConfig = {
    apiKey: "AIzaSyDW_iKaFTWCELa2OHoyGe_J1E-wQ_KUdww",
    authDomain: "page-book-8b450.firebaseapp.com",
    projectId: "page-book-8b450",
    storageBucket: "page-book-8b450.appspot.com",
    messagingSenderId: "860092718777",
    appId: "1:860092718777:web:4dbaf2c9be6aef7c7b0568"
};


const app = firebase.initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('93F50783-B5F5-4270-9A8B-37DC54E97313'),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
});




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
