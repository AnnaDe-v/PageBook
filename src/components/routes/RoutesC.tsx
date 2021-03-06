import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from "../layout/Layout";
import {routes} from './dataRoutes';
import {useAuth} from "../providers/useAuth";
import Auth from '../pages/auth/Auth';

const RoutesC: FC = () => {
    const {user} = useAuth()



    return (
        <Routes>
            {routes.map(route => {
                return (
                    <>
                        <Route
                            path={route.path}
                            key={`route ${route.path}`}
                            element={
                                <Layout key={`route ${route.path}`}>
                                    {route.auth && !user ? <Auth key={`route ${route.path}`}/> : <route.component key={`route ${route.path}`}/>}
                                </Layout>
                            }
                        />
                    </>

                )
            })
            }
        </Routes>
    )
}

export default RoutesC;

