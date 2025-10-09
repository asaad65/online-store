"use client";
import React, { useState } from 'react';
import '../component_modules/Login.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import AlertBox from './AlertBox';
const NewAccount = () => {
    const router = useRouter();
       const [showAlert, setShowAlert] = useState(false)
  const selectMood = useSelector(state => state.Mood.value)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  
 const handleCreateAccount = () => {
  const { fullName, email, password } = formData;

  if (!fullName || !email || !password) {
    setShowAlert(true)
    return;
  }

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      setShowAlert(true)
    return;
  }

  if (password.length < 8) {
     setShowAlert(true)
    return;
  }

 

  localStorage.setItem('NewAccount', JSON.stringify(formData));
     router.push("/");
};
  return (
    <div style={{ height: '79vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background:`${selectMood !== 'dark'?'#ffffffff':'#000'}` }}>
      <div className="login-container">
        <h2>  Create a new account 📝</h2>
        <form>
          <label htmlFor="fullName">full name</label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            placeholder="full name"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />

          <label htmlFor="email">e-mail</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder="example@email.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            placeholder="••••••••"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <button className='btn' type="button" onClick={handleCreateAccount}>Create an account</button>
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
  );
};

export default NewAccount;