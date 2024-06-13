import React, { useState } from 'react';
import upload from '../assets/upload.webp'

const CustomFileInput = () => {
  const [fileName, setFileName] = useState("Upload logo");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("Upload logo");
    }
  };

  return (
    <div className="flex items-center justify-center p-0">
      <label className="flex items-center cursor-pointer">
        <input 
          type="file" 
          id='UploadHospitalLogo'
          className="hidden" 
          onChange={handleFileChange} 
        />
        <div className=" font-normal flex items-center bg-white text-black text-xl px-4 py-2 gap-2 border border-grey rounded-lg">
            <img src={upload} alt="" />
  
          {fileName}
        </div>
      </label>
    </div>
  );
};

export default CustomFileInput;
