import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile';
import Messages from '../messages/Messages';
import Friends from '../pages/friends/Friends';
import Auth from '../pages/auth/Auth';
import Conversation from '../messages/Conversation';


export const routes = [
    {
        path: '/Pagebook',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path: '/Pagebook/profile',
        exact: false,
        component: Profile,
        auth: true,
    },
    {
        path: '/Pagebook/messages',
        exact: true,
        component: Messages,
        auth: true,
    },
    {
        path: '/Pagebook/message/:id',
        exact: false,
        component: Conversation,
        auth: true,
    },
    {
        path: '/Pagebook/fiends',
        exact: false,
        component: Friends,
        auth: true,
    },
    {
        path: '/Pagebook/auth',
        exact: true,
        component: Auth,
        auth: false,
    },
]
