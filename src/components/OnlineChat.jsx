import React from 'react'

function OnlineChat() {
    return (
        <div className=' h-screen  w-full mt-2'>
            <div className="chat-box w-full px-7 pb-44 mt-24 flex flex-col gap-3 ">
                <p className='mt-20 text-center'>You are connected with our customer executive, now you can ask your queries.</p>

                <div className='flex gap-3 left-1/2 -translate-x-1/2 w-fit fixed bottom-24 justify-between '>
                    
                        <input type="text" className='w-80 border border-gray-300 rounded-md p-2' placeholder='Type your message here' />
                    
                    <div className=' flex items-center justify-center'>
                        <i className='bx bx-send text-blue-500 text-2xl'></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OnlineChat