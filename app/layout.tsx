import type { Metadata } from "next";
import './main.css'

export const metadata: Metadata = {
    title: "Caleb And Amaya",
    description: "Caleb And Amaya Wedding invitation",
};

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
