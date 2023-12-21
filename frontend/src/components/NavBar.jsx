import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useState, useEffect } from 'react';

import { useTranslation } from "react-i18next";
import { ToggleButton } from 'primereact/togglebutton';


// ... (your imports)

function NavBar() {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleHomeClick = () => navigate('/');
    const handleServiceClick = () => navigate('/Services');
    const handleLoginClick = () => navigate('/Login');
    const [t, i18n] = useTranslation('common');
    
    useEffect(() => {

        if (checked == true){
            i18n.changeLanguage('tg')}
        
    });

    const items = [
        {
            label: (
                <ToggleButton
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                    onLabel="Tagalog" // Change this to your desired text for the ON state
                    offLabel="English" // Change this to your desired text for the OFF state
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