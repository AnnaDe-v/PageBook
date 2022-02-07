import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from "../layout/Layout";

import { routes } from './dataRoutes';
import {useAuth} from "../providers/useAuth";
import Auth from "../pages/auth/Auth";


const RoutesC: FC = () => {
    const {user} = useAuth()

    return (
            <Routes>

                {routes.map(route => {
                    if(route.auth && !user) {
                        return false
                    }


                return (

                <Route path={route.path}
                       key={`route ${route.path}`}
                       element={<Layout>
                                    {route.auth && !user ? <Auth/> : <route.component />}
                                </Layout>}>
                </Route>



                )
            })
            }

            </Routes>
    )
}

export default RoutesC;

