import React from 'react'
import bg from '../assets/SignJS.jpg'

const SignUpJS = () => {
  return (
    <div className='h-screen w-full flex '>
      <img src={bg} alt="" className='h-screen ' />
      <div className="absolute md:left-215  top-0 bottom-0 w-100 bg-gradient-to-l from-white to-transparent z-4 pointer-events-none"></div>
      <div className="flex justify-center items-start h-screen w-500 p-30">
        <div className=" bg-white">
          <div className="w-full rounded-4xl h-fit p-10 flex flex-col justify-center items-center gap-10">
            <h1 className='text-center text-7xl my-20 font-mono font-bold'>Hello There👋</h1>
            <input type="email" name="EmailJS" id="email-js" className='shadow-xl border-1 rounded-4xl h-15 w-150 p-5 font-bold font-manrope text-2xl' placeholder='Email' />
            <input type="password" name="PassJS" id="password-js" className='shadow-xl border-1 rounded-4xl h-15 w-150 p-5 font-bold font-manrope text-2xl' placeholder='Password' />
            <input type="password" name="PassVerJS" id="passVerifJS" className='shadow-xl border-1 rounded-4xl h-15 w-150 p-5 font-bold font-manrope text-2xl' placeholder='Password' />
            <button type="submit" className='w-75 h-15 bg-blue-800 rounded-4xl shadow-2xl font-bold text-white text-2xl hover:bg-blue-600 hover:text-white/50 cursor-pointer'>Sign UP</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUpJS
