import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: '동래 반도유보라 - 프리미엄 아파트 분양',
  description: '부산광역시 동래구 낙민동에 위치한 프리미엄 아파트 단지. 84㎡A,B,C 타입으로 구성된 최고의 입지와 품질을 자랑합니다.',
  keywords: '동래, 반도유보라, 아파트, 분양, 부산, 동래구, 낙민동, 프리미엄',
  openGraph: {
    title: '동래 반도유보라 - 프리미엄 아파트 분양',
    description: '부산광역시 동래구 낙민동에 위치한 프리미엄 아파트 단지',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
