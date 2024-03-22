import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import { Home } from './routes/home';

import { Introduce } from './routes/introduce';
import { Project } from './routes/project';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '', element: <Home /> },
            { path: 'introduce', element: <Introduce /> },
            { path: 'project', element: <Project /> },
        ],
    },
]);
