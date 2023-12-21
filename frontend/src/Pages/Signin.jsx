import { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import NavBar from '../components/NavBar';

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfPassword] = useState('');
  const toast = useRef(null);

  let userData = { user: name, email: email, password: password };
  
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


    fetch('/api/reg', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data == null) {
          showToast('Email already in use.');
        } else {
          showToast('Account created successfully.');
        }
      });
      return;
  }

  function showToast(message) {
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  };

  return (
    <>

      <NavBar />

      <div className="content" style={{ marginTop: '2.9rem', minHeight: '120vh' }}>

        <Card className='credentials'>

          <h1>Create an account</h1>

          <div className="addPanel">
            <InputText id="username" placeholder='Name' aria-describedby="username-help"
            value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="addPanel">
            <InputText id="username" placeholder='Email Address' aria-describedby="username-help" 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
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
            <Button className='loginb' label="Sign up" onClick={handleRegister} />
            <Toast ref={toast} />
            <Button icon='pi pi-google' className='loginG' label="Sign up with Google" />
          </div>


          <div className="signin">
            <h3>
              Already have an account?  <a href='/Login'>Login</a>
            </h3>
          </div>

        </Card>

      </div>

    </>
  )
}
export default Signin
