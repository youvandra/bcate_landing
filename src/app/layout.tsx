"use client";

import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { MetaMaskProvider } from 'metamask-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bcate',
  description: 'Bcate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <MetaMaskProvider>
        <body className={`${inter.className} flex flex-col m-auto`}>
          <Header />
          <div className='grow min-h-screen'>

            {children}

          </div>
          <Footer />
        </body>
      </MetaMaskProvider>
    </html>
  )
}
