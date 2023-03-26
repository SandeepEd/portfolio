import React from 'react';

const HomeComponent = React.lazy(() => import('./components/Home'));
const ProjectsComponent = React.lazy(() => import('./components/Projects'));
const AboutComponent = React.lazy(() => import('./components/About'));

const routes = [
    {
        path: '/',
        component: <HomeComponent />,
    },
    {
        path: '/projects',
        component: <ProjectsComponent />,
    },
    {
        path: '/about',
        component: <AboutComponent />,
    },
];

export default routes;