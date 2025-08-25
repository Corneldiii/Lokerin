import React from 'react'
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Navside = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center'>
            <div className="bg-white w-180 rounded-b-full flex justify-center items-center h-15  shadow-2xl">
                <ul className='hidden md:flex justify-center items-center gap-7'>
                    <Link
                        to='header'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer font-manrope font-bold text-2xl hover:text-gray-300'>Jobs</Link>
                    <div className="w-2 h-6 rounded-full bg-gray-300"></div>
                    <Link
                        to='quick'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className='cursor-pointer font-manrope font-bold text-2xl hover:text-gray-300'>Recommended</Link>
                    <div className="w-2 h-6 rounded-full bg-gray-300"></div>
                    <Link
                        to='dream'
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className='cursor-pointer font-manrope font-bold text-2xl hover:text-gray-300'>Saved</Link>
                </ul>

            </div>


        </div>
    )
}

export default Navside
