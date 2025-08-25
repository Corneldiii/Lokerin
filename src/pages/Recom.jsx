import React from 'react'
import Profile from '../components/Profile'

const Recom = () => {
  return (
    <div className='p-10 flex justify-between gap-10 bg-gradient-to-bl from-blue-400 to-white min-h-screen'>
      <Profile/>
      <div className="container bg-gray-300"></div>
      <div className="bg-blue-300 w-200 h-200"></div>
    </div>
  )
}

export default Recom
