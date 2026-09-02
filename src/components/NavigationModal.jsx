import './NavigationModal.scss'

export default function NavigationModal({ isOpen, onClose, setActiveTab }) {
  if (!isOpen) return null

  const handleMenuClick = (tabId) => {
    setActiveTab(tabId)
    onClose()
  }

  return (
    <div className="nav-modal-overlay">
      <div className="nav-modal-header">
        <span className="modal-logo">Jung Hyejin Portfolio</span>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="nav-modal-content">
        <div className="modal-menu-list">
          <button onClick={() => handleMenuClick('home')}>HOME</button>
          <button onClick={() => handleMenuClick('about')}>ABOUT</button>
          <button onClick={() => handleMenuClick('2026')}>2026</button>
          <button onClick={() => handleMenuClick('2025')}>2025</button>
        </div>

        <div className="modal-info-section">
          <div className="info-block">
            <a href="#" className="resume-link">Resume Download</a>
          </div>
          <div className="info-block">
            <p>01094135028</p>
            <p>jhj030424@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}