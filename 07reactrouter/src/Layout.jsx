import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <header />
    <Outlet />
    <footer />

    </>
  )
}

export default Layout