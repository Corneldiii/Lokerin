import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [isOpen, SetIsOpen] = useState(false)
    const [show, setShow] = useState(false);
    const [showVerif, setShowVerif] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#4A9FF5] via-[#9A8DFF] to-[#C4E0F9]">

            <img src={logo} alt="" className='w-50 h-15 my-10 drop-shadow-2xl' />
            <div className="bg-white p-8 rounded-2xl shadow-lg w-fit">
                <h1 className='text-center text-2xl my-5 md:text-4xl  font-mono font-bold'>Welcome Back!</h1>
                <p className='text-center mb-20 text-xl text-gray-400'>we missed you! please enter yourd details.</p>
                <div className="flex flex-col justify-center items-center gap-7">
                    <div className="flex flex-col">
                        <label htmlFor="EmailJS" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Email</label>
                        <input
                            type="email"
                            name="EmailLogin"
                            id="email-login"
                            className=' border-1 rounded-2xl h-10 md:h-15 w-80 md:w-150 p-5 font-bold font-manrope  md:text-2xl' placeholder='Email'
                            onBlur={(e) => {
                                if (!e.target.value.includes("@")) {
                                    alert("Email harus mengandung @");
                                }
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="PassLogin" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Password</label>
                        <div className="">
                            <input
                                type={show ? "text" : "password"}
                                name="PassLogin" id="password-login"
                                className=' border-1 rounded-2xl h-10 md:h-15 w-80 md:w-150 p-5 font-bold font-manrope md:text-2xl'
                                placeholder='Password' />
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
                                className="py-3 right-250 text-gray-600 hover:text-black  absolute"
                            >
                                {show ? <EyeOff size={34} /> : <Eye size={34} />}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="PassLogin" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Password</label>
                        <div className="">
                            <input
                                type={showVerif ? "text" : "password"}
                                name="PassLogin" id="password-login"
                                className='border-1 rounded-2xl h-10 md:h-15 w-80 md:w-150 p-5 font-bold font-manrope md:text-2xl'
                                placeholder='Password' />
                            <button
                                type="button"
                                onClick={() => setShowVerif(!showVerif)}
                                className="py-3 right-250 text-gray-600 hover:text-black  absolute"
                            >
                                {showVerif ? <EyeOff size={34} /> : <Eye size={34} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className='w-30 md:w-150 h-10 md:h-15 bg-blue-800 rounded-2xl  font-bold text-white md:text-2xl hover:bg-blue-600 hover:text-white/50 cursor-pointer'
                    >Sign In</button>

                    <button
                        type="submit"
                        className='w-30 md:w-150 h-10 md:h-15 border-1 flex justify-center items-center rounded-2xl   md:text-2xl hover:bg-blue-200 cursor-pointer'
                    >
                        <img src={google} alt="" />
                        Sign in with google
                    </button>
                </div>
                <p className='text-2xl text-center mt-10'>Don't have account?
                    <a className='text-blue-600 cursor-pointer mx-2 font-bold'
                    onClick={() => SetIsOpen(true)}
                    >Sign Up</a>
                </p>
            </div>

            <Modal isOpen={isOpen} onClose={() => SetIsOpen(false)} title="Choose what you wanna be?">
                <div className="flex justify-between p-10">
                    <div className="flex flex-col justify-center items-center w-50 h-80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className='text-lg font-mono text-center my-5'>Discover your career opportunities. Log in now and start your journey to the dream job!</p>
                        <button
                            type="submit"
                            className='text-lg font-bold w-full bg-blue-400 rounded-4xl p-2 cursor-pointer hover:bg-blue-100 hover:text-stone-500'
                            onClick={() => navigate("/SignUpJS")}>Join as Job Seeker</button>
                    </div>
                    <div className="w-1 h-80 bg-black/50"></div>
                    <div className="flex flex-col justify-center items-center w-50 h-80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                        <p className='text-lg font-mono text-center my-5'>Build your winning team. Log in now to find and recruit top talent!</p>
                        <button
                            type="submit"
                            className='text-lg font-bold w-full mt-6 bg-blue-400 rounded-4xl p-2 cursor-pointer hover:bg-blue-100 hover:text-stone-500'
                            onClick={() => navigate("/SignUpCO")} >Join as Company</button>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default Login
