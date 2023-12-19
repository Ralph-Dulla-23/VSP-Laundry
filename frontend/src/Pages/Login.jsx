import NavBar from '../components/NavBar';
import { useState, useRef } from 'react'; // Add useRef import
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

function Login() {

  const toast = useRef(null);

  const navigate = useNavigate();
  const handleLoginToDashboard = () => navigate('/Dashboard');
  const handleBack = () => navigate('/');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const show = () => {
    toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }; // Add missing closing brace here

  function handleLogin(event) {
    event.preventDefault();
    let userData = { user: username, password: password };
    fetch('/api/auth', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Test(data.login, data.usertype);
      });

    console.log('clicked login');
  }

  function Test(login, usertype) {
    if (login === true) {
      
      if(usertype = "Admin"){ //dont remove this pls
        handleLoginToDashboard();
      }else {
        handleBack();
      }
      return;

    } else {
      // Show toast for incorrect login
      showIncorrectLoginToast();
    }
  }
  
  function showIncorrectLoginToast() {
    console.log('Showing incorrect login toast'); // Add this line
    toast.current.show({
      severity: 'error',
      summary: 'Login Failed',
      detail: 'Invalid username or password. Please try again.',
    });
  }

  return (
    <>
      <NavBar />
      <div className="content" id="cardcredentials">
        <Card className="credentials">
          <div id="testing">
            <h1 id="test">Login</h1>
          </div>
          <div className="addPanel">
            <InputText
              id="username"
              placeholder="Email Address"
              aria-describedby="username-help"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="passPanel">
            <Password
              inputStyle={{ width: '100%' }}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              toggleMask
            />
          </div>
          <div className="loginButtons">
            <Button className="loginb" label="Login" id="loginB" onClick={handleLogin} />
            <Toast ref={toast} />
            <Button icon="pi pi-google" className="loginG" label="Login with Google" />
          </div>
          <div className="signin">
            <h3>
              Dont have an account? <a href="/Signin">Signin</a>
            </h3>
          </div>
        </Card>
        <script type="module" src="index.js"></script>
      </div>
    </>
  );
}

export default Login;
