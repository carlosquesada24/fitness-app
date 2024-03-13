import type { Metadata } from 'next'
import {
  Archivo,
  Inter,
} from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { RoutinesProvider } from './(modules)/routines/(infrastucture)/(hooks)/RoutinesContext'
import Navbar from './components/Navbar/Navbar'
import { AuthProvider } from './(modules)/authentication/(infrastucture)/(context)/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitness App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let isLogged = true

  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <Navbar
            isLogged={isLogged}
          />
          <main className="w-full min-h-screen p-2 sm:p-8">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <RoutinesProvider>
              {children}
            </RoutinesProvider>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
