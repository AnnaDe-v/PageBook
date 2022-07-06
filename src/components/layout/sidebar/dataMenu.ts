import * as Icons from '@mui/icons-material'
import {MenuItemType} from "../../../types";

export const menu: MenuItemType[] = [
    {
        title: 'Моя страница',
        link: '/Pagebook/profile',
        icon: Icons.Home
    },
    {
        title: 'Друзья',
        link: '/Pagebook/friends',
        icon: Icons.People
    },
    {
        title: 'Новости',
        link: '/Pagebook/news',
        icon: Icons.Article
    },
]