import React, { FC } from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import {Button, Grid, LinearProgress} from "@mui/material";
import {useAuth} from "../providers/useAuth";
import {setLoadingStatusAC} from './layout-reducer';
import {AppRootStateType} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";


const Layout:FC = ({children}) => {
    const dispatch = useDispatch()
    const {user} = useAuth()
    const isLoading = useSelector<AppRootStateType, boolean>((state) => state.layout.isLoading);

    const isLoadindStart = () => {
        dispatch(setLoadingStatusAC(true))
    }
    const isLoadindStop = () => {
        dispatch(setLoadingStatusAC(false))
    }

    return (
        <>
            <Header/>
            <Button variant='outlined' onClick={isLoadindStart}>Loading</Button>
            <Button variant='outlined' onClick={isLoadindStop}>Stop</Button>
            {isLoading === true && <LinearProgress/>}
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



