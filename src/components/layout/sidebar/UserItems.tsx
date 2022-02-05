import React, {FC} from 'react';
import {Link, useNavigate,} from 'react-router-dom';
import {Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {users} from './dataUsers'




const UserItems:FC = () => {
    const navigate = useNavigate()

    return (
        <Card sx={{padding: 2, backgroundColor: '#F1F7FA', border: 'none', borderRadius: 3,}}>
            {
                users.map(user => (
            <Link to={`/profile/${user._id}`}
                  key={user._id}
                  style={{display: "flex", alignItems: "center", textDecoration: "none", marginBottom: 12}}
            >
                <Box sx={{position: 'relative', marginRight: 2, width: 50, height: 50, overflow: 'hidden'}}>
                    <Avatar src={user.avatar}
                         alt=''
                         sx={{width:48, height: 48, borderRadius: '50%',}}
                    />
                    {user.isInNetwork &&
                        <Box sx={{
                            backgroundColor: 'green',
                            width: 10,
                            height: 10,
                            position: 'absolute',
                            bottom: 2,
                            left: 2,
                            borderRadius: '50%',
                            border: '1px solid white',
                            zIndex: 10
                        }}/>
                    }
                </Box>
                <span style={{ fontSize: 14}}>{user.name}</span>
            </Link>
                ) ) }
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/messages')}>
                        <ListItemIcon sx={{minWidth: 36 }}>
                            {/*<QuestionAnswer />*/}
                        </ListItemIcon>
                        <ListItemText primary='Сообщения' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Card>
    );
};

export default UserItems;