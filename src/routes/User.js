import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

import MainLayout from 'layout/MainLayout';

// render - login
const Userpages = Loadable(lazy(() => import('pages/authentication/UserPage')));
// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'Userpages',
            element: <Userpages />
        }
    ]
};

export default LoginRoutes;
