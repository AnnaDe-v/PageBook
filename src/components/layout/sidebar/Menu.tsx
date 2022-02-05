import React, {FC} from 'react';
import {Link, useNavigate,} from "react-router-dom";
import {Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {menu} from "./DataMenu";


const Menu: FC = () => {
    const navigate = useNavigate()

    return (
        <Card variant='outlined' sx={{padding: 2, backgroundColor: '#F1F7FA', border: 'none', borderRadius: 3, marginTop: 5, marginBottom: 10,}}>

            <List>
                {menu.map(item => (
                <ListItem key={item.link} disablePadding>
                    <ListItemButton onClick={() => navigate(item.link)}>
                        <ListItemIcon sx={{minWidth: 36}}>
                            <item.icon/>
                        </ListItemIcon >
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
                    ))}
            </List>
        </Card>
    )
};

export default Menu;