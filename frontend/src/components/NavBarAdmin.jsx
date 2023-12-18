import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

function NavBarAdmin() {

    const navigate = useNavigate();
    const handleBack = () => navigate('/');
    const handleDashboardClick = () => navigate('/Dashboard');
    const handleInquiryClick = () => navigate('/Inquiry');
    const handleStaffClick = () => navigate('/Staff');

    const adminItems = [
        {
            label: <div className='navtext' onClick={handleDashboardClick}>DASHBOARD</div>,
            icon: 'pi pi-fw pi-home',
        },
        {
            label: <div className='navtext' onClick={handleInquiryClick}>INQUIRY</div>,
            icon: 'pi pi-fw pi-info-circle',
        },
        {
            label: <div className='navtext' onClick={handleStaffClick}>STAFF</div>,
            icon: 'pi pi-fw pi-question-circle',
        },
        {
            label: <div className='navtext'>LOGOUT</div>,
            icon: 'pi pi-fw pi-sign-in',
        }
    ];

    const start = <img src={logo} alt="logo" style={{ height: '2.5rem', width: 'auto', cursor: 'pointer' }} onClick={handleBack}/>;

    return (
        <>
            <Menubar className="navbar" model={adminItems} start={start} />
        </>
    )
}

export default NavBarAdmin