import * as Icons from '@mui/icons-material'
import {MenuItemType} from "../../../types";

export const menu: MenuItemType[] = [
    {
        title: 'Моя страница',
        link: '/profile',
        icon: Icons.Home
    },
    {
        title: 'Друзья',
        link: '/friends',
        icon: Icons.People
    },
    {
        title: 'Новости',
        link: '/news',
        icon: Icons.Article
    },
]