import React from 'react';
import AssistantMessage from './messages/AssistantMessage';
import UserMessage from './messages/UserMessage';
import { useState } from 'react';
import { useEffect } from 'react';
import uniqid from 'uniqid';



function ChatBox({ setIsOnlineChat }) {

  const [messageInput, setMessageInput] = useState("")

  const [conversations, setConversations] = useState([{
    type: "options",
    sender: 'assistant',
    messages: [
      'Study Requirement',
      'Participant Recruitment',
      'Pricing & refund policy',
      'Verification process',
      'Data privacy',
      'Connect with a customer service agent',
    ],
  }]);

  useEffect(() => {

    const last = conversations[conversations.length - 1];

    if (last.sender === 'user') {
      handleNewMessage({ message: last?.messages[0] });
    }
  }, [conversations]);

  const addUserMessage = (message) => {
    const arr = conversations.slice();

    arr.push({
      sender: 'user',
      messages: [message],
    })

    setConversations(arr)

  }

  const restartConversation = () => {
    const arr = conversations.slice();

    arr.push({
      type: "options",
      sender: 'assistant',
      messages: [
        'Study Requirement',
        'Participant Recruitment',
        'Pricing & refund policy',
        'Verification process',
        'Data privacy',
        'Connect with a customer service agent',
      ],
    })

    setConversations(arr)
  }

  const handleNewMessage = ({ message }) => {

    if (!message) {
      return;
    }

    switch (message) {

      case 'Study Requirement':
        setConversations([...conversations, {
          type: "options",
          sender: 'assistant',
          messages: ["How to create new study?", "Update your study requirement", "How to delete a study?"]
        }])
        break;

      case 'Participant Recruitment':
        setConversations([...conversations, {
          type: "options",
          sender: 'assistant',
          messages: ["How to recruit participants?", "Update your participant recruitment", "How to delete a participant?"]
        }])
        break;

      case 'Pricing & refund policy':
        setConversations([...conversations, {
          type: "options",
          sender: 'assistant',
          messages: ["How to set pricing?", "Update your refund policy", "How to delete a pricing?"]
        }])
        break;

      case 'Verification process':
        setConversations([...conversations, {
          type: "options",
          sender: 'assistant',
          messages: ["How to verify a participant?", "Update your verification process", "How to delete a verification process?"]
        }])
        break;

      case 'Data privacy':
        setConversations([...conversations, {
          type: "options",
          sender: 'assistant',
          messages: ["How to set data privacy?", "Update your data privacy", "How to delete a data privacy?"]
        }])
        break;

      case 'How to create new study?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To create a new study, go to the dashboard and click on the 'Create Study' button.", "back"]
        }])
        break;

      case 'Update your study requirement':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To update your study requirement, go to the dashboard and click on the 'Update Study' button.", "back"]
        }])
        break;

      case 'How to delete a study?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To delete a study, go to the dashboard and click on the 'Delete Study' button.", "back"]
        }])
        break;

      case 'How to recruit participants?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To recruit participants, go to the dashboard and click on the 'Recruit Participants' button.", "back"]
        }])
        break;

      case 'Update your participant recruitment':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To update your participant recruitment, go to the dashboard and click on the 'Update Recruitment' button.", "back"]
        }])
        break;

      case 'How to delete a participant?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To delete a participant, go to the dashboard and click on the 'Delete Participant' button.", "back"]
        }])
        break;

      case 'How to set pricing?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To set pricing, go to the dashboard and click on the 'Set Pricing' button.", "back"]
        }])
        break;

      case 'Update your refund policy':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To update your refund policy, go to the dashboard and click on the 'Update Refund Policy' button.", "back"]
        }])
        break;

      case 'How to delete a pricing?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To delete a pricing, go to the dashboard and click on the 'Delete Pricing' button.", "back"]
        }])
        break;

      case 'How to verify a participant?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To verify a participant, go to the dashboard and click on the 'Verify Participant' button.", "back"]
        }])
        break;

      case 'Update your verification process':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To update your verification process, go to the dashboard and click on the 'Update Verification Process' button.", "back"]
        }])
        break;

      case 'How to delete a verification process?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To delete a verification process, go to the dashboard and click on the 'Delete Verification Process' button.", "back"]
        }])
        break;

      case 'How to set data privacy?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To set data privacy, go to the dashboard and click on the 'Set Data Privacy' button.", "back"]
        }])
        break;

      case 'Update your data privacy':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To update your data privacy, go to the dashboard and click on the 'Update Data Privacy' button.", "back"]
        }])
        break;

      case 'How to delete a data privacy?':
        setConversations([...conversations, {
          type: "information",
          sender: 'assistant',
          messages: ["To delete a data privacy, go to the dashboard and click on the 'Delete Data Privacy' button.", "back"]
        }])
        break;

      case 'Connect with a customer service agent':
        alert('Connecting you with a customer service agent.')
        setIsOnlineChat(true)

      case 'back':
        restartConversation()
        break;

      default:
        setConversations([...conversations, {
          type: "error",
          sender: 'assistant',
          messages: ["Invalid Input."]
        }])
        break;
    }

  }


  return (
    <div className=' h-screen w-full mt-2'>
      <div className="chat-box w-full px-7 pb-28 mt-24 flex flex-col gap-3">
        <div className='mb-4'>
          <h1 id='heading-1' className='text-[32px] font-bold leading-[38.4px] -tracking-wide text-left text-gray-400'>Hello there</h1>
          <h1 id='heading-1' className='text-[32px] font-bold leading-[38.73px] tracking-[-0.026em] text-left text-blue-500'>How can we help you?</h1>
        </div>
        {conversations.map((conversation, index) => {
          if (conversation?.sender === 'assistant') {
            return (
              <AssistantMessage
                key={uniqid()}
                type={conversation?.type}
                restartConversation={restartConversation}
                addUserMessage={addUserMessage}
                messages={conversation?.messages}
              />
            )
          } else {
            return (
              <UserMessage key={uniqid()} messages={conversation.messages} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ChatBox