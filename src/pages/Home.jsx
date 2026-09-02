import './Home.scss'

export default function Home({ setActiveTab }) {
  const menuList = [
    { id: 'home', label: 'HOME', num: '01' },
    { id: 'about', label: 'ABOUT', num: '02' },
    { id: '2026', label: '2026', num: '03' },
    { id: '2025', label: '2025', num: '04' },
  ]

  return (
    <main className="nav-list">
      {menuList.map((item) => (
        <div 
          key={item.id} 
          className="nav-item"
          onClick={() => setActiveTab(item.id)}
        >
          <span className="nav-label">{item.label}</span>
          <span className="nav-number">{item.num}</span>
        </div>
      ))}
    </main>
  )
}