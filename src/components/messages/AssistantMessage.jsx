import React from 'react'
import uniqid from 'uniqid';

function AssistantMessage({ messages, type, restartConversation, addUserMessage }) {

  if (type === 'information') {
    return (
      <div className='w-full flex justify-start flex-col items-start gap-1'>
        <p
          className=' border border-spacing-2 w-fit border-blue-500  font-semibold text-blue-500 rounded-md px-3 py-1 max-w-[70%]'
        >{messages[0]}</p>
        <p
          onClick={restartConversation}
          className=' border border-spacing-2 w-fit border-blue-500  font-semibold text-blue-500 rounded-md px-3 py-1 max-w-[70%]'
        >Back</p>
      </div>
    )
  }

  if (type === 'error') {
    return (
      <div className='w-full flex justify-start flex-col items-start gap-1'>
        <p
          className=' border border-spacing-2 w-fit border-red-500  font-semibold text-red-500 rounded-md px-3 py-1 max-w-[70%]'
        >{messages[0]}</p>
        <p
          onClick={restartConversation}
          className=' border border-spacing-2 w-fit border-blue-500  font-semibold text-blue-500 rounded-md px-3 py-1 max-w-[70%]'
        >Back</p>
      </div>
    )
  }

  if (type === 'options') {
    return (
      <div className='w-full flex justify-start flex-col items-start gap-1'>
        {messages?.map((message, index) => (
          <p
            key={uniqid()}
            onClick={() => {
              console.log(message)
              addUserMessage(message)
            }}
            className=' border border-spacing-2 w-fit border-blue-500  font-semibold text-blue-500 rounded-md px-3 py-1 max-w-[70%]'>{message}</p>
        ))}
      </div>
    )
  }
}

export default AssistantMessage