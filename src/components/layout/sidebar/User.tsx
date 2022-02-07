import React, {FC} from 'react';
import {Avatar, Button, Card, Chip} from "@mui/material";
import {useAuth} from "../../providers/useAuth";
import {signOut} from 'firebase/auth'

const User:FC = () => {
    const {user, ga} = useAuth()

    return (
            <Card sx={{padding: 2, backgroundColor: '#F1F7FA', border: 'none', borderRadius: 3,}}>
                <Chip avatar={<Avatar alt='' src={user?.avatar}/>}
                        label={user?.name || 'Гость'}
                      variant='outlined'
                />
                <Button variant='outlined' onClick={() => signOut(ga)}>
                    Выйти
                </Button>
            </Card>
    );
};

export default User;