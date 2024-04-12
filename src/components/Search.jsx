import React from 'react'

function Search() {
    return (
        <div className='w-[90%] rounded-md shadow-custom-1 p-3 mt-10 mx-auto'>
            <div className="relative">
                <input type="search" id="search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Seach for help" required />
                <div className="pointer-events-none absolute inset-y-0 end-3 flex items-center ps-3">
                    <svg className="h-4 w-4 text-blue-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </div>
            <div className=" flex flex-col mt-5 px-3 bg-transparent">
                <SearchElement text='Send custom user attributes to Intercom' />
                <SearchElement text='Tickets explained' />
                <SearchElement text='Tickets explained' />
                <SearchElement text='Tickets explained' />
            </div>
        </div>
    )
}

function SearchElement({ text="" }) {
    return (
        <div className='flex items-center justify-between bg-transparent'>
        <p className='text-sm font-normal leading-[16.94px] tracking-[-0.01em] text-left'>{text}</p>
        <div className=' h-full flex items-center justify-center'>
            <i className='bx bx-chevron-right text-blue-600 text-2xl'></i>
        </div>
    </div>
    )
}

export default Search