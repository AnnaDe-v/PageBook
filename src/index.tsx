import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutesC from "./components/routes/RoutesC";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";
import * as firebase from "firebase/app";
import {AuthProvider} from "./components/providers/AuthProvider";
import {store} from "./app/store";


const { initializeAppCheck, ReCaptchaV3Provider, getToken } = require("firebase/app-check");

const firebaseConfig = {
    apiKey: "AIzaSyD-n8PkCeAqyT19faoKDc_gMOPyEJ5y7d8",
    authDomain: "pagebook2-97bf0.firebaseapp.com",
    projectId: "pagebook2-97bf0",
    storageBucket: "pagebook2-97bf0.appspot.com",
    messagingSenderId: "72999738",
    appId: "1:72999738:web:80bd24e85f8579c7312603",
    measurementId: "G-B6859SNMJY"
};


const app = firebase.initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Lf60r8gAAAAAMl69Ut5TjxoXcryaZUWm5zt2oVw'),
    isTokenAutoRefreshEnabled: true
});

// @ts-ignore
getToken(appCheck)
    .then(() => {
        console.log('success')
    })
    .catch( (error: { message: any; }) => {
        console.log(error.message)
    })


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
