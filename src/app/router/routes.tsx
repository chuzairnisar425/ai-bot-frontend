import { lazy } from 'react';
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Onboarding = lazy(() => import('../pages/Onboarding/Onboarding'));

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
    {
        path: '/user/onboarding',
        element: <Onboarding />,
        layout: 'blank',
    },
    ,
];

export { routes };
