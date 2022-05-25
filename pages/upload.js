import Head from 'next/head'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Upload() {

    const [input, setInput] = useState('')
    const [textarea, setTextarea] = useState('')
    const [button, setButton] = useState(true)
    const [drag, setDrag] = useState(false)

    const router = useRouter()
    const push = () => {
        router.push('/')
    }

    useEffect(() => {
        if (input && textarea != '') {
            setButton(false)
        }
    })

    const dragStartHandler = (e) => {
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler = (e) => {
        e.preventDefault()
        setDrag(false)
    }

    const drop = (e) => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files);
    }

    return (
        <div>
            <Head>
                <title>Dribbble | Upload</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className='w-srceen flex justify-between p-[24px]'>
                <button onClick={push} className='font-medium black text-[14px] py-[5px] px-[16px] rounded-lg border-[3px] borderApp'>Cancel</button>
                <button disabled={button} onClick={push} className='font-medium text-white text-[14px] py-[5px] px-[16px] rounded-lg button'>Continue</button>
            </div>
            <div className='w-[40%] mx-auto'>
                <input placeholder='Give me a name' value={input} onChange={e => setInput(e.target.value)} className='text-[24px] font-bold my-[48px] w-full' />
                <input type='file' id='file' className='hidden' />
                <label
                    htmlFor='file'
                    className='upload rounded-lg flex justify-center flex-col items-center p-[15%] text-center cursor-pointer'
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => drop(e)}
                >
                    <Image src='https://dribbble.com/assets/packs/media/assets/images/picture-placeholder-3b3bb1c9c8717331520e1d94512b3aed.png' width={80} height={85} />
                    <h1 className='black text-[18px] my-[20px]'>Drag and drop an image, or <span className='color'>Browse</span></h1>
                    <p>1600x1200 or higher recommended. Max 10MB each (20MB for videos)</p>
                </label>
                <textarea
                    value={textarea}
                    onChange={e => setTextarea(e.target.value)}
                    placeholder='Write what went into this shot, and anything else you’d like to mention'
                    className='text-[18px] my-[48px] w-full resize-none h-[200px]'>
                </textarea>
            </div>
        </div>
    )
}
