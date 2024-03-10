import { Metadata } from "next";
import "./globals.css";
import { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

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
                <Navigation />
                {children}
            </body>
        </html>
    )
}

export default Layout;
