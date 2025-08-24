import React from 'react'
import bg from '../assets/SignJS.jpg'

const SignUpJS = () => {
  return (
    <div className='h-screen w-full block md:flex '>
      <img src={bg} alt="" className='h-screen' />
      <div className="absolute md:left-215  top-0 bottom-0 w-100 bg-gradient-to-l from-white to-transparent z-4 pointer-events-none hidden md:block"></div>
      <div className="md:flex absolute md:relative justify-center items-start z-4 top-0 md:z-0 h-screen w-screen md:w-500 md:p-30">
        <div className=" md:bg-white bg-white/90 h-screen md:h-fit">
          <div className="w-full rounded-4xl h-fit p-10 flex flex-col justify-center items-center gap-10">
            <h1 className='text-center text-3xl md:text-7xl my-20 font-mono font-bold'>Hello There👋</h1>
            <input type="email" name="EmailJS" id="email-js" className='shadow-xl border-1 rounded-4xl h-10 md:h-15 w-80 md:w-150 p-5 font-bold font-manrope  md:text-2xl' placeholder='Email' />
            <input type="password" name="PassJS" id="password-js" className='shadow-xl border-1 rounded-4xl h-10 md:h-15 w-80 md:w-150 p-5 font-bold font-manrope md:text-2xl' placeholder='Password' />
            <input type="password" name="PassVerJS" id="passVerifJS" className='shadow-xl border-1 rounded-4xl h-10  md:h-15 w-80 md:w-150 p-5 font-bold font-manrope md:text-2xl' placeholder='Password' />
            <button type="submit" className='w-30 md:w-75 h-10 md:h-15 bg-blue-800 rounded-4xl shadow-2xl font-bold text-white md:text-2xl hover:bg-blue-600 hover:text-white/50 cursor-pointer'>Sign UP</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUpJS
