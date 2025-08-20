import React from 'react'
import Header from '../components/Header'

const LandingPage = () => {
    return (
        <div >
            <Header />

            <section className="">
                <h1 className='text-4xl md:text-9xl text-center font-serif'>Quick Facts</h1>

                <div className="flex gap-20 justify-between items-center md:m-60" id='card-container'>
                    <div className="bg-gray-200 md:w-100 md:h-150 md:p-5 flex flex-col justify-center items-center rounded-4xl" id='card1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-50 opacity-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                        <div className="flex flex-col justify-center items-center gap-7 md:mt-10">
                            <p className='text-4xl font-manrope font-bold'>Over</p>
                            <h3 className='text-7xl font-manrope font-bold'>6000 ++</h3>
                            <p className='text-4xl font-manrope font-bold'>Job Listing</p>
                        </div>

                    </div>
                    <div className="bg-gray-200 md:w-100 md:h-150 md:p-5 flex flex-col justify-center items-center rounded-4xl" id='card2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-50 opacity-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>

                        <div className="flex flex-col justify-center items-center gap-7 md:mt-10">
                            <p className='text-4xl font-manrope font-bold'>Over</p>
                            <h3 className='text-7xl font-manrope font-bold'>6000 ++</h3>
                            <p className='text-4xl font-manrope font-bold'>Job Listing</p>
                        </div>

                    </div>
                    <div className="bg-gray-200 md:w-100 md:h-150 md:p-5 flex flex-col justify-center items-center rounded-4xl" id='card3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-50 opacity-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>

                        <div className="flex flex-col justify-center items-center gap-7 md:mt-10">
                            <p className='text-4xl font-manrope font-bold'>Over</p>
                            <h3 className='text-7xl font-manrope font-bold'>6000 ++</h3>
                            <p className='text-4xl font-manrope font-bold'>Job Listing</p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default LandingPage
