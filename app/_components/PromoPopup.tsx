'use client'

import { useEffect, useState } from 'react'

const IMAGE_SRC = '/promo/ubora-event.png' // public/promo/ubora-event.png
const FORM_URL = 'https://naver.me/xWzI9WyE' // 실제 폼 링크
const HIDE_KEY = 'promoPopHideUntil'
const HIDE_MS = 24 * 60 * 60 * 1000

export default function PromoPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const now = Date.now()
      const hideUntil = Number(localStorage.getItem(HIDE_KEY) || 0)
      if (!hideUntil || hideUntil <= now) setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  const close = () => setOpen(false)

  const hideOneDay = () => {
    try {
      localStorage.setItem(HIDE_KEY, String(Date.now() + HIDE_MS))
    } catch {}
    setOpen(false)
  }

  if (!open) return null

  return (
    <div role="dialog" aria-label="유보라 BIG 할인 이벤트 팝업" style={styles.wrap} className="promo-wrap">
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener"
        style={styles.imageLink}
        aria-label="방문예약 페이지로 이동"
      >
        <img
          src={IMAGE_SRC}
          alt="역대급 할인 이벤트 - 분양가 1억 할인, 발코니확장 무상"
          style={styles.img}
          width={300}
          height={450}
          className="promo-img"
        />
      </a>

      <div style={styles.controls}>
        <button onClick={hideOneDay} style={styles.ghostBtn}>1일간 보지 않음</button>
        <button onClick={close} style={styles.ghostBtn}>닫기</button>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    position: 'fixed',
    top: 24,
    left: 24,
    zIndex: 99999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
    animation: 'promo-pop-in .18s ease-out',
  },
  imageLink: {
    display: 'block',
    textDecoration: 'none',
    outline: 'none',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 12px 30px rgba(0,0,0,.18)',
    background: '#ffffff',
  },
  img: {
    display: 'block',
    width: 'min(88vw, 320px)',
    height: 'auto',
    opacity: 1,
    filter: 'none',
  },
  controls: {
    display: 'flex',
    gap: 8,
    justifyContent: 'space-between',
    background: '#0f1d5a',
    padding: '8px 10px',
    borderRadius: 12,
    boxShadow: '0 6px 18px rgba(0,0,0,.12)',
  },
  ghostBtn: {
    flex: 1,
    background: 'transparent',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,.35)',
    borderRadius: 10,
    padding: '8px 10px',
    fontWeight: 700,
    cursor: 'pointer',
  },
}


