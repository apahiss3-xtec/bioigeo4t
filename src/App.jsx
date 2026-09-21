import { HashRouter, Routes, Route } from 'react-router-dom'
import { TranslateProvider } from './translate/TranslateContext.jsx'
import { NivellProvider } from './nivell/NivellContext.jsx'
import { SoundMeterProvider } from './soundmeter/SoundMeterContext.jsx'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import SAIndexPage from './pages/SAIndexPage.jsx'
import SessionPage from './pages/SessionPage.jsx'
import SAAvaluacioPage from './pages/SAAvaluacioPage.jsx'
import DocentPage from './pages/DocentPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <TranslateProvider>
      <NivellProvider>
      <SoundMeterProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sa/:saId" element={<SAIndexPage />} />
            {/* el segment estàtic té prioritat sobre :sessionId */}
            <Route path="/sa/:saId/autoavaluacio" element={<SAAvaluacioPage />} />
            {/* Espai docent: no s'enllaça enlloc visible; només el «·» discret del peu */}
            <Route path="/sa/:saId/docent" element={<DocentPage />} />
            <Route path="/sa/:saId/:sessionId" element={<SessionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
      </SoundMeterProvider>
      </NivellProvider>
    </TranslateProvider>
  )
}
