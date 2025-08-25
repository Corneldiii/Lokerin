import React, { useState } from 'react'
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';


const Navbar = ({ OpenModal }) => {
    const navigate = useNavigate();
    return (
        <div className='fixed top-0 left-0 w-full z-10 shadow backdrop-blur-3xl'>
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-3 lg:px-5">
                <img
                    src={logo}
                    className='w-30 h-8' alt="" />
                <ul className='hidden md:flex gap-7'>
                    <Link
                        to='header'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer text-lg hover:text-gray-300'>Home</Link>
                    <Link
                        to='quick'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className='cursor-pointer text-lg hover:text-gray-300'>Quick Fact</Link>
                    <Link
                        to='dream'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className='cursor-pointer text-lg hover:text-gray-300'>Big Dream</Link>
                    <Link
                        to='people'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer text-lg hover:text-gray-300'>People Love It</Link>
                </ul>
                <div className="flex justify-between items-center">
                    <button
                        onClick={OpenModal}
                        className='hidden cursor-pointer text-lg font-manrope font-bold   md:block bg-blue px-8 py-2 rounded-full'
                    >
                        Sign Up
                    </button>
                    <div className="w-0.5 h-10 bg-black"></div>
                    <button
                        onClick={() => navigate("/Login")}
                        className='hidden cursor-pointer text-lg font-manrope font-bold   md:block bg-blue px-8 py-2 rounded-full'
                    >
                        Sign In
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Navbar
