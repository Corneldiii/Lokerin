import React, { useState } from 'react'
import Profile from '../components/Profile'
import Navside from '../components/Navside'
import company from '../assets/indofood.png'
import Gauge from '../components/Gauge'
import docspdf from '../assets/docspdf.png';
import Modal from '../components/Modal'

const Recom = () => {

    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className="bg-gradient-to-bl from-blue-400 to-white min-h-screen">
            <Navside />
            <div className='p-10 flex justify-between gap-10 '>
                <Profile />
                <div className="container  p-10 min-h-screen">
                    <h1 className='font-serif text-center text-6xl' >Your Recommendation Jobs</h1>
                    <div className="grid md:grid-cols-2 my-20 gap-10">
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer" onClick={() => SetIsOpen(true)}>
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={100} />
                        </div>
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={90} />
                        </div>
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={100} />
                        </div>
                        <div className="bg-white w-160 h-fit shadow-2xl p-5 rounded-4xl flex items-center gap-5 cursor-pointer">
                            <img src={company} alt="" className='size-40 rounded-4xl' />
                            <div className="bg-black/50 w-1 h-40 rounded-b-full"></div>
                            <div id="info-job" className='flex flex-col w-100 gap-2'>
                                <h1 className='font-serif text-center mb-2 text-3xl'>JobTitle</h1>
                                <p className='text-start'>Indofood Sukses Makmur</p>
                                <p className='text-start'>Jakarta, Indonesia</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia...</p>
                            </div>
                            <Gauge value={100} />
                        </div>

                    </div>
                </div>
                <div className="bg-white shadow-2xl w-200 h-fit p-10 rounded-4xl flex flex-col items-center">
                    <div className="w-full h-100 border-black/50 border-4 border-dashed rounded-4xl flex flex-col justify-center items-center relative">
                        <input type="file" id="cv-upload" className="absolute inset-0 opacity-0 cursor-pointer" />
                        <img src={docspdf} alt="" className="size-30 my-5" />
                        <h1 className="font-jersey text-3xl w-60 text-center">
                            Drag & Drop <span className="text-blue-800">PDF</span> Or <span className="text-blue-800">Docx</span> Of Your CV
                        </h1>
                        <p className="text-center font-jersey text-sm">
                            Or <span className="text-blue-800 underline">Browse Here</span> On Your Computer
                        </p>
                    </div>
                    <button type="submit" className="p-2 text-3xl font-jersey rounded-full text-white w-40 bg-blue-400 mt-10 cursor-pointer hover:shadow-2xl ">Upload</button>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => SetIsOpen(false)} title="More Detail" >
                <div className="w-full h-1 bg-black/50 my-5"></div>
                <div className=" w-full max-h-200 overflow-y-scroll">
                    <div className="flex flex-col  p-10">
                        <div className="w-full h-fit p-5 my-10 flex justify-between items-center">
                            <img
                                src={company}
                                alt=""
                                className='rounded-4xl w-150 h-50'
                            />
                            <Gauge value={10} />
                        </div>
                        <div id="profile" className="p-5">
                            <h1 className="font-jersey text-5xl mb-10">PT. Indofood</h1>
                            <h1 className="font-jersey text-3xl">Lead Data Analyst</h1>

                            <div className="grid grid-cols-[200px_auto] gap-2 my-5 text-2xl">
                                <p className="font-jersey text-black/50">Categories</p>
                                <p className="font-jersey">: Teknologi Informasi</p>
                            </div>

                            <div className="grid grid-cols-[200px_auto] gap-2 my-5 text-2xl">
                                <p className="font-jersey text-black/50">Locations</p>
                                <p className="font-jersey">: Jakarta Barat</p>
                            </div>

                            <div className="grid grid-cols-[200px_auto] gap-2 my-5 text-2xl">
                                <p className="font-jersey text-black/50">Salary :</p>
                                <p className="font-jersey">: Rp 12.000.000 - 15.000.000</p>
                            </div>
                        </div>
                        <div id="description" className='p-5 text-2xl'>
                            <p className="font-jersey text-black/50">Description : </p>
                            <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores deleniti libero laboriosam deserunt. Alias numquam quam, minus error ea autem eum nesciunt fuga, sequi quaerat quo recusandae nobis laudantium iste.
                                Quam, ut officiis atque delectus velit magni incidunt, inventore ea voluptatibus esse adipisci tenetur consequuntur laborum ipsa. Veniam dolore reiciendis dolores quas laboriosam architecto unde accusantium enim itaque, sint nihil.
                                Eligendi voluptate, autem nihil accusamus saepe fugit vero commodi reprehenderit laborum cupiditate totam ducimus sint qui, earum voluptatem molestias quo. Nostrum, reprehenderit? Odit illum ipsa aliquid explicabo voluptatem illo tempora!
                                Voluptas, animi odit, sed hic placeat quidem neque molestiae aliquid quo distinctio eveniet sunt minus cumque quasi reprehenderit, earum vero libero nam commodi modi quae eligendi culpa. Cumque, praesentium architecto.
                                Voluptatem consequatur distinctio corrupti quae at vero ea nihil, placeat ex veritatis facilis commodi, minus nemo, ipsum aut deleniti esse earum culpa praesentium doloremque! Enim eos tenetur repellat quos sequi!</p>
                        </div>
                        <div id="selingpoints" className='p-5 text-2xl'>
                            <p className="font-jersey text-black/50">Selling Points : </p>
                            <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores deleniti libero laboriosam deserunt. Alias numquam quam, minus error ea autem eum nesciunt fuga, sequi quaerat quo recusandae nobis laudantium iste.
                                Quam, ut officiis atque delectus velit magni incidunt, inventore ea voluptatibus esse adipisci tenetur consequuntur laborum ipsa. Veniam dolore reiciendis dolores quas laboriosam architecto unde accusantium enim itaque, sint nihil.
                                Eligendi voluptate, autem nihil accusamus saepe fugit vero commodi reprehenderit laborum cupiditate totam ducimus sint qui, earum voluptatem molestias quo. Nostrum, reprehenderit? Odit illum ipsa aliquid explicabo voluptatem illo tempora!
                                Voluptas, animi odit, sed hic placeat quidem neque molestiae aliquid quo distinctio eveniet sunt minus cumque quasi reprehenderit, earum vero libero nam commodi modi quae eligendi culpa. Cumque, praesentium architecto.
                                Voluptatem consequatur distinctio corrupti quae at vero ea nihil, placeat ex veritatis facilis commodi, minus nemo, ipsum aut deleniti esse earum culpa praesentium doloremque! Enim eos tenetur repellat quos sequi!</p>
                        </div>
                        <div className='flex justify-center items-center'>

                            <button
                                type="submit"
                                className='p-5 font-jersey text-3xl bg-blue-700 rounded-3xl text-white w-150 my-10 cursor-pointer hover:bg-blue-500 hover:text-black hover:shadow-2xl'
                                
                                >
                                Apply This Job !!
                            </button>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default Recom
