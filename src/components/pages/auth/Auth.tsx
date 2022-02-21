import {Alert, Button, ButtonGroup, Grid, TextField} from '@mui/material';
import React, {FC, SyntheticEvent, useEffect, useState} from 'react';
import {UserLoginType} from "../../../types";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../../providers/useAuth';
import {setLoadingStatusAC} from "../../layout/layout-reducer";

const Auth = () => {
    const { ga, user } = useAuth()

    const [isRegForm, setIsRegForm] = useState(true)
    const [userData, setUserData] = useState<UserLoginType>({
        email: '',
        password: '',
        name: '',
    } as UserLoginType)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isRegForm) {
            setLoadingStatusAC(true)
            try {
                const res = await createUserWithEmailAndPassword(
                    ga,
                    userData.email,
                    userData.password
                )

                await updateProfile(res.user, {
                    displayName: userData.name,
                })
            } catch (error: any) {
                error.message && setError(error.message)
                setLoadingStatusAC(false)
            }
        } else {
            try {
                await signInWithEmailAndPassword(ga, userData.email, userData.password)
            } catch (error: any) {
                error.message && setError(error.message)
            }
        }

        setUserData({
            email: '',
            password: '',
            name: '',
        })
    }



    useEffect(() => {
        if (user) navigate('/')
        // eslint-disable-next-line
    }, [user])


    return (

            <Grid display='flex' justifyContent='center' alignItems='center'>
                <form onSubmit={handleLogin}>
                    <TextField
                        label='Name'
                        variant='outlined'
                        value={userData.name}
                        onChange={e => setUserData({ ...userData, name: e.target.value })}
                        sx={{ display: 'block', marginBottom: 3 }}
                    />

                    <TextField
                        type='email'
                        label='Email'
                        variant='outlined'
                        value={userData.email}
                        onChange={e => setUserData({ ...userData, email: e.target.value })}
                        sx={{ display: 'block', marginBottom: 3 }}
                        required
                    />
                    <TextField
                        type='password'
                        label='Password'
                        variant='outlined'
                        value={userData.password}
                        onChange={e =>
                            setUserData({ ...userData, password: e.target.value })
                        }
                        sx={{ display: 'block', marginBottom: 3 }}
                        required
                    />
                    <ButtonGroup variant='outlined'>
                        <Button type='submit' onClick={() => setIsRegForm(false)}>
                            Auth
                        </Button>
                        <Button type='submit' onClick={() => setIsRegForm(true)}>
                            Register
                        </Button>
                    </ButtonGroup>
                </form>
            </Grid>
    )
}



export default Auth;