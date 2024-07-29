import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '@/app/ui/members/table'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Members'
}

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''

  const members = await fetchFilteredCustomers(query)

  return (
    <main>
      <CustomersTable members={members} />
    </main>
  )
}
