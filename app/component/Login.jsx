"use client"
import React, { useEffect, useState } from 'react';
import '../component_modules/Login.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import AlertBox from './AlertBox';

export default function Login(){
    const router = useRouter();
   const [showAlert, setShowAlert] = useState(false)
    const selectMood = useSelector(state => state.Mood.value)
    const [Login , SetLogin] = useState({userName:'', password : '' })
 const handelLogin = () => {
  const { userName, password } = Login;

  if (!userName || !password) {

    setShowAlert(true)
    return false;
  }

  if (password.length < 8) {
      setShowAlert(true)
    return false;
  }

  localStorage.setItem('Login',JSON.stringify(Login))
   router.push("/");
  return true
  
};
  return (
    <>
     <div style={{  height: '79vh', background:`${selectMood !== 'dark'?'#ffffffff':'#000'}`}}>
    <div style={{width:'100%',height:'100px'}}></div>
    <div className="login-container">
      <h2> Welcome 👋</h2>
      <form>
        <label htmlFor="username">user name</label>
        <input type="text" id="username" value={Login.userName} placeholder="user name" onChange={(e) => SetLogin({ ...Login, userName: e.target.value })}/>



        <label htmlFor="password"> password</label>
        <input type="password" id="password" value={Login.password} placeholder="••••••••" onChange={(e) => SetLogin({ ...Login, password: e.target.value })} />
        
          <button className='btn' type="button" onClick={handelLogin} >Login</button>
        
      </form>
    </div>
          {showAlert && (
      <AlertBox
        message="Please check the inputs" 
        onClose={() => {
          setShowAlert(false)
         
        }}
      />
    )}
    </div> 
    </>
  );
};
