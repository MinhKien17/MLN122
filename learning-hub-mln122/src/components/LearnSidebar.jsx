import './LearnSidebar.css'

function LearnSidebar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <aside className="learn-sidebar" id="learn-sidebar">
      <div className="sidebar-content">
        <h3>Nội dung chính</h3>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a onClick={() => scrollToSection('section-1')} className="nav-link">
                I. Công nghiệp hóa, hiện đại hóa ở Việt Nam
              </a>
              <ul className="sub-nav">
                <li>
                  <a onClick={() => scrollToSection('section-1-1')} className="nav-link">
                    1. Khái quát về CMCN và CNH
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('section-1-2')} className="nav-link">
                    2. Tính tất yếu và nội dung CNH, HĐH
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => scrollToSection('section-2')} className="nav-link">
                II. Hội nhập kinh tế quốc tế
              </a>
              <ul className="sub-nav">
                <li>
                  <a onClick={() => scrollToSection('section-2-1')} className="nav-link">
                    1. Khái niệm và nội dung hội nhập
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('section-2-2')} className="nav-link">
                    2. Tác động của hội nhập kinh tế
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('section-2-3')} className="nav-link">
                    3. Phương hướng nâng cao hiệu quả
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default LearnSidebar
