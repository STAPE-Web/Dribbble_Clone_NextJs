import Image from 'next/image'
import { Users } from '../Objects'

const Info = () => {
    return (
        <div className='flex w-screen items-center justify-center my-[60px] gap-[40px]'>
            <Image src={Users.STAPE.avatar} width={120} height={120} className='rounded-full' />
            <div>
                <h1 className='text-[32px] black font-bold'>{Users.STAPE.name}</h1>
                <p>{Users.STAPE.location}</p>
                <p className='TextIcons'>{Users.STAPE.skills}</p>
                <button className='font-medium black text-[14px] py-[5px] px-[16px] rounded-lg border-[3px] borderApp mt-[15px]'>Edit Profile</button>
            </div>
        </div>
    )
}

export default Info