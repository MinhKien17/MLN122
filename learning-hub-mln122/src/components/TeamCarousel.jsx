import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './TeamCarousel.css'
// Ảnh thành viên (đặt trong src/assets/img)
import KienPng from '../assets/img/Kien.png';
import CuongPng from '../assets/img/Cuong.png';
import VuPng from '../assets/img/Vu.png';
import PhongPng from '../assets/img/Phong.png';

function TeamCarousel() {
  const teamMembers = [
    {
      id: 1,
      name: "Phạm Chí Cường",
      role: "Trưởng nhóm",
      avatar: "👨‍🎓",
      image: CuongPng,
      tag: 'MLN122'
    },
    {
      id: 2,
      name: "Đoàn Minh Kiên",
      role: "Thành viên",
      avatar: "👨‍🎓",
      image: KienPng,
      tag: 'MLN122'
    },
    {
      id: 3,
      name: "Bùi Trần Duy Vũ",
      role: "Thành viên",
      avatar: "👨‍🎓",
      image: VuPng,
      tag: 'MLN122'
    },
    {
      id: 4,
      name: "Nguyễn Thượng Phong",
      role: "Thành viên",
      avatar: "👩‍🎓",
      image: PhongPng,
      tag: 'MLN122'
    }
  ]

  const getInitials = (fullName) => {
    try {
      const parts = fullName.trim().split(/\s+/)
      const last = parts[parts.length - 1] || ''
      const first = parts[0] || ''
      return (first[0] || '').toUpperCase() + (last[0] || '').toUpperCase()
    } catch {
      return 'ML'
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <div className="team-carousel-container" id="team-carousel">
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="carousel-slide">
            <div className="member-card pro-card">
              {/* Viền phát sáng và số power như thẻ sưu tập */}
              <div className="card-frame">
                <div className="card-badges">
                  {typeof member.power !== 'undefined' && (
                    <span className="badge-power">{member.power}</span>
                  )}
                  <span className="badge-tag">{member.tag}</span>
                </div>

                <div className="card-media">
                  {member.image ? (
                    <img src={member.image} alt={member.name} loading="lazy" />
                  ) : (
                    <div className="avatar-fallback" aria-label={member.name}>
                      <span className="fallback-initials">{getInitials(member.name)}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="card-info">
                <h3 className="card-name">{member.name}</h3>
                <div className="card-meta">
                  <span className="card-role">{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TeamCarousel
