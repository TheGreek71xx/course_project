import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screenbg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pd-8 pl-4'>
                        <p className='text -4xl font-bold inline border-b-4 border-blue-600'>
                        About
                        </p>
                    </div>
                    <div></div>
                    </div>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Welcome to our page, take a look and see what we're about</p>
                </div>
                <div>
                    <p>What we are trying to accomplish is to fight the battle with
                        the less fortunate and the homeless.  With your help we can 
                        still find a way to help those without a home and unable to 
                        survive on their own.  Take a look and see what our company 
                        has to offer.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About
