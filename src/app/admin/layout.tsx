import React, { PropsWithChildren } from 'react'
import { AdminLayout } from './components/admin-layout'


export default function Layout(props : PropsWithChildren) {
  return (
    <AdminLayout>
        {props.children}
    </AdminLayout>
  )
}
