import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <div className="footer-title">RESUME</div>
        <a href="#" className="footer-text link">Download</a>
      </div>
      <div className="footer-col">
        <div className="footer-title">CONTACT</div>
        <div className="footer-text">01094135028</div>
        <a href="mailto:jhj030424@gmail.com" className="footer-text link">jhj030424@gmail.com</a>
      </div>
      <div className="footer-col">
        <div className="footer-title">JUNG HYEJIN</div>
        <div className="footer-text">Design</div>
        <div className="footer-text">Publishing</div>
      </div>
    </footer>
  )
}