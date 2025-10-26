import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../Components/Fixed/NavBar'
import Footer from '../Components/Fixed/Footer'

const RootLayouts = () => {
    return (
        <div>
            <NavBar />

            <Outlet />

            <Footer />

        </div>
    )
}

export default RootLayouts
