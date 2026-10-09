import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    let res = fetch("https://zerodha-y08c.onrender.com/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username:nameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
      })
    })
    .then((res)=>{
      if(res.status === 201){
        navigate("/login")
      }
    })
    

  }
  return (
    <div className="container">
      <h2 className=' text-center mt-3'>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="email">Email</label>
          <input
          className="form-control mb-3"
          id='email'
            type="email"
            name="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="username">Username</label>
          <input
          className="form-control mb-3"
           id='username'
            type="text"
            name="username"
            placeholder="Enter your username"
            ref={nameRef}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password</label>
          <input
           className="form-control"
            id='password'
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={passwordRef}
          />
        </div>
        <button className='btn btn-primary mt-4' type="submit">Submit</button>
      </form>
      <div className='mt-2 mb-3'>
        Already have an account? <Link to={"/login"}>Login</Link>
      </div>
      
    </div>
    
  );
};

export default Signup
