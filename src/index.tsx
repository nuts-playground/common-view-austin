import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './root';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const client = new QueryClient();
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={client}>
                <RouterProvider router={router}></RouterProvider>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);
