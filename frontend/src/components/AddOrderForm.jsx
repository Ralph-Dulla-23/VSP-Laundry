import React from 'react'
import { useState, useRef } from 'react';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function AddOrderForm() {

  const [ID, setID] = useState('');
  const [customer, setCustomer] = useState('');
  const [service, setService] = useState('');
  const [items, setItems] = useState({

  });
  const [dateRec, setDateRec] = useState(null);
  const [dateClaim, setDateClaim] = useState(null);

  const services = [
    'Basic Services', 'Rush Laundry', 'Dry Clean', 'Special Laundry'
  ];

  const toast = useRef(null);

  function handleRegister(event) {
    event.preventDefault();

    if (ID === '' || customer === '' || service === '' || dateRec === null || dateClaim === null) {
      showToast('Please fill in all fields.');
      return;
    }

    let userData = {
      ID: ID,
      Customer: customer,
      Service: service,
      DateReceived: dateRec,
      Datetoclaim: dateClaim
    };

    fetch('/api/addOrder', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((data) => {
        console.log(data);
        if (data) {
          showToast('Added new order.');
        } else {
          showToast('ID already in use.');
        }
      });
  }

  function showToast(message) {
    toast.current.show({ severity: 'info', summary: 'Notification', detail: message, life: 3000 });
  };

  return (
    <>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="addPanel">
          <InputText id="username" placeholder='ID' aria-describedby="username-help"
            value={ID} onChange={(e) => setID(e.target.value)} />
        </div>
        <div className="addPanel" style={{ color: '#383a4a' }}>
          <Dropdown id="username" value={service} onChange={(e) => setService(e.value)} options={services}
            placeholder="Select Service" />
        </div>
      </div>


      <div className="addPanel">
        <InputText id="username" placeholder='Customer' aria-describedby="username-help"
          value={customer} onChange={(e) => setCustomer(e.target.value)} />
      </div>



      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div className="addPanel">
          <Calendar id="username" value={dateRec} placeholder="Add Date Received" dateFormat="mm/dd/yy" onChange={(e) => setDateRec(e.value)} />
        </div>

        <div className="addPanel">
          <Calendar id="username" value={dateClaim} placeholder="Add Date To Claim" dateFormat="mm/dd/yy" onChange={(e) => setDateClaim(e.value)} />
        </div>
      </div>



      <div className="loginButtons">
        <Button className='loginb' label="Add Order" onClick={handleRegister} />
        <Toast ref={toast} />
      </div>
    </>
  )
}

export default AddOrderForm