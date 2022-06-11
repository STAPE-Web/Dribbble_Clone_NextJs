import { Shorts } from "../Objects"
import Image from 'next/image'
import { EyeIcon, HeartIcon } from "@heroicons/react/solid"
import Link from 'next/link'
import { useDispatch } from "react-redux"
import { shortChange } from "../slices/userSlice"

const Short = () => {

    const dispatch = useDispatch()
    const ChangeShort = (short) => {
        dispatch(
            shortChange({
                preview: short.preview,
                name: short.name,
                autor: {
                    name: short.autor.name,
                    avatar: short.autor.avatar
                },
                description: short.description
            }))
    }

    return (
        <div className="py-[32px] w-screen flex flex-wrap justify-center hortGrid gap-[36px] px-[10px] lg:px-[72px]">
            {Shorts.map((short) => (
                <Link href={`/short`} key={short.id}>
                    <div className='group cursor-pointer' onClick={() => ChangeShort(short)}>
                        <Image src={short.preview} width={365} height={275} className='rounded-lg' />
                        <div className="hidden absolute group-hover:block w-[365px] mt-[-70px] rounded-b-lg text-white short p-[20px]">
                            <h1 className='line-clamp-1'>{short.name}</h1>
                        </div>
                        <div className="flex items-center justify-between" onClick={e => e.stopPropagation()}>
                            <Link href={`/users?name=${short.autor.name}`}>
                                <div className="flex items-center gap-[5px]">
                                    <Image src={short.autor.avatar} width={24} height={24} className='rounded-full' />
                                    <h1 className="font-medium black">{short.autor.name}</h1>
                                </div>
                            </Link>
                            <div className="flex items-center TextIcons gap-[5px]">
                                <div className="flex items-center gap-[3px]">
                                    <HeartIcon className="w-[14px]" />
                                    <p className="stats font-bold text-[12px]">{short.likes}</p>
                                </div>
                                <div className="flex items-center gap-[3px]">
                                    <EyeIcon className="w-[14px]" />
                                    <p className="stats font-bold text-[12px]">{short.views}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Short
