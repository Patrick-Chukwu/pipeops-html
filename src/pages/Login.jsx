import React, { useState } from 'react'
import hospitallogo from '../assets/hospitallogo.svg'
import loginpattern from '../assets/login-pattern.webp'
import loginpattern2 from '../assets/login-pattern2.webp'

import lady from '../assets/lady.webp'
import axios from 'axios'

import PasswordInput from '../components/PasswordInput'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://caretrackplus-001-site1.ktempurl.com/api/Authentication/login', {
        userId,
        password,
      });

      console.log('API Response:', response.data); // Log the response to see its structure

      // Assuming the response structure has a success property and token on successful login
      if (response && response.data.success) {
        console.log('Login successful', response.data);
        // Handle successful login (e.g., store tokens, redirect, etc.)
        // For example:
        // localStorage.setItem('token', response.data.token);
      } else {
        console.log('Invalid user Id or Password')
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='sm:max-h-full  mt-32 mb-0 flex flex-col sm:flex-row'>
      <Navbar/>
  
    
      <div className="sm:w-1/2 flex flex-col p-8 pt-2 gap-4 items-center justify-center">
        
       

    <div className="flex flex-col justify-center items-center w-[100%] min-w-[350px] p-4 text-sm sm:mt-2">
    <div className="flex flex-col gap-8 items-center justify-center">
      <img src={hospitallogo} alt="hospital logo" />
      {/* <form action="">
      <input type="text" placeholder='User ID' className='text-primary border border-grey rounded-lg pl-2 h-12 pr-[40px]'
/>
        <PasswordInput />
    <Button cta="Login" />
    <Link to="/">Forgot Password?</Link>
      </form> */}
      <form onSubmit={handleLogin} className='flex flex-col items-center'>
          <div className="mb-4">
            {/* <label htmlFor="userId" className="block text-gray-700 mb-2">User ID</label> */}
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder='User ID'
              className="w-80 px-2 border border-grey h-[50px] text-xl font-normal rounded-lg text-black hover:border-primary focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            {/* <label htmlFor="password" className="block text-gray-700 mb-2">Password</label> */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className="w-80 px-2 border border-grey h-[50px] text-xl font-normal rounded-lg text-black hover:border-primary focus:border-primary focus:outline-none"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-fit bg-secondary text-white py-1 px-8 rounded-lg hover:bg-primary text-2xl font-normal mt-4"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <Link to="/" className='text-black text-xl font-normal mt-1'>Forgot Password?</Link>

        </form>

      </div>
      {/* footer */}
      <div className=" flex justify-between items-center mt-[8dvh] sm:mt-[10dvh] md:mt-[12dvh] w-full">
      <button type='submit' className='text-greylight font-normal '>Change Theme</button>
    <Link to='/'>  <p className='font-light'>Powered by: <span className='text-primary font-bold'>CareTrack</span><span className='font-bold text-secondary'>+</span></p></Link>
      </div>
    </div>
      </div>
      <div className="max-h-[83dvh] relative w-1/2 bg-primary p-3 hidden sm:block">
        <img className='absolute top-0 right-0 z-10 max-h-[82dvh]' src={loginpattern} alt="Pattern" />
        <img className='absolute top-4 right-0 z-10 max-h-[82dvh]' src={loginpattern2} alt="Pattern" />
        <img className='relative top-0 sm:left-[8%] xl:left-[13%] 2xl:left-[20%] z-20 max-h-[81dvh]' src={lady} alt="Picture of a Nurse" />


      </div>
    </div>
  )
}

export default Login