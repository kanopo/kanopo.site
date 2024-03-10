import { FC } from "react"
import Favicon from "../../public/favicon.ico"
import Image from "next/image"

type Props = {
}

const Page: FC<Props> = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-8 items-center justify-center h-5/6">
            <Image
                width={666}
                height={666}
                src={Favicon}
                alt="Logo"
                className="rounded-full"
            />
            <p className="text-4xl font-bold underline">:qa!</p>
        </div>
    )
}

export default Page;
