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
        <div className='flex justify-between  shadow-lg'>
            <div className='logo'>
                <img 
                    className="w-20" 
                    src={LOGO_URL}
                />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-1">
                        Online Status: {onlineStatus && 'Online' || 'offline'}
                    </li>
                    <li className="px-1">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-1">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="px-1">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className="px-1">
                        <Link to='/groceries'>Groceries</Link>
                    </li>
                    <li className="px-1">Cart</li>
                    <button className="login" onClick={onButtonClickHandler}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;