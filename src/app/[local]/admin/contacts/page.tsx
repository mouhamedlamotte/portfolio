"use client"

import React from 'react'
import { ContactsTable } from './components/table/data-table';
import { contactColumns } from './components/table/colunms';
import { Card, CardContent } from '@/components/ui/card';
import { z } from 'zod';
import { ContactformSchema } from '@/app/[local]/portfolio/schemas/contactFormSchema';
import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from '@/lib/axios';

const Contatcs = () => {

  const { data: contacts } = useQuery<z.infer<typeof ContactformSchema>[]>({
    queryKey: ['contacts'],
    queryFn: async() => {
      return await AxiosInstance.get('/contacts').then(res => res.data)
    }
  })

  
  return (
    <div className='space-y-4'>
      <h3 className='text-2xl font-bold'>Contact</h3>
      <Card className='rounded-md'>
        <CardContent>
      <ContactsTable columns={contactColumns} data={contacts as unknown as z.infer<typeof ContactformSchema>[] ?? []} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Contatcs