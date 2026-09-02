import './Header.scss'

export default function Header({ activeTab, onOpenMenu }) {
  // 메인 Home 화면 헤더
  if (activeTab === 'home') {
    return (
      <header className="header main-header">
        <div className="header-left">
          <div className="sub-title">Jung Hyejin Portfolio</div>
          <h1 className="main-title">
            Where Ideas<br />
            Turn Into Forms
          </h1>
        </div>
        <div className="header-right">
          <p className="desc-text">
            웹과 그래픽, 영상 디자인을 기반으로 새로운 시각과 명확한 메시지를 담은 디자인을 추구하며, 아이디어의 방향을 시각적으로 풀어내고 사용자에게 자연스럽게 전달되는 결과물을 만들고자 합니다.
          </p>
        </div>
      </header>
    )
  }

  // 서브페이지 (About, 2026, 2025) 상단 햄버거 헤더
  return (
    <header className="header sub-header">
      <div className="sub-title">Jung Hyejin Portfolio</div>
      <button className="hamburger-btn" onClick={onOpenMenu} aria-label="Open Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}