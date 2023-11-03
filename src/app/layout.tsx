import { Nanum_Gothic } from 'next/font/google'
import './globals.css'
// import './style.css'

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
    <html lang="ko">
      <body className={nanum_gothic.className}>{children}</body>
    </html>
  )
}
