import React, { PropsWithChildren } from 'react'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import Intercom from '@intercom/messenger-js-sdk'

const Layout = (props : PropsWithChildren) => {






  return (
    <div className=''>
        <Navbar />
        <div className='space-y-10'>
        <main className='space-y-24 mt-6'>
        {props.children}
        <Footer />
        </main>
        </div>
    </div>
  )
}

export default Layout