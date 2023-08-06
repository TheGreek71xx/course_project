import React from 'react'
import Flint from '../assests/Flint.jpg'
import katrina from '../assests/katrina.jpg'
import Hati from '../assests/Hati.jpg'
import New_Jersey_Plumbing from '../assests/New_Jersey_Plumbing.jpg'
import panama from '../assests/panama.jpg'
import California_Lumber from '../assests/California_Lumber.jpg'

const Experience = () => {
    return (
        <div name ='skills' className= 'w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
          <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
              <div> 
                  <p className='text-4xl font-bold inline border-b-4 border-blue-600'>What we've done</p>
                  <p className='py-4'>// These are just some of the projects 
                      we have worked with in the past</p>
              </div>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={katrina} alt="katrina pic"/>
                      <p className='my-4'>Katrina</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Hati} alt="Hati pic"/>
                      <p className='my-4'>Hati</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={New_Jersey_Plumbing} alt="New_Jersey_Plumbing pic"/>
                      <p className='my-4'>New Jersey Plumbing</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={panama} alt="panama pic"/>
                      <p className='my-4'>Panama</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Flint} alt="Flint pic"/>
                      <p className='my-4'>Flint</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={California_Lumber} alt="California_Lumber pic"/>
                      <p className='my-4'>California Lumber Yard</p>
                  </div>
              </div>
          </div>
            
        </div>
    )
}

export default Experience
