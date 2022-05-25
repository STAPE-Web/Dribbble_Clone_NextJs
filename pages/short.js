import Head from 'next/head'
import { XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectShort } from '../slices/userSlice'

export default function Short() {

    const router = useRouter()
    const short = useSelector(selectShort)

    return (
        <div>
            <Head>
                <title>{short.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='bgShort'>
                <div className='w-screen p-[10px] flex items-center justify-end'>
                    <XIcon className='h-[25px] close cursor-pointer' onClick={() => router.back()} />
                </div>
                <div className='rounded-t-lg w-screen bg-white py-[50px]'>
                    <div className='items-center mx-auto flex gap-[50px] flex-col'>
                        <div className='flex items-center gap-[10px] w-[750px]'>
                            <Image src={short.autor.avatar} width={50} height={50} />
                            <div>
                                <h1 className='font-bold'>{short.name}</h1>
                                <p>{short.autor.name}</p>
                            </div>
                        </div>
                        <div>
                            <Image src={short.preview} width={750} height={600} className='rounded-lg' />
                        </div>
                        <p className='w-[750px]'>{short.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
