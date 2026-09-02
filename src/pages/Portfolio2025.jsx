import { useState, useRef } from 'react'
import './Portfolio2025.scss'

// 🎬 동영상 import (경로에 맞춰 사용해 주세요)
import baroVideo from '../assets/baro.mp4'

const PORTFOLIO_DATA = {
  'lookbook-1': {
    category: '기획 · 인터랙션 · 개발',
    title: '2025 계원예술대학교\n졸업작품',
    images: [
      new URL('../assets/ok.jpg', import.meta.url).href,
      new URL('../assets/ok2.jpg', import.meta.url).href,
    ],
    siteUrl: 'https://mnmnlilimnmnlil.github.io/OK/main'
  },
  'lookbook-2': {
    category: '기획 · 영상 · 개발',
    title: '2-1 디지털콘텐츠\n2인 작품',
    images: [
      new URL('../assets/baro.jpg', import.meta.url).href,
    ],
    videos: [baroVideo],
    siteUrl: 'https://4444224444.github.io/BaroEat/'
  }
}

export default function Portfolio2025() {
  const [selectedCategory, setSelectedCategory] = useState('lookbook-1')
  const [activeVideo, setActiveVideo] = useState(null)
  const currentData = PORTFOLIO_DATA[selectedCategory]

  // 🖱️ 마우스 드래그 스크롤 제어용 Ref
  const sliderRef = useRef(null)
  const isMouseDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const isDragging = useRef(false)

  // 드래그 이벤트 핸들러
  const handleMouseDown = (e) => {
    isMouseDown.current = true
    isDragging.current = false
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeft.current = sliderRef.current.scrollLeft
  }

  const handleMouseLeaveOrUp = () => {
    isMouseDown.current = false
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5

    if (Math.abs(x - startX.current) > 5) {
      isDragging.current = true
    }

    sliderRef.current.scrollLeft = scrollLeft.current - walk
  }

  // 🎬 비디오 클릭 시 전체화면 모달 열기
  const handleVideoClick = (vidUrl) => {
    if (isDragging.current) return
    setActiveVideo(vidUrl)
  }

  const closeModal = () => {
    setActiveVideo(null)
  }

  return (
    <div className="portfolio-2025-container">
      {/* 좌측 정보 및 메뉴 영역 */}
      <div className="left-section">
        <div className="title-area">
          <span className="category-tag">{currentData.category}</span>
          <h2 className="project-title">
            {currentData.title.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br /></span>
            ))}
          </h2>

          {/* 🔗 Visit Web 버튼 */}
          {currentData.siteUrl && (
            <a 
              href={currentData.siteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="visit-web-btn"
            >
              Visit Web ↗
            </a>
          )}
        </div>

        <nav className="menu-list">
          <button 
            className={selectedCategory === 'lookbook-1' ? 'active' : ''} 
            onClick={() => setSelectedCategory('lookbook-1')}
          >
            O.K
          </button>
          <button 
            className={selectedCategory === 'lookbook-2' ? 'active' : ''} 
            onClick={() => setSelectedCategory('lookbook-2')}
          >
            Baro-Eat
          </button>
        </nav>
      </div>

      {/* 우측 드래그 스크롤 갤러리 영역 */}
      <div className="right-section-wrapper">
        <div 
          className="right-section gallery-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          <div className="gallery-track">
            {/* 이미지 출력 */}
            {currentData.images && currentData.images.map((imgUrl, index) => (
              <div key={`img-${index}`} className="media-card image-card">
                <img src={imgUrl} alt={`Work ${index + 1}`} draggable="false" />
              </div>
            ))}

            {/* 비디오 출력 */}
            {currentData.videos && currentData.videos.map((vidUrl, index) => (
              <div 
                key={`vid-${index}`} 
                className="media-card video-card"
                onClick={() => handleVideoClick(vidUrl)}
              >
                <video src={vidUrl} autoPlay loop muted playsInline />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎬 동영상 팝업 모달 */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>
            <video src={activeVideo} autoPlay controls playsInline />
          </div>
        </div>
      )}
    </div>
  )
}