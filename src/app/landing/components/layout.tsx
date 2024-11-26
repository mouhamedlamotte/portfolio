import React, { PropsWithChildren } from 'react'
import { Navbar } from './navbar'

const Layout = (props : PropsWithChildren) => {
  return (
    <div className='space-y-24'>
        <Navbar />
        {props.children}
    </div>
  )
}

export default Layout