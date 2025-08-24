import React from 'react'
import bg from '../assets/recruit.gif'
import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";

const SignUpCO = () => {
    const [show, setShow] = useState(false);
    const [showVerif, setShowVerif] = useState(false);
    return (
        <div className='h-screen w-full block md:flex '>
            <img
                src={bg}
                alt=""
                className='h-screen w-310 ' />
            <div className="absolute md:left-215  top-0 bottom-0 w-100 bg-gradient-to-l from-blue-200 to-transparent z-4 pointer-events-none hidden md:block"></div>
            <div className="md:flex absolute md:relative justify-center items-start bg-blue-200 z-4 top-0 md:z-0 h-screen w-screen md:w-500 md:p-20">
                <div className=" md:bg-blue-200 bg-white/90 h-screen md:h-fit">
                    <div className="w-full rounded-4xl h-fit p-10 flex flex-col justify-center items-center gap-7">
                        <h1 className='text-center text-3xl md:text-7xl my-20 font-mono font-bold'>Hello There👋</h1>
                        <div className="flex flex-col">
                            <label htmlFor="CompanyName" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Company Name</label>
                            <input
                                type="text"
                                name="CompanyName"
                                id="company-name"
                                className='shadow-xl border-1 rounded-2xl h-10 bg-white  md:h-15 w-80 md:w-150 p-5 font-bold font-manrope  md:text-2xl'
                                placeholder='Company Name'

                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="EmailJS" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Email</label>
                            <input
                                type="email"
                                name="EmailJS"
                                id="email-js"
                                className='shadow-xl border-1 rounded-2xl h-10 bg-white  md:h-15 w-80 md:w-150 p-5 font-bold font-manrope  md:text-2xl'
                                placeholder='Email'
                                onBlur={(e) => {
                                    if (!e.target.value.includes("@")) {
                                        // alert("Email harus mengandung @");
                                    }
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="PassJS" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Password</label>
                            <div className="">
                                <input
                                    type={show ? "text" : "password"}
                                    name="PassJS" id="password-js"
                                    className='shadow-xl border-1 rounded-2xl h-10 bg-white md:h-15 w-80 md:w-150 p-5 font-bold font-manrope md:text-2xl'
                                    placeholder='Password' />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="py-3 right-95 text-gray-600 hover:text-black  absolute"
                                >
                                    {show ? <EyeOff size={34} /> : <Eye size={34} />}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="PassVerJS" className='font-serif md:mx-5 md:my-2 md:text-2xl'>Confirmation Password</label>
                            <input
                                type={showVerif ? "text" : "password"}
                                name="PassVerJS"
                                id="passVerifJS"
                                className='shadow-xl border-1 rounded-2xl h-10 bg-white  md:h-15 w-80 md:w-150 p-5 font-bold font-manrope md:text-2xl' placeholder='Password' />
                            <button
                                type="button"
                                onClick={() => setShowVerif(!showVerif)}
                                className="mt-15 right-95 text-gray-600 hover:text-black  absolute"
                            >
                                {showVerif ? <EyeOff size={34} /> : <Eye size={34} />}
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="PhoneJS" className="font-serif md:mx-5 md:my-2 md:text-2xl">Phone Number</label>
                            <div className="flex items-center shadow-xl rounded-2xl overflow-hidden w-80 md:w-150 border-1">
                                <span className="bg-gray-400 px-4 py-4 text-lg md:text-2xl font-bold text-gray-700">+62</span>
                                <input
                                    type="tel"
                                    inputMode='numeric'
                                    name="PhoneJS"
                                    id="phoneJS"
                                    className="flex-1 h-10 bg-white  md:h-15 p-3 font-bold font-manrope md:text-2xl outline-none"
                                    pattern="[0-9]{9,13}" placeholder="81234567890"
                                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                />
                            </div>
                        </div>


                        <button
                            type="submit"
                            className='w-30 md:w-75 h-10 md:h-15 bg-blue-800 rounded-4xl shadow-2xl font-bold text-white md:text-2xl hover:bg-blue-600 hover:text-white/50 cursor-pointer'>Sign UP</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpCO
