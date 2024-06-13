import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import upload from '../assets/upload.webp';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Hospitalname: '',
    email: '',
    password: '',
    PhoneNumber: '',
  });
  const [fileName, setFileName] = useState('Upload logo');
  const [file, setFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'failure', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    } else {
      setFileName('Upload logo');
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    if (file) {
      form.append('UploadHospitalLogo', file);
    }

    try {
      const response = await axios.post('https://caretrackplus-001-site1.ktempurl.com/api/Authentication/Onboarding', form);
      console.log('Success:', response.data);
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Axios error:', error);
      setSubmissionStatus('failure');
    }
  };

  const triggerFileInput = () => {
    document.getElementById('UploadHospitalLogo').click();
  };

  return (
    <div className='flex flex-col items-center mt-32'>
      <Navbar />
      {submissionStatus === null ? (
        <div>
          <h2 className="text-3xl w-[70%] text-center md:text-5xl font-medium md:w-[450px] md:text-center mx-auto">
            We are happy to have you <span className="text-primary font-semibold">Onboard</span>
          </h2>
          <form className='flex flex-col gap-2 p-4 justify-center items-center sm:items-start' onSubmit={handleSubmit}>
            <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
              <label className='hidden sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='Hospitalname'>
                Hospital Name
              </label>
              <input
                type="text"
                name="Hospitalname"
                id='Hospitalname'
                className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 h-[50px]'
                value={formData.Hospitalname}
                onChange={handleChange}
                placeholder="Hospital Name"
              />
            </div>
            <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
              <label className='hidden sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='email'>
                Email
              </label>
              <input
                type="email"
                name="email"
                id='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 h-[50px]'
              />
            </div>
            <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
              <label className='hidden sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='PhoneNumber'>
                Phone Number
              </label>
              <input
                type="tel"
                name="PhoneNumber"
                id='PhoneNumber'
                value={formData.PhoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className='sm:placeholder-transparent border border-grey rounded-lg focus:outline-none px-2 w-80 h-[50px]'
              />
            </div>
            <div className="flex gap-2 items-center justify-start wit-fit py-2 px-4">
              <label className='hidden sm:block h-[50px] bg-primary text-white px-4 text-lg py-2 rounded-xl w-60 md:min-w-[250px] md:text-xl font-normal' htmlFor='UploadHospitalLogo'>
                Upload Hospital Logo
              </label>
              <input
                type="file"
                name="UploadHospitalLogo"
                id='UploadHospitalLogo'
                accept=".png, .svg, .jpeg"
                onChange={handleFileChange}
                className='hidden'
              />
              <div
                className="font-normal flex items-center bg-white text-black h-[50px] text-xl px-4 py-2 gap-2 border border-grey rounded-lg cursor-pointer"
                onClick={triggerFileInput}
              >
                <img src={upload} alt="" />
                {fileName}
              </div>
            </div>
            <button className='md:mr-4 bg-secondary w-fit text-white px-8 font-normal text-2xl py-2 rounded-xl md:self-end' type="submit">
              Onboard
            </button>
          </form>
        </div>
      ) : submissionStatus === 'success' ? (
        <div className='flex flex-col items-center justify-center'>
          
          <p className="text-2xl text-black p-4 text-center">You have been <span className="text-3xl text-primary">successfully</span> onboarded. <br/> Kindly check your mail for your credentials</p>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <h2 className="text-3xl text-secondary">Onboarding Failed</h2>
          <p className="p-4 text-center text-xl text-black">There was an error processing your request. Please try again and ensure your details are correct.</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
