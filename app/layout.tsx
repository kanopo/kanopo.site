import { Metadata } from "next";
import "./globals.css";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
    title: "Kanopo",
    description: ":p"
}

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default Layout;
