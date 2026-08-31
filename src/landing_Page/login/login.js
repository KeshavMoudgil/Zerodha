import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }),
    });

    const data = await res.json();
    if (res.status === 200) {
     window.location.href = "http://localhost:3001";
    } 
  }

  return (
    <div className="container">
      <h1 className='text-center mt-3'>Log in</h1>
      
    <form onSubmit={handleSubmit} >
        <div>
          <label className='form-label' htmlFor="email" >Email</label>
          <input
           className='form-control'
            type="email"
            id="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label className='form-label' htmlFor="password" >Password</label>
          <input
          className='form-control'
            type="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <div>
          <button className='btn btn-primary mt-3 mb-4'
            type="submit"
          >
            LogIn
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
