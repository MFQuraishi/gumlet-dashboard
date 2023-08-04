import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gumlet Dashboard',
  description: 'A dashboard homepage that offers the user a synopsis of video usage within their account on the platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      {/* <body className={"container mx-auto my-7 bg-l-background dark:bg-d-background"}>{children}</body> */}
      <body className={"container mx-auto my-7 bg-l-default dark:bg-d-default"}>{children}</body>
    </html>
  )
}
