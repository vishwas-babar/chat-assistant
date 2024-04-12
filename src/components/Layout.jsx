import React from 'react'
import BottomNav from './BottomNav'
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <Outlet />
            <BottomNav />

        </>
    )
}

export default Layout