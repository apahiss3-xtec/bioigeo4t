import { HashRouter, Routes, Route } from 'react-router-dom'
import { TranslateProvider } from './translate/TranslateContext.jsx'
import { NivellProvider } from './nivell/NivellContext.jsx'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import SAIndexPage from './pages/SAIndexPage.jsx'
import SessionPage from './pages/SessionPage.jsx'
import SAAvaluacioPage from './pages/SAAvaluacioPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <TranslateProvider>
      <NivellProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sa/:saId" element={<SAIndexPage />} />
            {/* el segment estàtic té prioritat sobre :sessionId */}
            <Route path="/sa/:saId/autoavaluacio" element={<SAAvaluacioPage />} />
            <Route path="/sa/:saId/:sessionId" element={<SessionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
      </NivellProvider>
    </TranslateProvider>
  )
}
