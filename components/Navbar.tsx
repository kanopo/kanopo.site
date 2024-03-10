import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
}

const Navbar: FC<Props> = () => {
    return (
        <div
            className='w-11/12 mx-auto h-20 flex flex-row items-center justify-between'
        >
            <div>
                <Link
                    className='text-2xl font-bold underline rounded-xl p-2'
                    href='/'
                >
                    Kanopo
                </Link>
            </div>
            <div className='w-1/3 flex flex-row items-center justify-end gap-x-10'>
                <Link
                    className='text-xl font-bold underline p-2 rounded-xl'
                    href='/'
                >
                    Home
                </Link>
                <Link
                    className='text-xl font-bold underline p-2 rounded-xl'
                    href='/about'
                >
                    About
                </Link>
            </div>
        </div>
    )
}

export default Navbar
