import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next";
import { ToggleButton } from 'primereact/togglebutton';

function NavBar() {

    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleHomeClick = () => navigate('/');
    const handleLoginClick = () => navigate('/Login');
    const [t, i18n] = useTranslation('common');
    
    const changeLang = () => {
        if (checked === true){
            i18n.changeLanguage('tg')}
        else {
            i18n.changeLanguage('en')
        }
    }

    useEffect(() => {
        changeLang()
    });

    const items = [
        {
            label: (
                <ToggleButton
                    checked={checked}
                    onChange={(e) => {setChecked(e.value); console.log(checked)}}
                    onLabel="Tagalog" 
                    offLabel="English"
                    className="w-8rem"
                />
            ),
        },
        {
            label: <div className='navtext' onClick={handleHomeClick}>HOME</div>,
            icon: 'pi pi-fw pi-home',
        },
        {
            label: <div className='navtext' onClick={handleLoginClick}>LOGIN</div>,
            icon: 'pi pi-fw pi-sign-in',
        }
    ];

    const start = <img src={logo} alt="logo" style={{ height: '2.5em', width: 'auto' }} />;

    return (
        <>
            <Menubar className="navbar" model={items} start={start} />
        </>
    )
}

export default NavBar;