import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavigationModal from './components/NavigationModal'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio2026 from './pages/Portfolio2026'
import Portfolio2025 from './pages/Portfolio2025'
import './styles/main.scss'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div 
      className="app-container" 
      style={{ 
        padding: '60px 80px', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}
    >
      <Header 
        activeTab={activeTab} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      
      {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
      {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
      {activeTab === '2026' && <Portfolio2026 setActiveTab={setActiveTab} />}
      {activeTab === '2025' && <Portfolio2025 setActiveTab={setActiveTab} />}

      {/* home 페이지일 때만 푸터 노출 */}
      {activeTab === 'home' && <Footer />}

      {/* 햄버거 메뉴 모달 */}
      <NavigationModal 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        setActiveTab={setActiveTab} 
      />
    </div>
  )
}

export default App