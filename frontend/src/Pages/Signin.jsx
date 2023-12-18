
import { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import NavBar from '../components/NavBar';

function Signin() {

  const [value, setValue] = useState('');
  const [nameValue, setName] = useState('');
  const [passwordValue, setPassword] = useState('');

  return (
    <>

      <NavBar />

      <div className="content" style={{ marginTop: '2.9rem', minHeight: '120vh' }}>

        <Card className='credentials'>

          <h1>Create an account</h1>

          <div className="addPanel">
            <InputText id="username" placeholder='Name' aria-describedby="username-help" />
          </div>

          <div className="addPanel">
            <InputText id="username" placeholder='Email Address' aria-describedby="username-help" />
          </div>

          <div className="passPanel">
            <Password inputStyle={{ width: "100%" }}
              id="password" placeholder='Password'
              value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
              toggleMask />
          </div>

          <div className="passPanel">
            <Password inputStyle={{ width: "100%" }}
              id="password" placeholder=' Confirmed Password'
              value={value} onChange={(e) => setValue(e.target.value)} feedback={false}
              toggleMask />
          </div>

          <div className="loginButtons">
            <Button className='loginb' label="Sign up" />
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
