import React from 'react'
import doctor from '../assets/icons/hospitalbed.svg'
import Calendar from '../components/Calendar'
import LineGraph from '../components/LineGraph'

const Dashboard = () => {
  return (
    <div className='mt-60 text-primary w-4/5 ml-[15%] p-10'>
      {/* <p>Dashboard</p>
      <p>Fade in</p>
      <div className="opacity-100 hover:opacity-0 transition-opacity duration-700 ">
  Fade In on Hover
</div>
<p>Bounce</p>
<div className="transform -translate-x-full hover:translate-x-0 transition-transform duration-700">
  Slide In from Left
</div>
<div className="opacity-0 transform -translate-y-10 hover:opacity-100 hover:translate-y-0 transition-all duration-700">
  Fade and Slide In on Hover
</div>
<div className="animate-wiggle">
  Wiggle Animation
</div>
<div className="opacity-0 hover:opacity-100 transition-opacity duration-700">
  Fade In on Hover
</div>

 */}

<div className="text-2xl text-black font-semibold">Overview</div>
<div className="flex justify-between border items-center gap-4 flex-wrap w-4/5 ">
  {/* first box */}
  <div className="p-2 border border-bcolor flex justify-center rounded-xl items-start gap-2 bg-lightpowder">
    <div className='bg-primary size-[46px] rounded-xl place-content-center '>    <img className='size-[36px]  m-auto' src={doctor} alt="" />
</div>
    <div className="flex flex-col gap-0 items-start justify-center">
      <h3 className="text-xl font-normal text-lightash">Total Doctor</h3>
      <p className="text-2xl font-semibold text-black">56</p>
      <div className="flex gap-2 justify-end items-center self-end">
        <>
        <p className="text-sm font-bold">36 <span className="text-[green] font-black text-lg">&uarr;</span></p>
        </>
        <>
        <p className="text-sm font-bold">36 <span className="text-[red] font-black text-xl">&darr;</span></p>
        </>
      </div>
    </div>
  </div>
  {/* second */}
  <div className="p-2 border border-bcolor flex justify-center rounded-xl items-start gap-2 bg-lightpowder">
    <div className='bg-primary size-[46px] rounded-xl place-content-center '>    <img className='size-[36px]  m-auto' src={doctor} alt="" />
</div>
    <div className="flex flex-col gap-0 items-start justify-center">
      <h3 className="text-xl font-normal text-lightash">Total Nurse</h3>
      <p className="text-2xl font-semibold text-black">90</p>
      <div className="flex gap-2 justify-end items-center self-end">
        <>
        <p className="text-sm font-bold">53 <span className="text-[green] font-black text-lg">&uarr;</span></p>
        </>
        <>
        <p className="text-sm font-bold">37 <span className="text-[red] font-black text-xl">&darr;</span></p>
        </>
      </div>
    </div>
  </div>
  {/* third  */}
  <div className="p-2 border border-bcolor flex justify-center rounded-xl items-start gap-2 bg-lightpowder">
    <div className='bg-primary size-[46px] rounded-xl place-content-center '>    <img className='size-[36px]  m-auto' src={doctor} alt="" />
</div>
    <div className="flex flex-col gap-0 items-start justify-center">
      <h3 className="text-xl font-normal text-lightash">Total Patient</h3>
      <p className="text-2xl font-semibold text-black">200</p>
      <div className="flex gap-2 justify-end items-center self-end">
        <>
        <p className="text-sm font-bold">108 <span className="text-[green] font-black text-lg">&uarr;</span></p>
        </>
        <>
        <p className="text-sm font-bold">92 <span className="text-[red] font-black text-xl">&darr;</span></p>
        </>
      </div>
    </div>
  </div>
  {/* fourth */}
  <div className="p-2 border border-bcolor flex justify-center rounded-xl items-start gap-2 bg-lightpowder">
    <div className='bg-primary size-[46px] rounded-xl place-content-center '>    <img className='size-[36px]  m-auto' src={doctor} alt="" />
</div>
    <div className="flex flex-col gap-0 items-start justify-center">
      <h3 className="text-xl font-normal text-lightash">Total Beds</h3>
      <p className="text-2xl font-semibold text-black">108</p>
      <div className="flex gap-2 justify-end items-center self-end">
        <>
        <p className="text-sm font-bold">108 <span className="text-[green] font-black text-lg">&uarr;</span></p>
        </>
        <>
        <p className="text-sm font-bold">0 <span className="text-[red] font-black text-xl">&darr;</span></p>
        </>
      </div>
    </div>
  </div>
</div>

<hr className='mt-4' />
<div className="flex flex-col sm:flex-row items-center justify-start gap-4">
  <div className="flex w-full justify-between items-center">
    <p className='text-sm font-medium text-primary'>Patient Statistics</p>
  <div className='self-end'>
  <div className='w-fit flex items-center justify-center gap-1'>
    <span className='font-medium text-[green] self-center'>&#9632;</span>
    <p className='text-[12px] font-extralight self-center'>In-patient</p>
    </div>
    <div className='w-fit flex items-center justify-center gap-1'>
    <span className='font-medium text-[red] self-center'>&#9632;</span>
    <p className='text-[12px] font-extralight self-center'>Out-patient</p>
    </div>
  </div>
  </div>
</div>
<Calendar/>
<LineGraph />
    </div>
  )
}

export default Dashboard