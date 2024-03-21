import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import { Home } from './routes/home';

import { Introduce } from './routes/introduce';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '', element: <Home /> },
            { path: 'introduce', element: <Introduce /> },
        ],
    },
]);
