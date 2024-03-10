import { Metadata } from "next";
import "./globals.css";
import { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import dynamic from 'next/dynamic'
const NavigationSSR = dynamic(() => import('@/components/Navigation'), { ssr: false })

export const metadata: Metadata = {
    title: "Kanopo",
    description: ":qa!"
}

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <NavigationSSR />
                {children}
            </body>
        </html>
    )
}

export default Layout;
