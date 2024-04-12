import React from 'react'
import { Blur, GradientDiv, Search } from '../components/index.js'

function Home() {
    return (
        <>
            {/* <Blur /> */}
            <GradientDiv />

            <div className=' w-[90%] shadow-custom-1 mt-9 flex justify-between items-center mx-auto py-[18px] bg-slate-100 rounded-md px-[20px]'>
                <div>
                    <h2 className='text-sm leading-[16.94px] font-bold tracking-[-0.01em] text-left'>Send us a message</h2>
                    <p className='text-sm font-normal leading-[16.94px] tracking-[-0.01em] text-left'>We typically reply in a few minutes</p>
                </div>
                <div className=' h-full flex items-center'>
                    <i className='bx bx-send text-blue-600 text-xl' ></i>
                </div>
            </div>

            <Search />
        </>
    )
}

export default Home