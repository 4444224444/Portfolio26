export default function About({ setActiveTab }) {
  return (
    <div style={{ padding: '40px 0', minHeight: '350px' }}>
      <button 
        style={{ marginBottom: '20px', border: '1px solid var(--line-color)', padding: '8px 16px' }}
        onClick={() => setActiveTab('home')}
      >
        ← BACK TO HOME
      </button>
      <h2 style={{ fontFamily: 'Syncopate', fontSize: '36px', marginBottom: '20px' }}>ABOUT</h2>
      <p style={{ color: 'var(--text-secondary)' }}>About 페이지 내용 영역입니다.</p>
    </div>
  )
}