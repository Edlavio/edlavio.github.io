import './globals.css'
import { Roboto_Flex as Roboto, Inter } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-body' })
const inter = Inter({ subsets: ['latin'], variable: '--font-title' })

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
      <body className={`${inter.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}