import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import TranslationBar from './TranslationBar.jsx'
import SoundMeter from './SoundMeter.jsx'
import { useSoundMeter } from '../soundmeter/SoundMeterContext.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { open, enabled } = useSoundMeter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {/* Quan el sonòmetre és obert, el contingut RESERVA espai a la dreta
          (padding, no translate): així res no surt del viewport ni apareix
          scroll horitzontal. El sonòmetre i la barra de traducció queden FORA
          d'aquest contenidor perquè són overlays fixos al viewport. */}
      <div className="content-shift min-h-screen flex flex-col" data-shifted={open}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <TranslationBar />
      {enabled && <SoundMeter />}
    </>
  )
}
