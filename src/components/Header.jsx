import React from 'react'
import Navbar from './Navbar'
import logo from "../assets/logo.png";
import landing1 from "../assets/Landing1.jpg";

const Header = () => {
    return (
        <header className='w-full pt-20'>
            <Navbar />
            <section className='container mx-auto flex flex-col justify-center items-center ' id='header'>
                {/* <img src={logo} alt="" /> */}
                <h1 className='text-4xl md:text-9xl lg:text-9xl font-serif pt-25 text-center' >Turn Your Passion Into A Career.</h1>

                <div className="bg-gray-500 overflow-y-hidden-hidden flex justify-center items-center mt-30 m-20 md:m-80 rounded-4xl w-100 md:w-full h-60 md:h-140">
                    <img src={landing1} className='md:mx-5 mb-20 md:mb-45  md:p-0 max-w-xs md:max-w-none rounded-t-4xl shadow-2xl' alt="" />
                </div>
            </section>
        </header>
    )
}

export default Header
