import { useState } from 'react'
import './Videos.css'

function Videos() {
  const [videos] = useState([
    {
      id: 1,
      title: 'Công nghiệp hoá tại Việt Nam',
      videoId: 'h0wUk0wqaas',
      description: 'Video này cung cấp cái nhìn tổng quan về quá trình công nghiệp hóa, hiện đại hóa ở Việt Nam. Nội dung sẽ bàn về các mô hình công nghiệp hoá ở Hàn Quốc và Nhật Bản, những điểm khác biệt giữa các nước khác so với Việt Nam và các thách thức/thời cơ của Việt Nam.',
      duration: '4:38',
      views: '100',
      topics: [
        'Bài học từ các người khổng lồ',
        'Một sân chơi mới',
        'Con đường phía trước của Việt Nam chúng ta'
      ]
    }
  ])

  return (
    <div className="videos-page">
      <div className="videos-header">
        <h1>📹 Video Bài Giảng Tổng Hợp</h1>
        <p className="header-subtitle">
          Học tập hiệu quả qua video bài giảng về Kinh tế Chính trị - Chương 6
        </p>
        <p className="header-subtitle">
          Có sử dụng AI NotebookLM tạo ra video
        </p>
      </div>

      <div className="videos-container">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-content">
              <div className="video-player">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-stats">
                  <span className="stat-item">
                    <span className="icon">⏱️</span> {video.duration}
                  </span>
                  <span className="stat-item">
                    <span className="icon">👁️</span> {video.views} lượt xem
                  </span>
                </div>
              </div>

              <div className="video-info">
                <h2 className="video-title">{video.title}</h2>
                <p className="video-description">{video.description}</p>
                
                <div className="video-topics">
                  <h3>📚 Nội dung chính:</h3>
                  <ul>
                    {video.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
