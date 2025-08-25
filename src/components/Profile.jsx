import React from 'react'
import pp from '../assets/profile.jpg';

const Profile = () => {
  return (
    <div className='shadow-2xl md:w-220 md:h-fit md:p-10 rounded-3xl'>
      <div className=" flex justify-between" id='top-profile'>
        <img
          src={pp}
          alt=""
          className='md:size-35 rounded-tl-4xl rounded-br-4xl shadow-2xl' />
        <div className="flex flex-col mx-10 gap-5" id='top-detail'>
          <h5 className='font-mono font-bold text-4xl '>Corendliii</h5>
          <p className='text-xl font-mono font-bold text-black/40'>email123@gmail.com</p>
          <p className='text-xl font-mono font-bold text-black/40'>System Development</p>
        </div>
        <button type="button" className='h-fit'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:animate-spin  cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>

      </div>
      <div className="bg-black w-110 h-0.5 my-15"></div>
      <div className='flex flex-col justify-center items-start gap-5' id="education">
        <h1 className='font-mono font-bold text-4xl text-black/70'>Education</h1>
        <p className='font-mono font-bold text-2xl text-black/50'>S1 - Informatics Engineering</p>
        <p className='font-mono font-bold text-2xl text-black/50'>University of Sanatha Dharma</p>
      </div>
      <div className="bg-black w-110 h-0.5 my-15"></div>


    </div>
  )
}

export default Profile
