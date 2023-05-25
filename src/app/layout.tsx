import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Edlávio - Pedro Alberto | Em construção',
  description: 'Edlávio - Pedro Alberto Front-End Developer, Portfólio feito com amor e dedicação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-white bg-ultramarine-900`}>{children}</body>
    </html>
  )
}