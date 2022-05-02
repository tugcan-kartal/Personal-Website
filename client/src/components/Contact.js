import React from 'react';
import {useState,useEffect} from 'react';
import Axios from 'axios';
import './Contact.css'
import Instagram from '@mui/icons-material/Instagram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Contact() {

    const [fullName,setFullName]=useState([]);
    const [eMail,setEmail]=useState([]);
    const [subject,setSubject]=useState([]);
    const [ınfos,setInfos]=useState([]);
    
    const addUser=(event)=>{
        Axios.post('http://localhost:8001/addUser',{fullName:fullName,eMail:eMail,subject:subject});
        event.preventDefault();
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/read').then((response)=>{
          setInfos(response.data);
        }).catch(()=>{
          console.log('ERR')
        });
      },[]);
    

  return(

      <div id='allofcontactfornavbar' className='allofcontact'>
        
        <div className='contacttext'>Contact</div>

        <div className='bothcontactpart'>

            <div className='allofform'>

                <form id='self-form'>
                    <div className='nameofform'>
                        Full Name
                        <input className='firstinput' type="text" id='name' onChange={(event)=>{setFullName(event.target.value)}} required/>
                    </div>
                    
                    <div className='mailofform'>
                        E-mail
                        <input className='secondinput' type="email" id='mail' onChange={(event)=>{setEmail(event.target.value)}} required/>
                    </div>

                    <div className='subjectofform'>
                        Subject
                        <input className='thirdinput' type="text" id='subject' onChange={(event)=>{setSubject(event.target.value)}} required/>
                    </div>

                    <div className='submitofform'>
                        <input className='fourthinput' type="submit" value='Submit' id='submit' onClick={addUser}/>
                    </div> 
                    
                </form>

            </div>

            <div className='alloficonboxes'>
                <div className='iconboxes'>
                    <a target='_blank' href='https://www.instagram.com/tugcan___kartal'><Instagram fontSize="large" /></a>
                </div>
                <div className='iconboxes'>
                    <a target='_blank' href='https://github.com/tugcan-kartal'><GitHub fontSize="large" /></a>
                    
                </div>
                <div className='iconboxes'>
                    <a target='_blank' href='https://www.linkedin.com/in/tugcan-kartal'> <LinkedIn fontSize="large" /></a>
                   
                </div>
            </div>

        </div>

      </div>
  )
}

export default Contact;
