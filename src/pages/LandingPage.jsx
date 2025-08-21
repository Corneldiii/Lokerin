import React from 'react'
import Header from '../components/Header'
import shopee from '../assets/shopee.png'
import indofood from '../assets/indofood.png'
import tokopedia from '../assets/tokopedia.png'
import profile from '../assets/profile.jpg'
import { useState } from "react";

const LandingPage = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    return (
        <div className=''>
            <Header />

            {/* Quick Fact Start */}
            <section className=" flex justify-center items-center h-screen" id='quick'>
                <div className="container">

                    <h1 className='text-4xl md:text-9xl text-center font-serif'>Quick Facts</h1>

                    <div className="flex flex-col md:flex-row w-full justify-between items-center mt-20 mb-20 md:mt-40 md:mb-40 gap-10 md:gap-0" id='card-container'>
                        <div className="bg-gray-200 w-50 h-75 p-3  md:w-100 md:h-150 md:p-5 flex flex-col justify-center items-center rounded-4xl" id='card1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 md:size-50 opacity-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <div className="flex flex-col justify-center items-center gap-7 md:mt-10">
                                <p className='text-2xl md:text-4xl font-manrope font-bold'>Over</p>
                                <h3 className='text-4xl md:text-7xl font-manrope font-bold'>6000 ++</h3>
                                <p className='text-2xl md:text-4xl font-manrope font-bold'>Job Listing</p>
                            </div>

                        </div>
                        <div className="bg-gray-200 w-50 h-75 p-3 md:w-100 md:h-150 md:p-5 flex flex-col justify-center items-center rounded-4xl" id='card2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 md:size-50 opacity-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>

                            <div className="flex flex-col text-center justify-center items-center gap-7 md:mt-10">
                                <p className='text-2xl md:text-4xl font-manrope font-bold'>Over</p>
                                <h3 className='text-4xl md:text-7xl font-manrope font-bold'>300 ++</h3>
                                <p className='text-2xl md:text-4xl font-manrope font-bold'>Companies Partnered</p>
                            </div>

                        </div>
                        <div className="bg-gray-200 w-50 h-75 p-3 md:w-100 md:h-150 md:p-5 flex flex-col justify-center items-center rounded-4xl" id='card3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-20 md:size-50 opacity-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                            </svg>

                            <div className="flex flex-col justify-center items-center gap-7 md:mt-10">
                                <p className='text-2xl md:text-4xl text-center font-manrope font-bold'>Thousand Of Job Seekers Helped</p>
                            </div>
                        </div>
                    </div>
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

                    <div id="say-container" className='flex justify-between '>
                        <div className="w-120 shadow-2xl rounded-4xl p-4 mt-30" id='nilai'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" className=" size-20 md:size-40 opacity-60"><path d="M7 6c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6H7v-2h4V6H7zm10 0c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6h-2v-2h4V6h-4z" />
                            </svg>
                            <p className='md:ml-15 md:text-4xl'>Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?</p>

                            <div className="flex justify-center items-center gap-10" id='profile-say'>
                                <img src={profile} alt="" className='rounded-full w-25 h-25 md:mt-10' id='profile-pict' />
                                <div className="flex flex-col md:mt-10 " id='profile-name'>
                                    <h6 className='text-3xl font-bold'>Arthur Aftur</h6>
                                    <p className='text-2xl font-manrope'>Software Engineering</p>
                                    <div className=" flex justify-between items-center md:mt-2" id='profile-star'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-120 shadow-2xl rounded-4xl p-4 mt-30" id='nilai'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" className=" size-20 md:size-40 opacity-60"><path d="M7 6c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6H7v-2h4V6H7zm10 0c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6h-2v-2h4V6h-4z" />
                            </svg>
                            <p className='md:ml-15 md:text-4xl'>Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?</p>

                            <div className="flex justify-center items-center gap-10" id='profile-say'>
                                <img src={profile} alt="" className='rounded-full w-25 h-25 md:mt-10' id='profile-pict' />
                                <div className="flex flex-col md:mt-10 " id='profile-name'>
                                    <h6 className='text-3xl font-bold'>Arthur Aftur</h6>
                                    <p className='text-2xl font-manrope'>Software Engineering</p>
                                    <div className=" flex justify-between items-center md:mt-2" id='profile-star'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-120 shadow-2xl rounded-4xl p-4 mt-30" id='nilai'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" className=" size-20 md:size-40 opacity-60"><path d="M7 6c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6H7v-2h4V6H7zm10 0c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-6h-2v-2h4V6h-4z" />
                            </svg>
                            <p className='md:ml-15 md:text-4xl'>Lorem ipsumvoluptate tempore, aut blanditiis ratione laborum nesciunt! Sapiente, beatae?</p>

                            <div className="flex justify-center items-center gap-10" id='profile-say'>
                                <img src={profile} alt="" className='rounded-full w-25 h-25 md:mt-10' id='profile-pict' />
                                <div className="flex flex-col md:mt-10 " id='profile-name'>
                                    <h6 className='text-3xl font-bold'>Arthur Aftur</h6>
                                    <p className='text-2xl font-manrope'>Software Engineering</p>
                                    <div className=" flex justify-between items-center md:mt-2" id='profile-star'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-10">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>

                                    </div>
                                </div>
                            </div>

                        </div>
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


        </div>
    )
}

export default LandingPage
