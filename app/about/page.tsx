'use client'
import { FC } from "react"
import Favicon from "../../public/favicon.ico"
import Image from "next/image"

type Props = {
}

const Page: FC<Props> = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-8 items-center justify-center h-5/6">
            <a
                href="https://github.com/kanopo"
                target="_blank"
            >
                <Image
                    width={666}
                    height={666}
                    src={Favicon}
                    alt="Logo"
                    className="rounded-full border-4 border-[#ac1d02]"
                />
            </a>
            <button onClick={() => {
                alert("Unfortunately, I can't do that. (Touch the image)")
            }}>
                <p className="text-4xl font-bold underline">Click me</p>
            </button>
        </div>
    )
}

export default Page;
