import React from 'react'
import NavBarAdmin from '../../components/NavBarAdmin'

import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';

function Inquiry() {

    return (

        <>
            <NavBarAdmin />

            <div className='content1' style={{ marginTop: '2.9rem' }}>
           
                <div className="inquiry">

                    <div className='allChats'>
                        <div className="search">

                       
                        <span className="p-input-icon-left" style={{ width: '100%', position: 'absolute', margin: '1em 1.3em 1em' }}>
                            <i className="pi pi-search" />
                            <InputText className="p-input-icon-left" placeholder="Search" />
                        </span>
                         </div>


                        <table style={{ width: '100%' }}>
                            <tr>
                                <td>
                                 <div className="user">
                                    <div className="userpfp3" />
                                        <div className="userinfo">
                                            <div className="username">
                                                <h1>Ahmad Ambahandullah</h1>
                                            </div>
                                            <div className="userwords">
                                                <h3>You: hello wassup my friend!</h3>
                                            </div>
                                        </div>
                                 </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                 <div className="user">
                                    <div className="userpfp3" />
                                        <div className="userinfo">
                                            <div className="username">
                                                <h1>Ahmad Ambahandullah</h1>
                                            </div>
                                            <div className="userwords">
                                                <h3>You: hello wassup my friend!</h3>
                                            </div>
                                        </div>
                                 </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                 <div className="user">
                                    <div className="userpfp3" />
                                        <div className="userinfo">
                                            <div className="username">
                                                <h1>Ahmad Ambahandullah</h1>
                                            </div>
                                            <div className="userwords">
                                                <h3>You: hello wassup my friend!</h3>
                                            </div>
                                        </div>
                                 </div>
                                </td>
                            </tr>
                            
                            
                        </table>


                    </div>

                    <div className='chatBox'>



                        <div className='chatHistory' >
                           

                            <div className="chatname">
                                <div className="contactpfp" />
                                <h1>
                                   Ahmad Ambahandullah
                                </h1> 
                                
                            </div>
                            
                            <div className="chatcontent">
                                    <div className="userchat">
                                        <div className="userpfp"/>
                                        <div className="userp">
                                            <p>Hello magandang umaga po I just wan to inquire
                                            about po pala sa mga prices niyp po and sa mga servicesm
                                            do you take po ba big bags and blankets po ty!!
                                        </p>
                                        </div>
                                        
                                    </div>
                                    <div className="contactchat">
                                        <div className="contactpfp2" />
                                        <div className="chatp">
                                             <p>
                                            Hello! Welcome to VSP LAUNDRY SHOP INQUIRY!
                                            Is there anything that you would like assistance with? 
                                            Fire the questions right away!
                                        </p>
                                        </div>
                                       
                                    
                                    </div>
                                </div>

                        </div>

                        <div className='inputs'>
                            <textarea  name="" id="" cols="30" rows="10"></textarea>
                            <Button  label='Send' />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Inquiry