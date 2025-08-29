import React from 'react'
import Profile from '../components/Profile'
import Navside from '../components/Navside'
import company from '../assets/indofood.png'
import Gauge from '../components/Gauge'

const Recom = () => {
    return (
        <div className="bg-gradient-to-bl from-blue-400 to-white min-h-screen">
            <Navside />
            <div className='p-10 flex justify-between gap-10 '>
                <Profile />
                <div className="container  p-10 min-h-screen">
                    <h1 className='font-serif text-center text-6xl' >Your Recommendation Jobs</h1>
                    <div className="grid md:grid-cols-2 my-20 gap-10">
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={100} />
                        </div>
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={90} />
                        </div>
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={100} />
                        </div>
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={100} />
                        </div>

                    </div>
                </div>
                <div className="bg-blue-300 w-200 h-200"></div>
            </div>
        </div>
    )
}

export default Recom
