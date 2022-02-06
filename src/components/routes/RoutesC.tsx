import React, {FC} from 'react'
import {NavLink, Route, BrowserRouter as Router, HashRouter, Routes} from 'react-router-dom'
import Header from "../layout/header/Header";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import UserItems from "../layout/sidebar/UserItems";
import { routes } from './list';


const RoutesC: FC = () => {
    const isAuth = true

    return (
            <Routes>

                {routes.map(route => {
                    if(route.auth && !isAuth) {
                        return false
                    }


                return (

                <Route path="/"
                       key={`route ${route.path}`}
                       element={<Layout>
                    {route.auth && <route.component />}
                </Layout>}>
                </Route>



                )
            })
            }

            </Routes>
    )
}

export default RoutesC;

