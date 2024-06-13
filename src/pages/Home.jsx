import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import pattern from '../assets/pattern.webp'
import loginpattern from '../assets/login-pattern.webp'
import loginpattern2 from '../assets/login-pattern2.webp'

import plus from '../assets/plus.webp'
import doctor from '../assets/doctor.webp'
import sarah from '../assets/sarah.webp'
import michael from '../assets/michael.webp'

import star from '../assets/star.webp'

import mockup from '../assets/mockup.webp'
import CountUp from '../components/CountUp'
import Button from '../components/Button'


const Home = () => {
  return (

    <div className="flex flex-col">
          <Navbar/>

      <section className="hero pb-[15dvh] flex flex-col bg-cover bg-primary text-white py-20 md:h-dvh mt-20" >
        <h2 className='p-2 sm:p-4 pb-3 text-2xl font-bold md:text-5xl md:w-4/5 mx-auto text-center'>Revolutionize Healthcare Operations
by integrating and optimizing key processes.</h2>
<p className='text-sm p-4 sm:px-8 sm:py-4 text-center font-light md:text-xl pt-0 md:w-4/5 mx-auto'>With a focus on patient-centric care, efficiency, and data-driven decision-making, CareTrack+ is a software solution designed to streamline and optimise healthcare operations, enhance patient care delivery, and improve overall efficiency within healthcare facilities.</p>
  <img className='absolute bottom-0 h-full -[-90dvh] md:bottom-[-80px] w-full z-20  hidden md:block' src={pattern} alt="Pattern Img" />
  <img className='absolute top-0 left--8 h-[-90dvh] md:bottom-[-80px] w-full z-20 md:hidden' src={loginpattern} alt="Pattern Img" />

  <img className='absolute top-20 z-10 hidden  md:block' src={plus} alt="Hospital plus image" />
  <img className='absolute top-4 h-full left-0 z-10 md:hidden' src={loginpattern2} alt="Hospital plus image" />
<div className="position z-20 mb-2 text-center sm:hidden">      <Link to='/onboard'>
      <Button cta="Get Started"  />

</Link>
</div>
      </section>
      <div className="mockup relative top-0 place-content-center">
  <img className='w-full mx-auto absolute top-[-16dvh] md:top-[-63dvh] z-20 md:max-w-7xl animate-oscillate' src={mockup} alt="Mockup" />
</div>
      <section className=" md:w-3/4 mx-auto flex gap-4 justify-between items-center relative mt-40 sm:mt-[25rem] flex-wrap px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <h2 className='text-black text-3xl md:text-5xl font-bold'><CountUp start={0} end={10} interval={30} /></h2>
          <p className='text-xl md:text-2xl text-black font-normal'>Active Hospitals</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className='text-black text-3xl md:text-5xl font-bold'><CountUp start={1950} end={2000} interval={30} /></h2>
          <p className='text-xl md:text-2xl text-black font-normal'>Active Patients</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className='text-black text-3xl md:text-5xl font-bold'><CountUp start={450} end={500} interval={30} /></h2>
          <p className='text-xl md:text-2xl text-black font-normal'>Active Doctors</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className='text-black text-3xl md:text-5xl font-bold'><CountUp start={750} end={800} interval={30} /></h2>
          <p className='text-xl md:text-2xl text-black font-normal'>Active Nurses</p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 p-4 mt-4">
      <Link className='mt-10' to='/onboard'>
      <Button cta="Get Started"  />

</Link>
      <div className="my-10 flex flex-col justify-center items-center">
      <h2 className='p-4 pb-4 text-2xl font-bold md:text-5xl md:w-4/5 mx-auto text-center text-primary'>Unlock The Full Spectrum Of Healthcare Management With Our All-In-One Solution</h2>
        <p className='text-sm p-8 text-black text-center font-light md:text-xl pt-0 md:w-4/5 mx-auto'>With CareTrack+, healthcare providers can efficiently manage patient appointments, electronic health records (EHR), prescriptions, and laboratory tests, ensuring accurate and timely documentation of patient information. The system also includes features for inventory management, staff scheduling, and financial reporting, empowering healthcare organisations to optimise resource allocation and financial performance.</p>
      </div>
      </section>
      <section className="flex flex-col gap-4 bg-[rgba(55,106,234,0.11)]">
      <div className="flex flex-col gap-4 items-center justify-center py-12">
        <p className='text-2xl font-light'>TESTIMONIALS</p>
        <h2 className='text-3xl p-2 px-4  md:text-5xl font-bold text-primary text-center'>Our Customer Success Stories</h2>
      </div>
      <div class="flex flex-col gap-8 md:flex-row w-[90%] mx-auto mt-0 mb-20">

{/* <!-- first_box --> */}
<div class="flex flex-col p-4 items-center justify-center text-black bg-white mt-20">
  <div class="relative top-0 mt-[-7rem] mb-5">
    <img class="rounded-[50%]" src={doctor} alt="Doctor"/>

  </div>
  <p class="text-sm font-light text-black text-center">It's easy with CareTrack+ to track the client's insulin reports and foster a collaborative environment among endocrinologists</p>
  <div class="flex flex-col gap-3 items-center justify-center">
    <h3 className='text-xl font-semibold text-primary'>Dr. Emma Johnson</h3>
    <img class="w-40" src={star} alt="star rating" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h4 className='text-sm font-medium'>Chief Medical Officer</h4>
    <p class="text-sm font-light">
    Velocare Hospital    </p>
  </div>
</div>
{/* <!-- second_box --> */}
<div class="flex flex-col p-4 items-center justify-center text-black bg-white  mt-20">
  <div class="relative top-0 mt-[-7rem] mb-5">
    <img class="rounded-[50%]" src={sarah} alt="Doctor"/>

  </div>
  <p class="text-sm font-light text-black text-center">Our hospital has been using CareTrack+ for the past year, and the difference it has made is remarkable. Scheduling and managing appointments has become so much easier, and our administrative staff finds the system very user-friendly.</p>
  <div class="flex flex-col gap-3 items-center justify-center">
    <h3 className='text-xl font-semibold text-primary'>Azuka Gift</h3>
    <img class="w-40" src={star} alt="star rating" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h4 className='text-sm font-medium'>Administrative Manager</h4>
    <p class="text-sm font-light">
    Alonge Medical Center
    </p>
  </div>
</div>
 {/* third box  */}
 <div class="flex flex-col p-4 items-center justify-center text-black bg-white mt-20">
  <div class="relative top-0 mt-[-7rem] mb-5">
    <img class="rounded-[50%]" src={michael} alt="Doctor"/>

  </div>
  <p class="text-sm font-light text-black text-center">As a small clinic, we were struggling with manual processes and inefficiencies. CareTrack+ has completely transformed the way we operate.</p>
  <div class="flex flex-col gap-3 items-center justify-center">
    <h3 className='text-xl font-semibold text-primary'>Dr. Adeniji Femi</h3>
    <img class="w-40" src={star} alt="star rating" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h4 className='text-sm font-medium'>Clinic Director</h4>
    <p class="text-sm font-light">
    Modupe Clinic    </p>
  </div>
</div>
</div>
      </section>
      <section className="bg-primary flex flex-col items-center justify-center gap-6 my-20 mb-10 py-20 px-10 text-white">
        <h2 className='text-2xl md:text-5xl font-semibold'>Let’s get you started.</h2>
        <p className="text-sm sm:text-xl font-light text-center">Join Hospitals across Africa that rely on CareTrack+ to run a smooth administration and management process.</p>
        <Link to='/onboard'>
      <Button cta="Get Started"  />

</Link>      </section>
      <Footer />

    </div>
  )
}

export default Home