import React from 'react'

const Doctors = () => {
  return (
    <div>
              <div class="bg-blue-500 p-4 md:bg-green-500 lg:bg-red-500 xl:bg-purple-500">
  <p class="text-white">Responsive Background Colors</p>
  <p className='bg-blue-500 p-4 md:bg-green-500 lg:bg-red-500 xl:bg-purple-500'>Great</p>

<h1 class="text-base md:text-lg lg:text-xl xl:text-2xl">Responsive Heading</h1>
</div>
<div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:max-w-lg xl:max-w-xl">
  <img class="w-full h-48 object-cover" src={eye} alt="Card Image" />
  <div class="p-4">
    <h2 class="text-2xl font-semibold text-gray-800">Responsive Card</h2>
    <p class="mt-2 text-gray-600">This is an example of a responsive card component built with TailwindCSS.</p>
    <div class="flex justify-end mt-4">
      <button class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-400">Learn More</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Doctors