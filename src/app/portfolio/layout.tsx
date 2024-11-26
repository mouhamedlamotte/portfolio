import React, { PropsWithChildren } from 'react'
import { Navbar } from './components/navbar'

const Layout = (props : PropsWithChildren) => {
  return (
    <div className='space-y-24'>
        <Navbar />
        <main className='space-y-24'>
        {props.children}
        </main>
    </div>
  )
}

export default Layout