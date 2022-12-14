import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - utilities
const ImportP = Loadable(lazy(() => import('pages/components-overview/ImportProduct')));
const ExportP = Loadable(lazy(() => import('pages/components-overview/ExportProduct')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'ExportProduct',
            element: <ExportP />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'Importproduct',
            element: <ImportP />
        }
    ]
};

export default MainRoutes;
