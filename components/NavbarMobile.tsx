import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'

import MenuIcon from "@/public/menu.svg"
import MenuCloseIcon from "@/public/menu-close.svg"

type Props = {
    isOpen: boolean
    toggle: () => void
}

const NavbarMobile: FC<Props> = ({ isOpen, toggle }) => {
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
                <button onClick={toggle}>
                    <Image
                        priority
                        src={isOpen ? MenuCloseIcon : MenuIcon}
                        alt='Menu'
                        className='p-1 w-9 h-9 rounded-lg'
                    />
                </button>
                {isOpen ?
                    <div className='absolute top-20 left-0 w-full h-96 z-10 flex flex-col items-center justify-center gap-10 bg-opacity-0'>
                        <Link
                            onClick={toggle}
                            className='text-xl font-bold underline p-2 rounded-xl w-1/2 text-center'
                            href='/'
                        >
                            Home
                        </Link>
                        <Link
                            onClick={toggle}
                            className='text-xl font-bold underline p-2 rounded-xl w-1/2 text-center'
                            href='/about'
                        >
                            About
                        </Link>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default NavbarMobile
