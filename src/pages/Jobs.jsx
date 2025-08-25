import React from 'react'
import Navside from '../components/Navside'
import Profile from '../components/Profile'
import company from '../assets/indofood.png';

const Jobs = () => {
    return (
        <div className="bg-gradient-to-bl from-blue-400 to-white min-h-screen">
            <Navside />
            <div className='p-10 flex justify-between gap-10 '>
                <Profile />
                <div className="container p-15 min-h-screen">
                    <div className="h-fit w-full">
                        <h1 className='font-serif text-7xl'>Discover Job Opportunities</h1>
                        <div className="bg-gradient-to-l flex justify-between items-center gap-20 from-white to-indigo-400 rounded-t-4xl shadow-2xl p-5 overflow-x-scroll scrol w-full h-80 my-20">
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                            <img src={company} alt="" className='w-60 h-60 rounded-4xl' />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='font-serif text-5xl text-center'>Find The Right Job For You</h1>
                        <div className="grid md:grid-cols-2 mt-20 gap-x-30 gap-y-10">
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>
                            <div className="bg-white w-130 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                                <img src={company} alt="" className='size-40 rounded-4xl' />
                                <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                                <div id="info-job" className='flex flex-col w-100 gap-2'>
                                    <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                    <p className='text-start'>Indofood Sukses Makmur</p>
                                    <p className='text-start'>Jakarta, Indonesia</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-blue-100 rounded-4xl w-200 h-fit flex flex-col items-center p-10">
                    <div className="w-full">
                        <input type="text" name="Search" id="search-field" placeholder='Search Jobs,Companies Or locations' className='w-full h-15 p-5 rounded-full bg-white' />
                        <button type="submit" className='absolute top-38 right-25 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex flex-col jus items-center gap-5 ">
                        <h1 className='my-10 font-serif font-bold text-2xl'>Most Viewed Companies👀</h1>
                        <div className="bg-amber-300 w-80 h-fit p-5 rounded-full shadow-2xl flex justify-between items-center">
                            <p className='font-manrope font-bold text-xl'>Indofood</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className='font-manrope font-bold '>100</p>
                            </div>

                        </div>
                        <div className="bg-amber-300 w-80 h-fit p-5 rounded-full shadow-2xl flex justify-between items-center">
                            <p className='font-manrope font-bold text-xl'>Indofood</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className='font-manrope font-bold '>100</p>
                            </div>

                        </div>
                        <div className="bg-amber-300 w-80 h-fit p-5 rounded-full shadow-2xl flex justify-between items-center">
                            <p className='font-manrope font-bold text-xl'>Indofood</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className='font-manrope font-bold '>100</p>
                            </div>

                        </div>
                        <div className="bg-amber-300 w-80 h-fit p-5 rounded-full shadow-2xl flex justify-between items-center">
                            <p className='font-manrope font-bold text-xl'>Indofood</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className='font-manrope font-bold '>100</p>
                            </div>

                        </div>
                        <div className="bg-amber-300 w-80 h-fit p-5 rounded-full shadow-2xl flex justify-between items-center">
                            <p className='font-manrope font-bold text-xl'>Indofood</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className='font-manrope font-bold '>100</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Jobs
