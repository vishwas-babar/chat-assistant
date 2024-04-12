import React from 'react'
import uniqid from 'uniqid';

function UserMessage({ messages }) {
  return (
    <div className='w-full flex justify-end'>
        {messages?.map((message, index) => (
            <p key={uniqid} className='  bg-gray-400 text-white font-semibold rounded-md px-3 py-1 max-w-[70%]'>{message}</p>
        ))}
    </div>
  )
}

export default UserMessage