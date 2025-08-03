import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='flex flex-col justify-center my-10 md:flex-row gap-10 mb-8 text-sm'>
        <img className='w-full md:max-w-[360px] rounded' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Muba Abiru <br /> Suite 355, Ikorodu, Nigeria</p>
          <p className='text-gray-500'>Tel: (234) 555-0132 <br /> Email: jimohsegunj@gmail.com </p>
          <p className='font-semibold text-lg text-gray-600'> Careers at MediCare</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm rounded hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact