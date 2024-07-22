import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [buttonName, setButtonName] = useState('login');
    const onlineStatus = useOnlineStatus();
    const onButtonClickHandler = () => {
        if(buttonName === 'login') {
            setButtonName('logout')
        } else {
            setButtonName('login')
        }
    }
    return (
        <div className='header'>
            <div className='logo'>
                <img 
                    className="logo-img" 
                    src={LOGO_URL}
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status: {onlineStatus && 'Online' || 'offline'}
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={onButtonClickHandler}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;