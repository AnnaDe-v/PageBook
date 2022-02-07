import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile';
import Messages from '../pages/messages/Messages';
import Friends from '../pages/friends/Friends';
import Auth from '../pages/auth/Auth';
import Conversation from '../pages/messages/Conversation';


export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path: '/profile/:id',
        exact: false,
        component: Profile,
        auth: true,
    },
    {
        path: '/messages',
        exact: true,
        component: Messages,
        auth: true,
    },
    {
        path: '/message/:id',
        exact: false,
        component: Conversation,
        auth: true,
    },
    {
        path: '/fiends/:id',
        exact: false,
        component: Friends,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        component: Auth,
        auth: false,
    },
]
