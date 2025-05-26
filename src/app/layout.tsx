import React from 'react'
import { Lato, Roboto_Slab, Roboto_Mono } from 'next/font/google'
import "./globals.css";

import Header from '@/components/header/Header'
import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'
import { Metadata } from 'next'

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100', '300', '400']
})

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: '100'
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: '300'
})

export const metadata: Metadata = {
  title: "Douglas de Freitas",
  description: "Developer Homepage",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${robotoSlab.variable} ${robotoMono.variable}`}>
        <div className="container">
          <Header />
          <Content>
            {children}
          </Content>
          <Footer />
        </div>
      </body>
    </html>
  )
}
