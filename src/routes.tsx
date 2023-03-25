import React from 'react';

const HomeComponent = React.lazy(() => import('./components/Home'));

const routes = [
    {
        path: '/',
        component: <HomeComponent />,
    },
];

export default routes;