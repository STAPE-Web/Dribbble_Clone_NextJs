import { ArrowCircleUpIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Short from '../components/Short'
import { change, selectUser } from '../slices/userSlice'
import { useRouter } from 'next/router'
import Info from '../components/Info'

export default function Users() {

    const user = useSelector(selectUser)
    const router = useRouter()
    const dispatch = useDispatch()
    dispatch(change(router.query.name))

    const categories = [
        {
            id: 1,
            name: 'Shots',
            num: 12
        },
        {
            id: 2,
            name: 'Boosted Shots',
            num: 0
        },
        {
            id: 3,
            name: 'Collections',
            num: 0
        },
        {
            id: 4,
            name: 'Liked Shots',
            num: 7
        },
        {
            id: 4,
            name: 'About',
        },
    ]

    return (
        <div>
            <Head>
                <title>{user} | Dribbble</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Info />
            <div className='border-b px-[10%] flex items-center gap-[20px] py-[15px]'>
                {categories.map((cat) => (
                    <div key={cat.id} className='flex items-center gap-[8px]'>
                        <h2 className='list font-medium'>{cat.name}</h2>
                        <p className='TextIcons'>{cat.num}</p>
                    </div>
                ))}
            </div>
            <Short />
            <Link href='#'>
                <ArrowCircleUpIcon className='h-[50px] opacity-80 hover:opacity-100 cursor-pointer fixed bottom-2 right-2 onTop' />
            </Link>
        </div>
    )
}
