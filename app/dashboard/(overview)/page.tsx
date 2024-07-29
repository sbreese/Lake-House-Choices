import CardWrapper from '@/app/ui/dashboard/cards' // Group Components to prevent Popping Effect as the cards load in
// import { Card } from '@/app/ui/dashboard/cards' Remove in favor of Grouping components
import RevenueChart from '@/app/ui/dashboard/revenue-chart'
import LatestInvoices from '@/app/ui/dashboard/latest-invoices'
import { lusitana } from '@/app/ui/fonts'
import { Suspense } from 'react'
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton
} from '@/app/ui/skeletons'

export default async function Page() {
  // const revenue = await fetchRevenue(); data is imported directly in component with Suspense!
  // const latestInvoices = await fetchLatestInvoices();  data is imported directly in component with Suspense!
  /* const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData()
   // removed in favor of Grouping Component
   */
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/* <Card title='Collected' value={totalPaidInvoices} type='collected' />
        <Card title='Pending' value={totalPendingInvoices} type='pending' />
        <Card title='Total Invoices' value={numberOfInvoices} type='invoices' />
        <Card
          title='Total Members'
          value={numberOfCustomers}
          type='members'
        /> removed in favor of Group Component */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        {/* <RevenueChart revenue={revenue}  /> Non-Suspense component. Note that prop is used for synchronous component */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}
