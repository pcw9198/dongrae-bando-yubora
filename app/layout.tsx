import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17476156908" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17476156908');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
