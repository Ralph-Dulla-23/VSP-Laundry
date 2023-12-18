import React from 'react'
import { Button } from 'primereact/button';

import { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

function MessageFab() {

  const [value, setValue] = useState('');

  return (
    <>

      <div className="is-sticky">

        <input type="checkbox" id="click" />

        <label for="click">
          <i className="pi pi-comment"></i>
          <i id='pis'className="pi pi-times"></i>
        </label>

        <div className="wrapper">

          <div className="head-text">
            Let's chat? - Online
          </div>

          <div className="chat-box">

            <div className="desc-text">
              Please fill out the form below to start chatting with the next available agent.
            </div>

            <form action="#">

              <div className="field textarea">
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} placeholder="Explain your queries.." required />              
              </div>

              <div className="field">
                <button type="submit">Start Chat</button>
              </div>

            </form>

          </div>
        
        </div>
      
      </div>
    
    </>
  )
}

export default MessageFab