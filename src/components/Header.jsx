// import React, { useContext } from 'react';
import React, { useState, useContext } from 'react';

// import React from 'react';
// import { Context } from '@context/AppContext';

import '@styles/Header.scss';
// import '../styles/Header.scss';
import menu from '@icons/menu.png';
import ModalMenu from '@components/ModalMenu'

import Menu from '@components/Menu';


function Header() {
	const [toggle, setToggle] = useState(false);


	const onClickButton = () => {
		setToggle(!toggle);
	}


    return (
        <nav className="header">

            <div className="header__list">
                <div className="header__menu" >
                    <div className="header__menu--logo" onClick={onClickButton}>
                        <img src={menu} alt/>
                    </div>
                    {/* <img src={menu}  alt=""/> */}

                    {/* <div className="header__menu--name">
                        <p>Sebastian Santivañez - Frontend Developer</p>
                    </div> */}

                </div>

                <div className="header__routes">
                    {/* <img src={logo} alt=""/> */}
                    <ul className="header__routes--list">
                    {/* <ul> */}
                        <a href="https://sebastiansantivanez.netlify.app/">Home</a>
                        <a href="/" >About me</a>
                        <a href="https://sebastiansantivanez-projects.netlify.app/" >Projects</a>
                    </ul>
                </div>
            </div>
            {/* {toggle && <Menu />}	{/*	//toogle se inicializa false y luego "&& Menu" para que se muestre Menu cuando el estado de toogle cambie*/ }  

            {!!toggle && (
                <ModalMenu>
                    <Menu />
                </ModalMenu>
            )}

        </nav>
    );
}

export default Header;