import type { Metadata } from "next";
import './main.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="text-[12px] sm:text-[16px]">
            <body className="bg-black">
                <div className="container">
                    {children}
                </div>
            </body>
        </html>
    );
}
