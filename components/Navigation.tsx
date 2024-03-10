'use client'

import { FC, useState } from 'react'
import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'

type Props = {}
const Navigation: FC<Props> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggle = () => setIsOpen(!isOpen)
    // if (typeof window === 'undefined') {
    //     return <div></div>
    // }

    if (window.matchMedia('(max-width: 640px)').matches) {
        // If the viewport is less than 640px
        return (
            <div>
                <NavbarMobile toggle={toggle} isOpen={isOpen} />
            </div>
        )
    }
    else {
        // If the viewport is greater than 640px
        return (
            <div>
                <Navbar setIsOpen={setIsOpen} />
            </div>
        )
    }
}

export default Navigation

