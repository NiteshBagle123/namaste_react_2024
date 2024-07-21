import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
// const heading = React.createElement("h1", { id: "heading" }, "Hello from React!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <ContactUs />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);




