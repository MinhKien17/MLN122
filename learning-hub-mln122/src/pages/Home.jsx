import { Link } from 'react-router-dom'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import TeamCarousel from '../components/TeamCarousel'
import './Home.css'

function Home() {
  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '#hero-section',
          popover: {
            title: '🎉 Chào mừng đến với Learning Hub!',
            description: 'Đây là nền tảng học tập tương tác về Kinh tế Chính trị - Chương 6. Hãy cùng khám phá các tính năng của chúng tôi!',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '#nav-learn',
          popover: {
            title: '📚 Học tập',
            description: 'Đây là nơi học lý thuyết chính. Bạn sẽ tìm thấy toàn bộ nội dung Chương 6 với driver.js tour hướng dẫn.',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '#nav-videos',
          popover: {
            title: '🎥 Video',
            description: 'Xem các video bài giảng tổng hợp tại đây. Học qua hình ảnh và âm thanh sinh động hơn!',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '#nav-quiz',
          popover: {
            title: '📝 Quiz',
            description: 'Kiểm tra kiến thức của bạn với các câu hỏi nhanh. 10 câu trắc nghiệm từ nội dung Chương 6!',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '#team-carousel',
          popover: {
            title: '👥 Đội ngũ phát triển',
            description: 'Giới thiệu về nhóm thực hiện dự án này. Chúng tôi là những sinh viên đam mê học tập và chia sẻ kiến thức.',
            side: 'top',
            align: 'center'
          }
        },
        {
          element: '#start-learning-btn',
          popover: {
            title: '🚀 Bắt đầu học',
            description: 'Nhấn vào đây để bắt đầu hành trình học tập của bạn! Chúc bạn học tốt!',
            side: 'top',
            align: 'center'
          }
        }
      ]
    })

    driverObj.drive()
  }

  return (
    <div className="home">
      {/* Hero Section - Moved to top */}
      <section className="hero-section" id="hero-section">
        <h1 className="hero-title">Chào mừng đến với Learning Hub MLN122</h1>
        <p className="hero-subtitle">
          Khám phá kiến thức Kinh tế Chính trị - Chương 6
        </p>
        <p className="hero-description">
          Hãy bắt đầu hành trình khám phá kiến thức cùng chúng tôi ngay hôm nay!
        </p>
        <div className="hero-buttons">
          <Link to="/learn" className="cta-button" id="start-learning-btn">
            Bắt đầu học 🚀
          </Link>
          <button onClick={startTour} className="tour-button">
            Xem hướng dẫn 🎯
          </button>
        </div>
      </section>

      <div className="content-container">
        <section className="intro-section">
          <h2>Giới thiệu nhóm</h2>
          <p>
            Chúng tôi là một nhóm sinh viên đam mê học tập và chia sẻ kiến thức.
            Dự án này được xây dựng nhằm tạo ra một nền tảng học tập tương tác,
            giúp các bạn sinh viên dễ dàng tiếp cận và nắm vững kiến thức môn
            Kinh tế Chính trị Mác - Lênin.
          </p>
        </section>

        <section className="team-section">
          <h2>Thành viên nhóm</h2>
          <TeamCarousel />
        </section>

        <section className="purpose-section">
          <h2>Mục đích của trang web</h2>
          <div className="purpose-content">
            <p>
              Trang web Learning Hub MLN122 được thiết kế để cung cấp một trải
              nghiệm học tập toàn diện về môn Kinh tế Chính trị, đặc biệt tập
              trung vào Chương 6. Chúng tôi mong muốn:
            </p>
            <ul className="purpose-list">
              <li>
                📚 <strong>Cung cấp tài liệu học tập:</strong> Tổng hợp và trình bày
                nội dung bài học một cách rõ ràng, dễ hiểu
              </li>
              <li>
                🎥 <strong>Video bài giảng:</strong> Hỗ trợ học tập qua hình ảnh
                và âm thanh sinh động
              </li>
              <li>
                📝 <strong>Bài tập và Quiz:</strong> Giúp củng cố kiến thức thông
                qua các bài kiểm tra tương tác
              </li>
              <li>
                💬 <strong>Kết nối cộng đồng:</strong> Tạo môi trường để sinh viên
                trao đổi và học hỏi lẫn nhau
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
