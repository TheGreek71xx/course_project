import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name= 'home' className='w-full h-screen bg-[#0a192f]'>
            
            {/*Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-600'>Hello, welcome to the 5th Wall</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Wlcome to our charitible organization and business on depleting the name homless.
                    What we aim and strive for is to donate house building materials
                    from acroos the the US and use them to build homes and shelters for the less fortunate
                    With the help of you and plenty of other builders willing to donate 
                    extra materials they have from their job sites we can make the world not 
                    only a better place but a livable one as well.</h1>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 hover:' />
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
