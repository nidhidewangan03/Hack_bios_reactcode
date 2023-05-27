import React, {useState} from 'react';
import "./LoginP.css"
import { redirect } from 'react-router-dom';
const LoginP=()=>{
    const[Username, setUsername]=useState("");
    const[Password, setPassword]=useState("");
    function handleSubmit(event){
      event.preventDefault();
      //post
      //correct redirect ,if not alert 
      //POST check
      //response error == 
      // if(error == true){
        
      // alert()
      // }
      // else{
      //   redirect('/home')
      // }
    }
    return(
      <div className='top'>
        
        Login
        
        <div className="cover" >
        
        
        <form onSubmit={handleSubmit}>
        <label>
        Username
        </label>
        <br></br>
        <input type="text" placeholder="Enter Username" className='user' autoComplete='off' value={Username}
        onChange={e=>setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <label>
        Password
        </label>
        <br></br>
        <input type="text" placeholder="Enter Password" className='pswd' autoComplete='off' value={Password}
        onChange={e=>setPassword(e.target.value)}></input>
        <br></br>
        <div className='btn2'
      >
        <button className='btn'>Submit</button>
        </div>

        </form>
      </div>
    </div>
    )
    
}
export default LoginP
