import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './TeamCarousel.css'

function TeamCarousel() {
  const teamMembers = [
    {
      id: 1,
      name: "Phạm Chí Cường",
      role: "Trưởng nhóm",
      avatar: "👨‍🎓"
    },
    {
      id: 2,
      name: "Đoàn Minh Kiên",
      role: "Thành viên",
      avatar: "👨‍🎓"
    },
    {
      id: 3,
      name: "Bùi Trần Duy Vũ",
      role: "Thành viên",
      avatar: "👨‍🎓"
    },
    {
      id: 4,
      name: "Nguyễn Thượng Phong",
      role: "Thành viên",
      avatar: "👩‍🎓"
    }
  ]

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
            <div className="member-card">
              <div className="member-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TeamCarousel
