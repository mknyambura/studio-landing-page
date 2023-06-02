import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import Footer from './Footer'
import Header from './Header'

import image from '../images/cta.png'
import video from '../images/video.png'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import article1 from '../images/article1.png'
import article2 from '../images/article2.png'

import './index.css'

import { BsCodeSlash, BsFillPlayCircleFill, BsStack } from 'react-icons/bs'
import { RiSearchEyeFill } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'

function Home() {

    const [counterOn, setCounterOn] = useState(false)

  return (
    <div>
        <Header/>
        <div className='head flex flex-col justify-between m-8'>
            <div className='flex flex-row justify-between mt-8 mb-16'>
                <div className='flex flex-col gap-8 w-1/2'>
                    <h1 className='text-5xl font-bold'>Design-Driven Development  of Your <span className='text-[#4F3DFE]'>Web Project</span></h1>
                    <p className='opacity-60'>A full-cycle digital service agency. We do from design to end-to-end development to maintenance. We have been worked with more than 50+ brands</p>
                </div>
                <div>
                    <img src={image} alt="" className='animate-bounce'/>
                </div>
            </div>
            <div className='relative flex'>
                <img src={video} alt="" />
                <div className='absolute top-[45%] left-[45%] text-8xl text-[#4F3DFE]'>
                    <BsFillPlayCircleFill/>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xl font-bold'>Some statistics</h1>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className='flex flex-row gap-8'>
                        <div className='flex flex-col items-center m-10'>
                            <h5 className='font-bold text-7xl'>
                                {counterOn && 
                                    <CountUp start={0} end={250} duration={5} delay={0}/>
                                }
                            <span className='text-[#4F3DFE]'>+</span>
                            </h5>
                            <p className='text-xl font-semibold'>Projects Completed</p>
                        </div>
                        <div className='flex flex-col items-center m-10'>
                            <h5 className='font-bold text-7xl'>
                                {counterOn && 
                                    <CountUp start={0} end={150} duration={5} delay={0}/>
                                }
                            <span className='text-[#4F3DFE]'>+</span>
                            </h5>
                            <p className='text-xl font-semibold '>Happy Clients</p>
                        </div>
                            
                        <div className='flex flex-col items-center m-10'>
                            <h5 className='font-bold text-7xl'>
                                {counterOn && 
                                    <CountUp start={0} end={10} duration={3} delay={0}/>
                                }
                            <span className='text-[#4F3DFE]'>+</span>
                            </h5>
                            <p className='text-xl font-semibold '>Years of Experience</p>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>

        <div className='border border-white/20 flex flex-row justify-between gap-8 items-center'>
            <div className='flex flex-col gap-8 px-8 py-8'>
                <h1 className='font-bold text-7xl'>We Give Solutions & Happiness</h1>
                <button className='w-1/2 bg-[#4F3DFE] px-4 py-2 rounded-md'>Start a Project</button>
            </div>
            <div className='grid grid-cols-2'>
                <div className='bg-[#4F3DFE] px-6 py-6 flex  flex-col gap-8'>
                    <button disabled="disabled" className='flex items-center  justify-center  w-[14%] px-4 py-4 rounded-full bg-white/30'>
                        <BsCodeSlash/>
                    </button>
                    <div className='flex flex-col justify-between gap-8'>
                        <h1 className='font-bold text-3xl'>Web Development</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error ut, quidem rerum assumenda laboriosam quas eos sequi dolore magnam voluptatum quisquam architecto explicabo? 
                            Saepe mollitia distinctio inventore aspernatur, adipisci natus!
                        </p>
                    </div>
                </div>
                <div className='bg-transparent border border-white/20 px-6 py-6 flex  flex-col gap-8'>
                    <button disabled="disabled" className='flex items-center  justify-center  w-[14%] px-4 py-4 rounded-full bg-white/30'>
                        <RiSearchEyeFill/>
                    </button>
                    <div className='flex flex-col justify-between gap-8'>
                        <h1 className='font-bold text-3xl'>UI/UX Design</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error ut, quidem rerum assumenda laboriosam quas eos sequi dolore magnam voluptatum quisquam architecto explicabo? 
                            Saepe mollitia distinctio inventore aspernatur, adipisci natus!
                        </p>
                    </div>
                </div>
                <div className='bg-transparent border border-white/20 px-6 py-6 flex  flex-col gap-8'>
                    <button disabled="disabled" className='flex items-center  justify-center  w-[14%] px-4 py-4 rounded-full bg-white/30'>
                        <BsStack/>
                    </button>
                    <div className='flex flex-col justify-between gap-8'>
                        <h1 className='font-bold text-3xl'>Branding</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error ut, quidem rerum assumenda laboriosam quas eos sequi dolore magnam voluptatum quisquam architecto explicabo? 
                            Saepe mollitia distinctio inventore aspernatur, adipisci natus!
                        </p>
                    </div>
                </div>
                <div className='bg-transparent border border-white/20 px-6 py-6 flex  flex-col gap-8'>
                    <button disabled="disabled" className='flex items-center  justify-center  w-[14%] px-4 py-4 rounded-full bg-white/30'>
                        <HiPencil/>
                    </button>
                    <div className='flex flex-col justify-between gap-8'>
                        <h1 className='font-bold text-3xl'>Content Writing</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Error ut, quidem rerum assumenda laboriosam quas eos sequi dolore magnam voluptatum quisquam architecto explicabo? 
                            Saepe mollitia distinctio inventore aspernatur, adipisci natus!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='head border border-white/20 items-center flex flex-col gap-24 mt-24 mb-24'>
            <h1 className='font-bold text-6xl'>Selected Projects</h1>
            <div className='relative flex flex-col gap-8'>
                <img src={project1} alt=""/>
                <button className='absolute rounded-full px-5 py-6 bg-[#4F3DFE] top-[32%] left-[50%] hover:animate-spin'>View</button>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-4xl'>Cicu Web Design</h1>
                    <h1 className='text-[#4F3DFE] text-sm uppercase font-bold'>Web Design</h1>
                </div>
            </div>
            <div className='relative flex flex-col gap-8'>
                <img src={project2} alt=""/>
                <button className='absolute rounded-full px-5 py-6 bg-[#4F3DFE] top-[32%] left-[50%] hover:animate-spin'>View</button>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-4xl'>Marketer Web Design</h1>
                    <h1 className='text-[#4F3DFE] text-sm uppercase font-bold'>Web Design</h1>
                </div>
            </div>
            <div className='relative flex flex-col gap-8'>
                <img src={project3} alt=""/>
                <button className='absolute rounded-full px-5 py-6 bg-[#4F3DFE] top-[32%] left-[50%] hover:animate-spin'>View</button>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-4xl'>News Web Design</h1>
                    <h1 className='text-[#4F3DFE] text-sm uppercase font-bold'>Web Design</h1>
                </div>
            </div>
            <button className='bg-[#4F3DFE] px-4 py-2 rounded-md flex flex-row mb-16 items-center justify-between gap-4'>
                View All
                <BsArrowRight/>
            </button>
        </div>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-row justify-between'>
                <h1 className='w-1/2 font-bold text-6xl'>Our Latest Articles & Resources</h1>
                <button className='bg-[#4F3DFE] px-4 py-2 rounded-md flex flex-row mb-16 items-center justify-between gap-4'>
                    Browse All
                    <BsArrowRight/>
                </button>
            </div>
            <div className='flex flex-row items-center'>
                <div className='items-center border justify-center border-white/20 px-12 py-12'>
                    <div className='flex flex-col gap-4'>
                        <img src={article1} alt="" />
                        <div className='flex  flex-col gap-4'>
                            <h1 className='text-2xl font-semibold'>How to create awesome mesh gradients</h1>
                            <div className='bg-white/70 h-[2px]'></div>
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-xl font-bold hover:underline hover:cursor-pointer'>Read More</h1>
                                <h1 className='text-sm'>11 July 2022</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' items-center border justify-center border-white/20 px-12 py-12'>
                    <div className='flex flex-col gap-4'>
                        <img src={article2} alt="" />
                        <div className='flex  flex-col gap-4'>
                            <h1 className='text-2xl font-semibold'>10 amaxing and free to use google fonts</h1>
                            <div className='bg-white/70 h-[2px]'></div>
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-xl font-bold hover:underline hover:cursor-pointer'>Read More</h1>
                                <h1 className='text-sm'>11 July 2022</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='foot flex flex-row items-center justify-between mt-[100px] h-[70vh]'>
            <div className='flex flex-col gap-8 w-1/2'>
                <h1 className='font-bold text-6xl'>Let's Discuss Your Project</h1>
                <p className='opacity-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    At aspernatur repellendus culpa perspiciatis rem veritatis animi a ad, accusamus velit deleniti laboriosam voluptatibus iste reprehenderit, illum numquam recusandae in sequi.
                </p>
            </div>
            <button className='flex items-center bg-[#4F3DFE] px-7 py-12 rounded-full text-xl'>Contact</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Home