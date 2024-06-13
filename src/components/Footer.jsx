import React from 'react'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-black">
    <div className="flex justify-between items-center p-4 gap-8 w-[90%]">
     <div className="flex text-sm font-medium"> <p>Copyright © 2024 CareTrack+.</p>
      <p className='hidden md:block self-start'> All rights reserved.</p></div>
      <div className="flex justify-center items-center gap-4">
        <a href='https://web.facebook.com/profile.php?id=61560544266230' target='blank'><img src={ fb } alt="Facebook Icon" /></a>
        <a href='https://www.instagram.com/caretrackplus/' target='blank'><img src={ ig } alt="Instagram Icon" /></a>

      </div>
    </div>
    <p className='block text-sm font-medium sm:hidden pb-2'> All rights reserved.</p>
    </div>

  )
}

export default Footer