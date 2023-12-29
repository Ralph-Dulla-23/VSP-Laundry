import React from 'react'
import { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function AddStaffForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfPassword] = useState('');
    const toast = useRef(null);

    function handleRegister(event) {
        event.preventDefault();

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            showToast('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            showToast('Passwords do not match.');
            return;
        }

        let userData = { user: name, email: email, password: password };

        fetch('/api/regStaff', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (Object.keys(data).length === 0) {
                    showToast('Email already in use.');
                } else {
                    showToast('Account created successfully.');
                }
            });
        setName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }

    function showToast(message) {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    };

    return (
        <>
            
            <div className="addPanel">
                <InputText id="username" placeholder='Name' aria-describedby="username-help"
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="addPanel">
                <InputText id="username" placeholder='Email Address' aria-describedby="username-help"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="passPanel">
                <Password inputStyle={{ width: "100%" }}
                    id="password" placeholder='Password'
                    value={password} onChange={(e) => setPassword(e.target.value)} feedback={false}
                    toggleMask />
            </div>

            <div className="passPanel">
                <Password inputStyle={{ width: "100%" }}
                    id="password" placeholder=' Confirmed Password'
                    value={confirmPassword} onChange={(e) => setConfPassword(e.target.value)} feedback={false}
                    toggleMask />
            </div>

            <div className="loginButtons">
                <Button className='loginb' label="Add Staff" onClick={handleRegister} />
                <Toast ref={toast} />
            </div>
        </>
    )
}

export default AddStaffForm