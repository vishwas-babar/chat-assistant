import React from 'react'
import { ChatBox, OnlineChat } from '../components/index.js'
import logo from "../assets/logo-1.png";
import oneImg from "../assets/one.png";
import twoImg from "../assets/two.png";
import threeImg from "../assets/theree.png";
import { useState } from 'react';

function Messages() {

  const [isOnlineChat, setIsOnlineChat] = useState(false)

  return (
    <div>
      <div id='gradient-div'  className=' flex fixed z-20 h-20 items-center justify-around w-full top-0 mx-auto'>
        <div className=' h-10 w-10 mr-10'>
          <img src={logo} alt="" />
        </div>
        <div className="flex -space-x-1 ml-6 rtl:space-x-reverse">
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={oneImg} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={twoImg} alt="" />
          <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={threeImg} alt="" />
        </div>

      </div>

      {isOnlineChat ? <OnlineChat /> : <ChatBox setIsOnlineChat={setIsOnlineChat} />}
    </div>
  )
}

export default Messages