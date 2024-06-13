import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import CustomFileInput from '../components/CustomFileInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    Hospitalname: '',
    email: '',
    password: '',
    UploadHospitalLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://caretrackplus-001-site1.ktempurl.com/api/Authentication/Onboarding', form);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  return (
    <div className='flex flex-col items-center mt-32'>
      <Navbar />


      <div>

      <h2 className="text-3xl px-8 text-center sm:text-5xl font-medium sm:font-bold text-primary">Feel free to Contact us</h2>
<form className='flex flex-col gap-2 p-4 justify-center items-center' onSubmit={handleSubmit}>

  {/* first */}
  <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='name'>Name</label>
  <input
        type="text"
        name="name"
        id='name'
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 h-[50px] focus:ring-2 focus:ring-primary focus:border-primary placeholder-grey'
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
  </div>
  {/* second */}
  <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='email'>Email</label>
  <input
        type="email"
        name="email"
        id='email'
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 h-[50px] focus:ring-2 focus:ring-primary focus:border-primary placeholder-grey'
      />
  </div>
  {/* third */}

  <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='PhoneNumber'>Phone Number</label>
  <input
        type="tel"
        name="PhoneNumber"
        id='PhoneNumber'
        value={formData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 h-[50px]  focus:ring-2 focus:ring-primary focus:border-primary placeholder-grey '
      />
  </div>
{/* fourth */}
    
<div className="flex gap-2 items-start justify-start wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='message'>Message</label>
  <textarea
        minLength="100"
        maxLength='500'
        name="message"
        id='message'
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 p-2 h-32  focus:ring-2 focus:ring-primary focus:border-primary placeholder-grey bg-white resize-none shadow-sm transition duration-200'
      />
      
  </div>
        <button className='ml-6 bg-secondary w-fit text-white px-8 font-normal text-2xl py-2 self-center rounded-xl md:self-start' type="submit">Submit</button>
    </form>    </div>
      
    </div>
  );
};

export default Contact;
