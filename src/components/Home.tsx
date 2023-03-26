import React from 'react'
import AnimatedText from './AnimatedText'
import Navbar from './Navbar/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-2 justify-items-center items-center'>
                <div>
                    <div className='flex flex-row'>
                        <div className='text-xl'>
                            Hi There
                        </div>
                        <div className='animate-wave text-xl ml-3 font-bold'>
                            👋🏻
                        </div>
                    </div>
                    <AnimatedText text={`I'am Sandeep Edara`} delay={150} />
                    {/* <div className='text-5xl'>
                        I'am Sandeep Edara
                    </div> */}
                </div>
                <img className="w-60 h-60 m-10 object-cover rounded-full" src='../../public/assets/IMG_5429.jpg' />
            </div>
        </>
    )
}

export default Home