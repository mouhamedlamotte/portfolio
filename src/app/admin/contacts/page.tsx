import { getContacts } from '@/db/contacts'
import React from 'react'
import { ContactsTable } from './components/table/data-table';
import { contactColumns } from './components/table/colunms';
import { Card, CardContent } from '@/components/ui/card';
import { z } from 'zod';
import { ContactformSchema } from '@/app/portfolio/schemas/contactFormSchema';

const Contatcs = async () => {

  const contacts = await getContacts()

  return (
    <div className='space-y-4'>
      <h3 className='text-2xl font-bold'>Contact</h3>
      <Card className='rounded-md'>
        <CardContent>
      <ContactsTable columns={contactColumns} data={[...contacts] as unknown as z.infer<typeof ContactformSchema>[]} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Contatcs