import { useState, useRef } from 'react'
import './Portfolio2026.scss'

// 룩북 데이터 구조 (필요에 따라 이미지 경로 및 내용 수정)
const PORTFOLIO_DATA = {
  'lookbook-1': {
    category: '모델 촬영 · 코디 참여 · 콘텐츠 제작',
    title: '여성 쇼핑몰 멜타 SS\n슬리브리스 룩북',
    images: [
      'https://via.placeholder.com/600x800/ffffff/000000?text=LookBook+1+-+Img+1',
      'https://via.placeholder.com/600x800/eeeeee/000000?text=LookBook+1+-+Img+2',
      'https://via.placeholder.com/600x800/dddddd/000000?text=LookBook+1+-+Img+3',
    ]
  },
  'lookbook-2': {
    category: '기획 · 디자인 · 웹 매거진',
    title: '여성 쇼핑몰 멜타 SS\n아우터 룩북',
    images: [
      'https://via.placeholder.com/600x800/e0e0e0/000000?text=LookBook+2+-+Img+1',
      'https://via.placeholder.com/600x800/cccccc/000000?text=LookBook+2+-+Img+2',
    ]
  },
  'lookbook-3': {
    category: '브랜딩 · 촬영 연출',
    title: '여성 쇼핑몰 멜타 SS\n악세서리 룩북',
    images: [
      'https://via.placeholder.com/600x800/d5d5d5/000000?text=LookBook+3+-+Img+1',
      'https://via.placeholder.com/600x800/bbbbbb/000000?text=LookBook+3+-+Img+2',
    ]
  },
  'short-form': {
    category: '숏폼 영상 · 릴스 콘텐츠',
    title: '26SS 멜타 트렌드\n숏폼 컬렉션',
    images: [
      'https://via.placeholder.com/600x800/aaaaaa/000000?text=Short-Form+Cover',
    ]
  }
}

export default function Portfolio2026() {
  const [selectedCategory, setSelectedCategory] = useState('lookbook-1')
  const currentData = PORTFOLIO_DATA[selectedCategory]

  // 마우스 드래그 스크롤 제어를 위한 Ref
  const sliderRef = useRef(null)
  const isMouseDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // 드래그 이벤트 핸들러
  const handleMouseDown = (e) => {
    isMouseDown.current = true
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
    const walk = (x - startX.current) * 1.5 // 드래그 속도 조절
    sliderRef.current.scrollLeft = scrollLeft.current - walk
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

      {/* 우측 드래그 가능한 이미지 갤러리 */}
      <div 
        className="right-section gallery-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className="gallery-track">
          {currentData.images.map((imgUrl, index) => (
            <div key={index} className="image-card">
              <img src={imgUrl} alt={`Lookbook item ${index + 1}`} draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}