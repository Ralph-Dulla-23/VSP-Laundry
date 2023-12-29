import React from 'react'
import { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';

function EditProgress({data}) {

    const [progress, setProgress] = useState('');
    const toast = useRef(null);

    function update (event) {
        event.preventDefault();

        if (progress === '') {
            showToast('warn', 'Warning','Please select a progress');
            return;
        }

        if(progress === data.Progress){
            showToast('warn', 'Warning', 'Already in the same progress');
            return;
        }

        let jobData = {ID: data.ID, Progress: progress };

        fetch('/api/updateOrder', {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jobData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data){
                    showToast('success', 'Order Updated',"Update progress of the order")
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
                    <RadioButton inputId="Progress1" name="order" value="Claimed" 
                    onChange={(e) => setProgress(e.value)} checked={progress === 'Claimed'} />
                    <label htmlFor="Progress1" >Claimed</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="Progress2" name="order" value="Ready" 
                    onChange={(e) => setProgress(e.value)} checked={progress === 'Ready'} />
                    <label htmlFor="Progress2" >Ready</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="Progress3" name="order" value="Drying" 
                    onChange={(e) => setProgress(e.value)} checked={progress === 'Drying'} />
                    <label htmlFor="Progress3" >Drying</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="Progress4" name="order" value="Washing" 
                    onChange={(e) => setProgress(e.value)} checked={progress === 'Washing'} />
                    <label htmlFor="Progress4" >Washing</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="Progress5" name="order" value="Idle" 
                    onChange={(e) => setProgress(e.value)} checked={progress === 'Idle'} />
                    <label htmlFor="Progress5" >Idle</label>
                </div>
                <div className="flex align-items-center" style={{ marginBottom:'12px'}}>
                    <RadioButton inputId="Progress6" name="order" value="Lost" 
                    onChange={(e) => setProgress(e.value)} checked={progress === 'Lost'} />
                    <label htmlFor="Progress6" >Lost</label>
                </div>
                <div >
                <Button label="Edit Progress" onClick={update} />
                <Toast ref={toast} />
            </div>
            </div>
            <Toast ref={toast} />
        </>
    )
}

export default EditProgress