import React, { FC } from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import {Grid} from "@mui/material";
import {useAuth} from "../providers/useAuth";


const Layout:FC = ({children}) => {
    const {user} = useAuth()

    return (
        <>
            <Header/>
            <Grid container spacing={2} marginX={0} marginTop={2} boxSizing={'border-box'}>
                {user && (
                    <Grid item md={2}>
                        <Sidebar/>
                    </Grid>
                )}

                <Grid item md={user ? 9 : 12} >
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;



