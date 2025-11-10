import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Learning Hub MLN122
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Trang chủ
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/learn" className="navbar-link" id="nav-learn">
              Học tập
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/videos" className="navbar-link" id="nav-videos">
              Video
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/quiz" className="navbar-link" id="nav-quiz">
              Quiz
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/documents" className="navbar-link" id="nav-documents">
              Tài liệu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
