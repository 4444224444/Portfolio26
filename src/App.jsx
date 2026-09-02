import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavigationModal from './components/NavigationModal'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio2026 from './pages/Portfolio2026'
import Portfolio2025 from './pages/Portfolio2025'
import './styles/main.scss'

function App() {
  // 1. 초기 상태값을 sessionStorage에서 가져옵니다. (없으면 기본값 'home')
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem('activeTab') || 'home'
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 2. activeTab이 변경될 때마다 sessionStorage에 최신 탭 저장
  useEffect(() => {
    sessionStorage.setItem('activeTab', activeTab)
  }, [activeTab])

  return (
    <div 
      className="app-container" 
      style={{ 
        padding: '60px 50px', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 'none',
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