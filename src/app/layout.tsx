import { Nanum_Gothic } from 'next/font/google'
import './globals.css'
import './style.css'

const nanum_gothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-nanum-gothic',
  display: 'swap',
})

export const metadata = {
  title: 'open-market',
  description: '오픈 마켓입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3da5f5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={nanum_gothic.className}>{children}</body>
    </html>
  )
}
