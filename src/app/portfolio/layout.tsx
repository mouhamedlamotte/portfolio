import React, { PropsWithChildren } from 'react'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

const Layout = (props : PropsWithChildren) => {


  return (
    <div className='space-y-24'>
        <Navbar />
        <main className='space-y-24'>
        {props.children}
        <Footer />
        </main>
    </div>
  )
}

export default Layout