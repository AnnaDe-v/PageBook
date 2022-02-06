import React, { FC } from 'react';
import Header from "./header/Header";
// import {Grid} from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import {Grid} from "@mui/material";


const Layout:FC = ({children}) => {
    return (
        <>
            <Header/>
            <Grid container spacing={2} marginX={0} marginTop={2} boxSizing={'border-box'}>

                <Grid item md={2}>
                    <Sidebar/>
                </Grid>
                <Grid item md={10} paddingRight={'16px'}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;



