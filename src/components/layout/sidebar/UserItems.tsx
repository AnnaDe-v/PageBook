import React, {FC} from 'react';
import {Link, useNavigate,} from 'react-router-dom';
import {Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import {UserType} from "../../../types";


const users: UserType[] = [
    {
        _id: uuidv4(),
        avatar:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1843',
        name: 'Петр Лялин',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://img.etimg.com/thumb/width-640,height-480,imgsize-144736,resizemode-1,msid-69037337/small-biz/startups/newsbuzz/fraud-is-only-possible-if-user-grants-access-oldrich-mller-coo-anydesk/oldrich-muller.jpg',
        name: 'Иван Часов',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Максим Гудков',
        isInNetwork: false,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg',
        name: 'Мария Желева',
        isInNetwork: true,
    },
]



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