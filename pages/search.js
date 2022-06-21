import { ArrowCircleUpIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import Filter from '../components/Filter'
import Header from '../components/Header'
import Short from '../components/Short'
import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/outline'
import { useRef } from 'react'

export default function Search() {
    const router = useRouter()
    const input = useRef()
    const submit = (e) => {
        e.preventDefault()

        const q = input.current.value
        router.push(`/search?q=${q}`)
    }

    return (
        <div>
            <Head>
                <title>{router.query.q} | Dribbble</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className='w-screen FilterBg h-[80px]' />
            <div className='w-screen flex items-center flex-col'>
                <form className='flex items-center w-[500px] shadow h-[64px] bg-white rounded-lg px-[20px] gap-[20px] mt-[-32px]' onSubmit={submit}>
                    <SearchIcon className='h-[20px] TextIcons' />
                    <input ref={input} type='search' placeholder={router.query.q} className='w-full' />
                </form>
                <h1 className='mt-[30px] font-bold text-[32px]'>{router.query.q}</h1>
            </div>

            <Filter />
            <Short />
            <Link href='#'>
                <ArrowCircleUpIcon className='h-[50px] opacity-80 hover:opacity-100 cursor-pointer fixed bottom-2 right-2 onTop' />
            </Link>
        </div>
    )
}
