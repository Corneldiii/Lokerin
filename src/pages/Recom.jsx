import React from 'react'
import Profile from '../components/Profile'
import Navside from '../components/Navside'

const Recom = () => {
    return (
        <div className="bg-gradient-to-bl from-blue-400 to-white min-h-screen">
            <Navside />
            <div className='p-10 flex justify-between gap-10 '>
                <Profile />
                <div className="container bg-gray-300 min-h-screen"></div>
                <div className="bg-blue-300 w-200 h-200"></div>
            </div>
        </div>
    )
}

export default Recom
