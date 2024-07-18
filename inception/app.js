import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", { id: "heading" }, "Hello from React!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// React element is object
// When we render it to dom it become html element from react html
// JSX --> Javascript syntax for creating react element (html/xml like syntax)
// tranpilation of code done by babel which is kind of cabinet of parcel
// JSX(babel transpiles to) --> react element --> html dom element

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className="logo-img" src='https://tse4.mm.bing.net/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&pid=Api&P=0&h=220' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = () => {
    return (
        <div className='restaurant-card' style={styleCard}>
            <img 
                alt='res-logo' 
                className='res-logo' 
                src='https://b.zmtcdn.com/data/pictures/2/51232/e811eb8ee82e2c14447b04450a5e4334.jpg'
            />
            <h3>Meghna Food</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);




