import React from 'react'
import AnimatedText from './AnimatedText'
import Navbar from './Navbar/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-2 justify-center content-center justify-items-center'>
                <div className='flex flex-col justify-center justify-items-center items-center p-5'>
                    <div className='flex flex-row justify-center'>
                        <div className='text-xl'>
                            Hi There
                        </div>
                        <div className='animate-wave text-xl ml-3 font-bold'>
                            👋🏻
                        </div>
                    </div>
                    <AnimatedText text={`I'am Sandeep Edara`} delay={150} />
                    <div className='font-thin text-left ml-16 mt-6'>
                        Welcome to my digital portfolio, a glimpse into my passion for creating innovative software solutions. As a skilled software engineer, I've mastered web and mobile development using cutting-edge technologies. Dive into my projects to uncover my expertise in React Typescript, Node, PostgreSQL, and MongoDB. My commitment to excellence, adaptability, and continuous learning sets me apart. Let's embark on a collaborative journey to drive success in the dynamic world of technology.
                    </div>
                </div>
                <img className="w-60 h-60 m-10 object-cover rounded-full opacity-70" src='../../public/assets/IMG_2736.PNG' />
            </div>
        </>
    )
}

export default Home