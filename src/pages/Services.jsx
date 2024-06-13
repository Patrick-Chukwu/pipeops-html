import React, { useRef, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
    const [inView, setInView] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Disconnect after the first trigger
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is in view
        }
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  return (
    <div>
        <Navbar />
        <div className="flex flex-col gap-8 items-center justify-start mt-32">
            <h2 className="text-3xl px-8 text-center sm:text-5xl font-medium sm:font-bold text-primary">Explore our Amazing Features</h2>
            {/* <p className="text-xl text-black font-light px-4 w-[90%] sm:w-[70%] mx-auto text-center">With this Healthcare Management System, healthcare providers can efficiently manage patient appointments, electronic health records (EHR), prescriptions, and laboratory tests, ensuring accurate and timely documentation of patient information. The system also includes features for inventory management, staff scheduling, and financial reporting, empowering healthcare organisations to optimise resource allocation and financial performance.</p> */}
            <p className="text-xl text-black font-light px-2 w-[90%] sm:w-[70%] mx-auto text-center">We help you seamlessly streamline your hospital management processes through our all-in-one platform. </p>
            <div className="flex gap-12 flex-wrap justify-center items-start w-4/5 sm:w-[95%] mx-auto my-8">
                {/* first */}
                <div  ref={elementRef} className={`sm:w-[45%] md:w-[40%] lg:w-[30%] border-bcolor bg-servicecolor border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-2 py-20 px-8 h-[350px] max-h-[400px] transition-opacity duration-500 ${inView ? 'animate-bounceOnce' : 'opacity-70'}`}>
                    <h3 className='text-2xl font-bold text-black text-left'>Patient Management:</h3>
                    <p className='text-left text-xl font-light'>Streamlined patient registration, appointment scheduling, and medical history management.</p>
                </div>
                {/* second */}
                <div ref={elementRef} className={`sm:w-[45%] md:w-[40%] lg:w-[30%] border-bcolor bg-servicecolor border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-2 py-20 px-8 h-[350px] max-h-[400px] transition-opacity duration-500 ${inView ? 'animate-bounceOnce' : 'opacity-70'}`}>
                    <h3 className='text-2xl font-bold text-black text-left'>Electronic Health Records (EHR):</h3>
                    <p className='text-left text-xl font-light'>Secure storage and retrieval of patient health information, facilitating informed decision-making and continuity of care.</p>
                </div>
                {/* third */}
                <div ref={elementRef} className={`sm:w-[45%] md:w-[40%] lg:w-[30%] border-bcolor bg-servicecolor border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-2 py-20 px-8 h-[350px] max-h-[400px] transition-opacity duration-500 ${inView ? 'animate-bounceOnce' : 'opacity-70'}`}>
                    <h3 className='text-2xl font-bold text-black text-left'>Clinical Decision Support:</h3>
                    <p className='text-left text-xl font-light'>Integration of clinical guidelines and protocols to assist healthcare providers in making evidence-based treatment decisions.</p>
                </div>
                {/* fourth */}
                <div ref={elementRef} className={`sm:w-[45%] md:w-[40%] lg:w-[30%] border-bcolor bg-servicecolor border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-2 py-20 px-8 h-[350px] max-h-[400px] transition-opacity duration-500 ${inView ? 'animate-bounceOnce' : 'opacity-70'}`}>
                    <h3 className='text-2xl font-bold text-black text-left'>Billing and Claims Management:</h3>
                    <p className='text-left text-xl font-light'>Automated billing processes, claims submission, and reimbursement tracking to streamline revenue cycle management.</p>
                </div>
                {/* fifth */}
                <div ref={elementRef} className={`sm:w-[45%] md:w-[40%] lg:w-[30%] border-bcolor bg-servicecolor border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-2 py-20 px-8 h-[350px] max-h-[400px] transition-opacity duration-500 ${inView ? 'animate-bounceOnce' : 'opacity-70'}`}>
                    <h3 className='text-2xl font-bold text-black text-left'>Inventory Control:</h3>
                    <p className='text-left text-xl font-light'>Efficient management of medical supplies, equipment, and pharmaceuticals to minimise waste and ensure adequate stock levels.</p>
                </div>
                {/* sixth */}
                <div ref={elementRef} className={`sm:w-[45%] md:w-[40%] lg:w-[30%] border-bcolor bg-servicecolor border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-2 py-20 px-8 h-[350px] max-h-[400px] transition-opacity duration-500 ${inView ? 'animate-bounceOnce' : 'opacity-70'}`}>
                    <h3 className='text-2xl font-bold text-black text-left'>Reporting and Analytics:</h3>
                    <p className='text-left text-xl font-light'>Comprehensive reporting tools and analytics dashboards to monitor key performance indicators (KPIs), track trends, and identify areas for improvement.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Services