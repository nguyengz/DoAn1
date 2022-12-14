// assets
import { LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //
const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined
        },
        {
            id: 'register1',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined
        },
        {
            id: 'User',
            title: 'User',
            type: 'item',
            url: '/Userpages',
            icon: icons.UserOutlined
        }
    ]
};

export default pages;
