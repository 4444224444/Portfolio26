import { useState, useRef } from 'react'
import './Portfolio2026.scss'

// 🎬 동영상 import
import video1 from '../assets/4-1.MP4'
import video2 from '../assets/4-2.MP4'
import video3 from '../assets/4-3.MP4'
import video4 from '../assets/4-4.MP4'
import video5 from '../assets/4-5.MP4'

// 룩북 데이터 구조 (모든 카테고리에 linkUrl 추가)
const PORTFOLIO_DATA = {
  'lookbook-1': {
    category: '모델 촬영 · 코디 참여 · 콘텐츠 제작 및 업로드',
    title: '여성 쇼핑몰 멜타 SS\n롱슬리브 룩북',
    images: [
      new URL('../assets/1-1.jpg', import.meta.url).href,
      new URL('../assets/1-2.jpg', import.meta.url).href,
      new URL('../assets/1-3.jpg', import.meta.url).href,
      new URL('../assets/1-4.jpg', import.meta.url).href,
      new URL('../assets/1-5.jpg', import.meta.url).href
    ],
    linkUrl: 'https://www.instagram.com/merta.co.kr/' // 🔗 이동할 링크 주소
  },
  'lookbook-2': {
    category: '모델 촬영 · 코디 참여 · 콘텐츠 제작 및 업로드',
    title: '여성 쇼핑몰 멜타 SS\n코디 룩북',
    images: [
      new URL('../assets/2-1.jpg', import.meta.url).href,
      new URL('../assets/2-2.jpg', import.meta.url).href,
      new URL('../assets/2-3.jpg', import.meta.url).href,
      new URL('../assets/2-4.jpg', import.meta.url).href,
      new URL('../assets/2-5.jpg', import.meta.url).href,
      new URL('../assets/2-6.jpg', import.meta.url).href,
      new URL('../assets/2-7.jpg', import.meta.url).href
    ],
    linkUrl: 'https://www.instagram.com/merta.co.kr/' // 🔗 이동할 링크 주소
  },
  'lookbook-3': {
    category: '모델 촬영 · 코디 참여 · 콘텐츠 제작 및 업로드',
    title: '여성 쇼핑몰 멜타 SS\n신상 룩북',
    images: [
      new URL('../assets/3-1.jpg', import.meta.url).href,
      new URL('../assets/3-2.jpg', import.meta.url).href
    ],
    linkUrl: 'https://www.instagram.com/merta.co.kr/' // 🔗 이동할 링크 주소
  },
  'short-form': {
    category: '모델 촬영 · 코디 참여 · 콘텐츠 제작 및 업로드',
    title: '26 신상 멜타\nSNS 업로드 숏폼',
    videos: [video1, video2, video3, video4, video5],
    linkUrl: 'https://www.instagram.com/merta.co.kr/reels/' // 🔗 인스타 릴스 주소
  }
}

export default function Portfolio2026() {
  const [selectedCategory, setSelectedCategory] = useState('lookbook-1')
  const [activeVideo, setActiveVideo] = useState(null)
  const currentData = PORTFOLIO_DATA[selectedCategory]

  // 마우스 드래그 스크롤 제어를 위한 Ref
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

  // ❌ 모달 닫기
  const closeModal = () => {
    setActiveVideo(null)
  }

  return (
    <div className="portfolio-2026-container">
      {/* 좌측 정보 및 메뉴 영역 */}
      <div className="left-section">
        <div className="title-area">
          <span className="category-tag">{currentData.category}</span>
          <h2 className="project-title">
            {currentData.title.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br /></span>
            ))}
          </h2>
        </div>

        <nav className="menu-list">
          <button 
            className={selectedCategory === 'lookbook-1' ? 'active' : ''} 
            onClick={() => setSelectedCategory('lookbook-1')}
          >
            Look Book 1
          </button>
          <button 
            className={selectedCategory === 'lookbook-2' ? 'active' : ''} 
            onClick={() => setSelectedCategory('lookbook-2')}
          >
            Look Book 2
          </button>
          <button 
            className={selectedCategory === 'lookbook-3' ? 'active' : ''} 
            onClick={() => setSelectedCategory('lookbook-3')}
          >
            Look Book 3
          </button>
          <button 
            className={selectedCategory === 'short-form' ? 'active' : ''} 
            onClick={() => setSelectedCategory('short-form')}
          >
            Short-Form
          </button>
        </nav>
      </div>

      {/* 우측 미디어 갤러리 영역 */}
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
            {currentData.videos ? (
              currentData.videos.map((vidUrl, index) => (
                <div 
                  key={`vid-${index}`} 
                  className="video-card"
                  onClick={() => handleVideoClick(vidUrl)}
                >
                  <video 
                    src={vidUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                </div>
              ))
            ) : (
              currentData.images.map((imgUrl, index) => (
                <div key={`img-${index}`} className="image-card">
                  <img src={imgUrl} alt={`Lookbook item ${index + 1}`} draggable="false" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* 🔗 모든 메뉴 공통: linkUrl 정보가 있으면 하단에 View More 버튼 표시 */}
        {currentData.linkUrl && (
          <div className="view-more-container">
            <a 
              href={currentData.linkUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-more-btn"
            >
              View More ↗
            </a>
          </div>
        )}
      </div>

      {/* 🎬 전체화면 동영상 팝업 모달 */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>
            <video 
              src={activeVideo} 
              autoPlay 
              controls 
              playsInline 
            />
          </div>
        </div>
      )}
    </div>
  )
}