export default function Portfolio2025({ setActiveTab }) {
  return (
    <div style={{ padding: '40px 0', minHeight: '350px' }}>
      <button 
        style={{ marginBottom: '20px', border: '1px solid var(--line-color)', padding: '8px 16px', color: '#fff' }}
        onClick={() => setActiveTab('home')}
      >
        ← BACK TO HOME
      </button>
      <h2 style={{ fontFamily: 'Syncopate', fontSize: '36px', marginBottom: '20px' }}>2025 PROJECTS</h2>
      <p style={{ color: 'var(--text-secondary)' }}>2025년 포트폴리오 준비 중입니다.</p>
    </div>
  )
}