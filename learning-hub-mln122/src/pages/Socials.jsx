import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './Socials.css'

function Socials() {
  return (
    <div className="socials-page">
      <div className="socials-container">
        <h1 className="socials-title">Follow Us! 🌟</h1>
        <p className="socials-description">
          Hãy follow chúng tôi để cập nhật thêm những dự án mới nhất.
        </p>

        <div className="social-links">
          <a href="#" className="social-link facebook" aria-label="Facebook">
            <FaFacebook className="social-icon" />
            <span className="social-name">Facebook</span>
          </a>

          <a href="#" className="social-link instagram" aria-label="Instagram">
            <FaInstagram className="social-icon" />
            <span className="social-name">Instagram</span>
          </a>
        </div>

        <div className="social-footer">
          <p>📱 Cảm ơn bạn đã quan tâm đến dự án của chúng tôi!</p>
          <p className="footer-note">© 2025 Learning Hub - Chương 6 Kinh tế Chính trị</p>
        </div>
      </div>
    </div>
  )
}

export default Socials
