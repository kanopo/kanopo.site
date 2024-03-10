'use client'
import { FC } from "react"

type Props = {
}

const Page: FC<Props> = () => {
    return (
        <div className="w-11/12 mx-auto flex items-center justify-center h-5/6">
            <button onClick={() => {
                alert("This is a joke, don't close the tab")
            }}>
                <p className="text-4xl font-bold underline">:qa!</p>
            </button>
        </div>
    )
}

export default Page;
