import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'

const RegistrationForm = () => {
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
      <h2 className="text-3xl w-[70%] text-center md:text-5xl font-medium md:w-[450px] md:text-center mx-auto">We are happy to
have you <span className="text-primary font-semibold">Onboard</span></h2>
<form className='flex flex-col gap-5 p-4' onSubmit={handleSubmit}>

  {/* first */}
  <div className="flex gap-4 items-center justify-center wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='Hospitalname'>Hospital Name</label>
  <input
        type="text"
        name="Hospitalname"
        id='Hospitalname'
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-60 md:max-w-60 h-[50px]'
        value={formData.Hospitalname}
        onChange={handleChange}
        placeholder="Hospital Name"
      />
  </div>
  {/* second */}
  <div className="flex gap-4 items-center justify-center wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='email'>Email</label>
  <input
        type="email"
        name="email"
        id='email'
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-60 md:max-w-60 h-[50px]'
      />
  </div>
  {/* third */}

  <div className="flex gap-4 items-center justify-center wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='PhoneNumber'>Phone Number</label>
  <input
        type="tel"
        name="PhoneNumber"
        id='PhoneNumber'
        value={formData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-60 md:max-w-60 h-[50px]'
      />
  </div>
{/* fourth */}
<div className="flex gap-4 items-center justify-center wit-fit py-2 px-4">
  <label className='hidden  sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='UploadHospitalLogo'>Upload Hospital Logo</label>
  <input
        type="file"
        name="UploadHospitalLogo"
        id='UploadHospitalLogo'
        value={formData.UploadHospitalLogo}
        onChange={handleChange}
        placeholder="Upload Hospital Logo"
        className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-60 md:max-w-60 h-[50px]'
      />
  </div>
    
        <button className='ml-6 bg-secondary w-fit text-white px-8 font-normal text-2xl py-2 self-center rounded-xl md:self-end' type="submit">Onboard</button>
    </form>    </div>
      
    </div>
  );
};

export default RegistrationForm;
