import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ComingSoonDialog from './components/ComingSoon.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <a href="#main" className="sr-only rounded-full focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-navy-900">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Home />
      </main>
      <Footer />
      <ComingSoonDialog />
    </>
  )
}
