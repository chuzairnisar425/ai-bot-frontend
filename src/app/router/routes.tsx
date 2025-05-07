import { lazy } from 'react';

const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
// const ForgetForm = lazy(() => import('../pages/ForgetPassword/ForgetForm'));

const routes = [
    {
        path: '/',
        element: <Login />,
        layout: 'blank',
    },
    // Login Page (Public)
    {
        path: '/auth/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/auth/register',
        element: <Register />,
        layout: 'blank',
    },
    // {
    //     path: '/auth/forgot-password',
    //     element: <ForgetForm />,
    //     layout: 'blank',
    // },
    ,
];

export { routes };
