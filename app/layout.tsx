import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/layout/Navbar/Navbar'
import style from "@/sass/layouts/RootLayout.module.scss"


export const metadata: Metadata = {
  title: 'Ser no mundo',
  description: 'Psicologia Clínica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className={style.RootLayout}>
          <Navbar/>
          <div className={style.childrenContainer}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
