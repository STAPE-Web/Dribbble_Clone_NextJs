import { ArrowCircleUpIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import Filter from '../components/Filter'
import Header from '../components/Header'
import Short from '../components/Short'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dribbble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Filter />
      <Short />
      <Link href='#'>
        <ArrowCircleUpIcon className='h-[50px] opacity-80 hover:opacity-100 cursor-pointer fixed bottom-2 right-2 onTop' />
      </Link>
    </div>
  )
}
