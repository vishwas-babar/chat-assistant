import React from 'react';
import { NavLink } from 'react-router-dom';


function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 h-20 w-full border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700">
      <div className="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
        <NavLink
          to={'/'}
          type="button"
          className={({ isActive }) => `group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <i className='bx bxs-home-smile mb-2 h-5 w-5 text-xl'></i>
          <span className="text-sm">
            Home
          </span>
        </NavLink>
        <NavLink
          to={'/messages'}
          type="button"
          className={({ isActive }) => `group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <i className='bx bx-message-detail mb-2 h-5 w-5 text-xl'></i>
          <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500">
            Messages
          </span>
        </NavLink>
        <NavLink
          to={'/Help'}
          type="button"
          className={({ isActive }) => `group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <i className='bx bx-help-circle mb-2 h-5 w-5 text-xl ' ></i>
          <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500">
            Help
          </span>
        </NavLink>
        <NavLink
          to={'/News'}
          type="button"
          className={({ isActive }) => `group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <i className='bx bx-news mb-2 h-5 w-5 text-xl ' ></i>
          <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500">
            News
          </span>
        </NavLink>
      </div>
    </div>

  )
}

export default BottomNav;