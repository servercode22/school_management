import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import welcome from "../app/welcome/page";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'School System',
  description: 'School Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      
        
        </body>
        
    </html>
  )
}
