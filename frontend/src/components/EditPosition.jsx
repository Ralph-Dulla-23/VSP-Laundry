import React from 'react'
import { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';

function EditPosition({data}) {

    const [position, setPosition] = useState('');
    const toast = useRef(null);

    function update (event) {
        event.preventDefault();

        if (position === '') {
            showToast('warn', 'Warning','Please select a position');
            return;
        }

        if(position === data.Position){
            showToast('warn', 'Warning', 'Already in the same position');
            return;
        }

        let userData = {name: data.name, Position: position };

        console.log(userData.Position);

        fetch('/api/updatePosition', {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data){
                    showToast('success', 'Staff Updated',"Update staff's position")
                }
            });
    }

    function showToast(sev, sum, message) {
        toast.current.show({ severity: sev, summary: sum, detail: message, life: 3000 });
    };

    return (
        
        <>
            <div className='flex flex-column' >
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="position1" name="pizza" value="Manager" 
                    onChange={(e) => setPosition(e.value)} checked={position === 'Manager'} />
                    <label htmlFor="position1" >Manager</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="position2" name="pizza" value="Customer Service" 
                    onChange={(e) => setPosition(e.value)} checked={position === 'Customer Service'} />
                    <label htmlFor="position2" >Customer Service</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="position3" name="pizza" value="Staff" 
                    onChange={(e) => setPosition(e.value)} checked={position === 'Staff'} />
                    <label htmlFor="position3" >Staff</label>
                </div>
                <div >
                <Button label="Edit Position" onClick={update} />
                <Toast ref={toast} />
            </div>
            </div>
            <Toast ref={toast} />
        </>
    )
}

export default EditPosition