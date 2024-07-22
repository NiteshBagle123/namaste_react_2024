import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// const heading = React.createElement("h1", { id: "heading" }, "Hello from React!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const Groceries = lazy(() => import('./components/Groceries'));
const About = lazy(() => import('./components/About'));
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {   
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<p>Loading...</p>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/Groceries',
                element: <Suspense fallback={<p>Loading...</p>}><Groceries /></Suspense>
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);




