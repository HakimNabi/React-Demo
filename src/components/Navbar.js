import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiMenuFoldLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButon = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButon();
    }, []);
    window.addEventListener('resize', showButon);



    return (
        <>
            <nav className='navbar'>

                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>TRVL</Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <RiMenuFoldLine /> : <AiOutlineMenu />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-Item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >HOME </Link>
                        </li>
                        <li className='nav-Item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>SERVICES </Link>
                        </li>
                        <li className='nav-Item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>PRODUCTS </Link>
                        </li>
                        <li className='nav-Item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar