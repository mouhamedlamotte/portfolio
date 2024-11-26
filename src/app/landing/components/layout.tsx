import React, { PropsWithChildren } from 'react'
import { Navbar } from './navbar'

const Layout = (props : PropsWithChildren) => {
  return (
    <div>
        <Navbar />
        {props.children}
    </div>
  )
}

export default Layout