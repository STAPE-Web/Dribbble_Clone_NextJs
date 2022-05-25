import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { Users } from '../Objects'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const Header = () => {

    const router = useRouter()
    const input = useRef(null)

    const submit = (e) => {
        e.preventDefault()

        const q = input.current.value
        router.push(`/search?q=${q}`)
    }

    return (
        <header className='flex justify-between items-center py-[20px] px-[16px] border-b w-screen border-gray-100 select-none'>
            <div className='flex items-center gap-[32px]'>
                <Link href='/'>
                    <Image src={require('../assets/Logo.svg')} height={30} width={70} className='hover:opacity-50 cursor-pointer' />
                </Link>
                <ul className='hidden lg:flex list font-medium items-center gap-[32px]'>
                    <li>Inspiration</li>
                    <li>Find Work</li>
                    <li>Learn Design</li>
                    <li>Go Pro</li>
                    <li>Marketplace</li>
                    <li>Hire Designers</li>
                </ul>
            </div>
            <div className='flex items-center gap-[16px]'>
                <form className='FormBg flex items-center gap-[10px] py-[7px] px-[10px] rounded-lg' onSubmit={submit}>
                    <SearchIcon className='h-[20px] w-[20px] TextIcons' />
                    <input ref={input} type="text" placeholder='Search' className='bg-transparent font-medium max-w-[70px]' />
                </form>
                <Link href='/users?name=STAPE'>
                    <Image src={Users.STAPE.avatar} width={32} height={32} className='cursor-pointer rounded-full' />
                </Link>
                <Link href='/upload'>
                    <button className='py-[10px] px-[16px] button text-white rounded-lg font-medium text-[14px]'>Upload</button>
                </Link>
            </div>
        </header >
    )
}

export default Header