import React from 'react'
import logo from "../assets/logo-1.png";
import oneImg from "../assets/one.png";
import twoImg from "../assets/two.png";
import threeImg from "../assets/theree.png";

function GradientDiv() {
  return (
    <div id='gradient-div' className='w-full  h-[400px] bg-black blur-border backdrop:blur-lg flex flex-col justify-between pb-6'>
      <div className=' flex justify-start w-[322px] mt-8 mx-auto'>
        <div className=' h-10 w-10 mr-10'>
          <img src={logo} alt="" />
        </div>
        <div className="flex -space-x-1 ml-6 rtl:space-x-reverse">
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={oneImg} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={twoImg} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={threeImg} alt="" />
        </div>

      </div>


      <div>

        <div className=' ml-10 mb-4'>
          <h1 id='heading-1' className='text-[32px] font-bold leading-[38.4px] -tracking-wide text-left text-gray-400'>Hello there</h1>
          <h1 id='heading-1' className='text-[32px] font-bold leading-[38.73px] tracking-[-0.026em] text-left text-slate-200'>How can we help?</h1>
        </div>

        <div className='w-[90%] m-auto bg-white py-[18px] px-[20px] rounded-md flex flex-col shadow-custom-1'>
          <h2 className=' font-bold'>Recent message</h2>
          <div className='mt-3 w-full flex justify-between'>
            <div className='flex items-center'>
              <div className="flex flex-col w-fit min-w-20 -space-y-3 items-center ml-0 rtl:space-x-reverse">
                <img className="w-9 h-9 border-2 border-white rounded-full dark:border-gray-800" src={oneImg} alt="" />
                <div className='flex -space-x-1'>
                  <img className="w-9 h-9 border-2 border-white rounded-full dark:border-gray-800" src={twoImg} alt="" />
                  <img className="w-9 h-9 border-2 border-white rounded-full dark:border-gray-800" src={threeImg} alt="" />
                </div>
              </div>

              <div className='ml-2 mt-2'>
                <p className='text-sm font-normal leading-[16.94px] text-left text-black text-wrap'>No problem. Just chat in below if you...</p>
                <span className='text-sm font-normal leading-[16.94px] tracking-[-0.01em] text-left text-gray-600'> Intercom · 1h ago</span>
              </div>
            </div>

            <div className='h-full flex items-center justify-center'>
              <i className='bx bx-chevron-right text-blue-600 text-2xl mt-3'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientDiv