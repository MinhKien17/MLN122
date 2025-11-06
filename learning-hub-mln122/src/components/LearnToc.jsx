import './LearnToc.css'

function LearnToc() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <aside className="learn-toc" id="learn-toc">
      <div className="toc-content">
        <h4>Trong bài viết này</h4>
        <nav className="toc-nav">
          <ul>
            <li>
              <a onClick={() => scrollToSection('intro')} className="toc-link">
                Giới thiệu chương
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('cmcn-concept')} className="toc-link">
                Khái niệm CMCN
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('cmcn-history')} className="toc-link">
                Lịch sử các cuộc CMCN
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('cmcn-role')} className="toc-link">
                Vai trò của CMCN
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('cnh-concept')} className="toc-link">
                Công nghiệp hóa
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('cnh-models')} className="toc-link">
                Các mô hình CNH
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('vn-necessity')} className="toc-link">
                Tính tất yếu CNH, HĐH VN
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('vn-content')} className="toc-link">
                Nội dung CNH, HĐH VN
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('integration-concept')} className="toc-link">
                Khái niệm hội nhập
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('integration-impact')} className="toc-link">
                Tác động hội nhập
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('integration-direction')} className="toc-link">
                Phương hướng hội nhập
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default LearnToc
