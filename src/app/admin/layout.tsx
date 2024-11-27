import React, { PropsWithChildren, Suspense } from 'react'
import { AdminLayout } from './components/admin-layout'


export default function Layout(props : PropsWithChildren) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <AdminLayout>
        {props.children}
    </AdminLayout>
    </Suspense>
  )
}
