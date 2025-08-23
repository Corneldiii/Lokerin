import React from 'react'
import Navbar from '../components/Navbar'
import landing1 from "../assets/Landing1.jpg";
import shopee from '../assets/shopee.png'
import indofood from '../assets/indofood.png'
import tokopedia from '../assets/tokopedia.png'
import profile from '../assets/profile.jpg'

import { useState } from "react";
import Footer from '../components/Footer'
import CountUp from "react-countup"
import { motion, AnimatePresence } from "framer-motion";
import Modal from '../components/Modal'


const LandingPage = () => {
    const data = [
        {
            name: "Arthur Aftur",
            job: "Software Engineering",
            text: "Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?",
            profile: profile,
        },
        {
            name: "Arthur Aftur",
            job: "Software Engineering",
            text: "Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?",
            profile: profile,
        },
        {
            name: "Arthur Aftur",
            job: "Software Engineering",
            text: "Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?",
            profile: profile,
        },
        {
            name: "Arthur Aftur",
            job: "Software Engineering",
            text: "Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?",
            profile: profile,
        },
        {
            name: "Arthur Aftur",
            job: "Software Engineering",
            text: "Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?",
            profile: profile,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => prev === 0 ? data.length - 1 : prev - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => prev === data.length - 1 ? 0 : prev + 1);
    };

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)

    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className=''>
            <Navbar OpenModal={() => SetIsOpen(true)} />
            <Modal isOpen={isOpen} onClose={() => SetIsOpen(false)} title="Choose what you wanna be?">
                <div className="flex justify-between p-10">
                    <div className="flex flex-col justify-center items-center w-50 h-80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className='text-lg font-mono text-center my-5'>Discover your career opportunities. Log in now and start your journey to the dream job!</p>
                        <button type="submit" className='text-lg font-bold w-full bg-blue-400 rounded-4xl p-2' >Join as Job Seeker</button>
                    </div>
                    <div className="w-1 h-80 bg-black/50"></div>
                    <div className="flex flex-col justify-center items-center w-50 h-80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                        <p className='text-lg font-mono text-center my-5'>Build your winning team. Log in now to find and recruit top talent!</p>
                        <button type="submit" className='text-lg font-bold w-full mt-6 bg-blue-400 rounded-4xl p-2' >Join as Company</button>
                    </div>
                </div>
            </Modal>

            <header className='w-full pt-20'>
                <section className='container mx-auto flex flex-col justify-center items-center ' id='header'>
                    {/* <img src={logo} alt="" /> */}
                    <h1 className='text-4xl md:text-9xl lg:text-9xl font-serif pt-25 text-center' >Turn Your Passion Into A Career.</h1>

                    <div className="bg-gray-500 overflow-y-hidden-hidden  flex justify-center items-center mt-30 m-20 md:m-80 rounded-4xl w-100 md:w-full h-60 md:h-140">
                        <img src={landing1} className='md:mx-5 mb-20 md:mb-45  md:p-0 max-w-xs md:max-w-none rounded-t-4xl shadow-2xl' alt="" />
                    </div>
                </section>
            </header>

            {/* Quick Fact Start */}

            <section
                className="flex justify-center items-center h-fit py-20 px-6 bg-gradient-to-r from-indigo-300 via-purple-100 to-blue-100 rounded-3xl mx-6 md:mx-20"
                id="quick"
            >
                <div className="container">
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-serif mb-16">
                        Quick Facts
                    </h1>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                        {/* Card 1 */}
                        <div className="bg-white shadow-lg w-full md:w-100 md:h-100 p-8 flex flex-col justify-center items-center rounded-3xl hover:scale-105 transition transform duration-300">
                            <div className="bg-indigo-100 p-6 rounded-full mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>

                            </div>
                            <p className="text-lg font-semibold">Over</p>
                            <h3 className="text-4xl md:text-5xl font-bold text-indigo-600">
                                <CountUp end={6000} duration={3} separator="," /> +
                            </h3>
                            <p className="text-gray-600 mt-2">Job Listings</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg w-full md:w-100  p-8 flex flex-col justify-center items-center rounded-3xl hover:scale-105 transition transform duration-300">
                            <div className="bg-purple-100 p-6 rounded-full mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>

                            </div>
                            <p className="text-lg font-semibold">Over</p>
                            <h3 className="text-4xl md:text-5xl font-bold text-purple-600">
                                <CountUp end={300} duration={3} /> +
                            </h3>
                            <p className="text-gray-600 mt-2">Companies Partnered</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg w-full md:w-100 p-8 flex flex-col justify-center items-center rounded-3xl hover:scale-105 transition transform duration-300">
                            <div className="bg-blue-100 p-6 rounded-full mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
                                Thousands
                            </h3>
                            <p className="text-gray-600 mt-2 text-center">
                                Job Seekers Helped
                            </p>
                        </div>

                        <div className="col-span-1 md:col-span-3 flex justify-center gap-50 my-20">
                            <div className="bg-white shadow-lg w-full md:w-100 md:h-100 p-8 flex flex-col justify-center items-center rounded-3xl hover:scale-105 transition transform duration-300">
                                <div className="bg-green-100 p-6 rounded-full mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>

                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-green-600">
                                    <CountUp end={63000} duration={3} separator="," /> +
                                </h3>
                                <p className="text-gray-600 mt-2 text-center">
                                    Job Data Processed
                                </p>
                            </div>

                            {/* Card 5 - Accuracy */}
                            <div className="bg-white shadow-lg w-full md:w-100 p-8 flex flex-col justify-center items-center rounded-3xl hover:scale-105 transition transform duration-300">
                                <div className="bg-pink-100 p-6 rounded-full mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className='size-20'>
                                        <line x1="19" y1="5" x2="5" y2="19" />
                                        <circle cx="7.5" cy="7.5" r="2.25" />
                                        <circle cx="16.5" cy="16.5" r="2.25" />
                                    </svg>

                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-pink-600">
                                    <CountUp end={95} duration={3} />%
                                </h3>
                                <p className="text-gray-600 mt-2 text-center">
                                    Accurate Recommendations
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <p className="text-center text-4xl my-12 text-gray-700 italic">
                        Bergabunglah bersama ribuan pencari kerja yang sudah menemukan impian mereka di sini 🚀
                    </p>
                </div>
            </section>

            {/* Quick fact end */}

            {/* Big dream start */}

            <section className='flex justify-center items-center h-fit md:py-20 lg:py-30' id='dream'>
                <div className="container">
                    <h1 className='text-4xl md:text-8xl font-serif'>Big Company,Big Dream</h1>

                    <div className='flex flex-col justify-center items-center gap-0' id="info-container">
                        <div className="md:mt-20 overflow-hidden flex">
                            <img src={shopee} alt="" className='max-w-xs md:max-w-none w-250 h-100' />
                            <div className="bg-gray-800 w-100 h-100 p-7 ">
                                <h5 className='text-2xl text-white text-center font-serif'>Shopee International Indonesia</h5>
                                <p className='text-gray-500 mt-5 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorum recusandae itaque earum ratione porro </p>
                                <div className="bg-white opacity-50 h-0.5 w-85 mt-6 rounded-4xl "></div>
                                <p className='text-white mt-5 font-mono '>Lorem ipsum dolor sit amet consectetur adipim qu Beatae corrupti sequi inventore magnam natus odio molestiae rerum voluptate incidunt fugiat dolores minus nisi, deserunt qui mollitia aliquid atque, quibusdam veniam distinctio! Odio quisquam vitae deserunt, quidem adipisci mollitia?</p>

                            </div>
                        </div>
                        <div className="overflow-hidden flex">
                            <div className="bg-gray-800 w-100 h-100 p-7">
                                <h5 className='text-2xl text-white text-center font-serif'>Shopee International Indonesia</h5>
                                <p className='text-gray-500 mt-5 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorum recusandae itaque earum ratione porro </p>
                                <div className="bg-white opacity-50 h-0.5 w-85 mt-6 rounded-4xl "></div>
                                <p className='text-white mt-5 font-mono '>Lorem ipsum dolor sit amet consectetur adipim qu Beatae corrupti sequi inventore magnam natus odio molestiae rerum voluptate incidunt fugiat dolores minus nisi, deserunt qui mollitia aliquid atque, quibusdam veniam distinctio! Odio quisquam vitae deserunt, quidem adipisci mollitia?</p>

                            </div>
                            <img src={indofood} alt="" className='max-w-xs md:max-w-none w-250 h-100' />
                        </div>
                        <div className="overflow-hidden flex">
                            <img src={tokopedia} alt="" className='max-w-xs md:max-w-none w-250 h-100' />
                            <div className="bg-gray-800 w-100 h-100 p-7">
                                <h5 className='text-2xl text-white text-center font-serif'>Shopee International Indonesia</h5>
                                <p className='text-gray-500 mt-5 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorum recusandae itaque earum ratione porro </p>
                                <div className="bg-white opacity-50 h-0.5 w-85 mt-6 rounded-4xl "></div>
                                <p className='text-white mt-5 font-mono '>Lorem ipsum dolor sit amet consectetur adipim qu Beatae corrupti sequi inventore magnam natus odio molestiae rerum voluptate incidunt fugiat dolores minus nisi, deserunt qui mollitia aliquid atque, quibusdam veniam distinctio! Odio quisquam vitae deserunt, quidem adipisci mollitia?</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* big dream end */}

            {/* people say start */}

            <section className='flex justify-center items-center w-full h-fit md:py-20 lg:py-80' id='people'>
                <div className="container">
                    <h1 className='text-4xl md:text-8xl font-serif text-center'>What They Say O-O</h1>

                    <div className="relative w-full flex justify-center items-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 z-20  bg-white shadow-md rounded-full p-3 hover:scale-110 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-7 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>

                        </button>
                        <div className="overflow-hidden w-[90%] relative">
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="flex gap-10 p-20 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                                {data.map((item, i) => (
                                    <div key={i} className="w-120 flex-shrink-0 shadow-2xl rounded-4xl p-4 mt-30 bg-white" id="nilai">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" className=" size-20 md:size-40 opacity-60">
                                            <path d="M7 6c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6H7v-2h4V6H7zm10 0c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6h-2v-2h4V6h-4z" />
                                        </svg>
                                        <p className="md:ml-15 md:text-4xl">{item.text}</p>

                                        <div
                                            className="flex justify-center items-center gap-10"
                                            id="profile-say"
                                        >
                                            <img src={item.profile} alt="" className="rounded-full w-25 h-25 md:mt-10" id="profile-pict" />
                                            <div className="flex flex-col md:mt-10 " id="profile-name">
                                                <h6 className="text-3xl font-bold">{item.name}</h6>
                                                <p className="text-2xl font-manrope">{item.job}</p>
                                                <div className=" flex justify-between items-center md:mt-2" id="profile-star">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className='size-10'>
                                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                            clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 z-20 bg-white shadow-md rounded-full p-3 hover:scale-110 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>

                    <div className="flex mt-80 mb-80" id='experience'>
                        <div className=" w-full h-fit flex flex-col " id='formEXP'>
                            <div className="flex justify-start items-center">
                                <input type="text" name="" id="" placeholder='Name' className='p-7 font-bold text-2xl shadow-2xl bg-indigo-100 rounded-4xl w-120 h-15' />
                                <div className="flex ml-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={active1 ? "yellow" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15  cursor-pointer " onClick={() => setActive1(!active1)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={active2 ? "yellow" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15  cursor-pointer " onClick={() => setActive2(!active2)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={active3 ? "yellow" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15  cursor-pointer " onClick={() => setActive3(!active3)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={active4 ? "yellow" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15  cursor-pointer " onClick={() => setActive4(!active4)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={active5 ? "yellow" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15  cursor-pointer " onClick={() => setActive5(!active5)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                            </div>
                            <input type="text" name="" id="" placeholder='Your Job' className='font-bold text-2xl p-7 mt-15 w-200 h-15 bg-indigo-100 rounded-4xl shadow-2xl' />
                            <textarea name="" id="" placeholder='Tell Me Your Experience' className='font-bold text-2xl p-7 mt-15 w-200 h-100 bg-indigo-100 rounded-4xl shadow-2xl'></textarea>
                        </div>
                        <div className="flex flex-col items-center  ml-10 gap-10 h-fit">
                            <h1 className='text-9xl font-serif '>Add Your Experience Here.</h1>
                            <p className='text-2xl font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ate magni cumque ipsam, tempora facilis reiciendis.</p>
                            <button type="submit" className='cursor-pointer hover:bg-indigo-200 bg-indigo-500 h-20 w-full rounded-4xl font-bold text-4xl text-white'>Submit</button>
                        </div>
                    </div>

                </div>
            </section>


            {/* people say end */}

            <Footer />


        </div>
    )
}

export default LandingPage
