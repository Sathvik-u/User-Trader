import React from 'react'
import { Outlet } from 'react-router-dom';
import NaviBar from './NaviBar';
import Footer from './Footer';

function RootLayout() {
  return (
    <div>
        <NaviBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout