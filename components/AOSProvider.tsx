"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AOSProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
      easing: "ease-in-out"
    });
    setTimeout(() => {
      AOS.refresh();
    }, 2000);
  }, [])

    return <>{children}</>
}