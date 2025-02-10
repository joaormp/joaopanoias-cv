import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joao Panoias CV',
  description: 'A DevOps Engineer with 10+ years of experience. from Portugal.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
