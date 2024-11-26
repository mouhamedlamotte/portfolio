import { getContacts } from '@/db/contacts'
import React from 'react'
import { ContactsTable } from '../components/table/data-table';
import { contactColumns } from '../components/table/colunms';
import { Card, CardContent } from '@/components/ui/card';

const Contatcs = async () => {

  const contacts = await getContacts()

  console.log(contacts);
  

  return (
    <div className='space-y-4'>
      <h3 className='text-2xl font-bold'>Contact</h3>
      <Card className=''>
        <CardContent>
      <ContactsTable columns={contactColumns} data={contacts} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Contatcs