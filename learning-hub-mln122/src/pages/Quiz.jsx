import { useState } from 'react'
import './Quiz.css'

// Import ảnh nền
import quizBgImage from '../assets/background/Mac_Lennin_2.jpg';

function Quiz() {
  // Dữ liệu 10 câu hỏi trắc nghiệm dựa trên Chương 6
  const quizData = [
    {
      id: 1,
      question: 'Cách mạng công nghiệp là gì?',
      options: [
        'Sự thay đổi về chính trị trong xã hội',
        'Những bước phát triển nhảy vọt về chất trình độ của tư liệu lao động',
        'Quá trình đô thị hóa nhanh chóng',
        'Sự phát triển của nông nghiệp'
      ],
      correctAnswer: 1,
      explanation: 'Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất của trình độ tư liệu lao động, làm thay đổi căn bản phương thức sản xuất và đời sống xã hội.'
    },
    {
      id: 2,
      question: 'Cách mạng công nghiệp lần thứ nhất khởi phát từ nước nào và thời gian nào?',
      options: [
        'Pháp - thế kỷ XVII',
        'Anh - giữa thế kỷ XVIII đến giữa thế kỷ XIX',
        'Mỹ - đầu thế kỷ XIX',
        'Đức - cuối thế kỷ XVIII'
      ],
      correctAnswer: 1,
      explanation: 'Cách mạng công nghiệp lần 1 bắt đầu từ Anh vào giữa thế kỷ XVIII, đánh dấu sự chuyển đổi từ sản xuất thủ công sang sản xuất bằng máy móc.'
    },
    {
      id: 3,
      question: 'Nội dung cơ bản của Cách mạng công nghiệp lần thứ nhất là gì?',
      options: [
        'Sử dụng năng lượng điện',
        'Chuyển từ lao động thủ công sang sử dụng máy móc, cơ giới hóa sản xuất',
        'Ứng dụng công nghệ thông tin',
        'Phát triển robot công nghiệp'
      ],
      correctAnswer: 1,
      explanation: 'CMCN lần 1 chuyển đổi từ lao động thủ công sang sử dụng máy móc với động lực là hơi nước, cơ giới hóa quá trình sản xuất.'
    },
    {
      id: 4,
      question: 'Đặc trưng của Cách mạng công nghiệp lần thứ tư là gì?',
      options: [
        'Sử dụng năng lượng hơi nước',
        'Sử dụng năng lượng điện',
        'Tự động hóa sản xuất bằng máy tính',
        'Liên kết giữa thế giới thực và ảo, IoT, AI, Big Data'
      ],
      correctAnswer: 3,
      explanation: 'CMCN 4.0 được đặc trưng bởi sự kết hợp giữa thế giới vật lý và kỹ thuật số thông qua IoT, AI, Big Data, tạo ra hệ thống thông minh.'
    },
    {
      id: 5,
      question: 'Công nghiệp hóa là gì?',
      options: [
        'Quá trình xây dựng các khu công nghiệp',
        'Quá trình chuyển đổi từ lao động thủ công sang lao động bằng máy móc',
        'Quá trình phát triển công nghệ cao',
        'Quá trình đô thị hóa'
      ],
      correctAnswer: 1,
      explanation: 'Công nghiệp hóa là quá trình chuyển đổi cơ cấu kinh tế từ nông nghiệp sang công nghiệp, từ lao động thủ công sang máy móc hiện đại.'
    },
    {
      id: 6,
      question: 'Mô hình công nghiệp hóa cổ điển (nước Anh) bắt đầu từ ngành nào?',
      options: [
        'Công nghiệp nặng',
        'Công nghiệp chế tạo máy',
        'Công nghiệp nhẹ (ngành dệt)',
        'Công nghiệp hóa chất'
      ],
      correctAnswer: 2,
      explanation: 'Mô hình CNH cổ điển của Anh bắt đầu từ công nghiệp nhẹ (ngành dệt), sau đó mới phát triển công nghiệp nặng và công nghiệp chế tạo máy.'
    },
    {
      id: 7,
      question: 'Hội nhập kinh tế quốc tế là gì?',
      options: [
        'Quá trình gắn kết nền kinh tế với nền kinh tế thế giới dựa trên chia sẻ lợi ích',
        'Quá trình nhập khẩu hàng hóa từ nước ngoài',
        'Quá trình xuất khẩu lao động',
        'Quá trình vay nợ quốc tế'
      ],
      correctAnswer: 0,
      explanation: 'Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế quốc gia với kinh tế thế giới, dựa trên nguyên tắc bình đẳng, cùng có lợi.'
    },
    {
      id: 8,
      question: 'Tác động TÍCH CỰC của hội nhập kinh tế quốc tế là gì?',
      options: [
        'Làm gia tăng cạnh tranh gay gắt',
        'Tăng nguy cơ phụ thuộc vào thị trường ngoài',
        'Mở rộng thị trường, tiếp thu khoa học công nghệ, vốn',
        'Xói mòn bản sắc văn hóa'
      ],
      correctAnswer: 2,
      explanation: 'Hội nhập kinh tế giúp mở rộng thị trường xuất khẩu, thu hút vốn đầu tư, tiếp thu khoa học công nghệ tiên tiến từ các nước phát triển.'
    },
    {
      id: 9,
      question: 'Việt Nam gia nhập WTO vào năm nào?',
      options: [
        '1995',
        '2000',
        '2007',
        '2010'
      ],
      correctAnswer: 2,
      explanation: 'Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) vào ngày 11/1/2007, là thành viên thứ 150.'
    },
    {
      id: 10,
      question: 'Nền kinh tế độc lập, tự chủ của Việt Nam có nghĩa là gì?',
      options: [
        'Đóng cửa, không giao thương với nước ngoài',
        'Không bị lệ thuộc, khống chế về đường lối và chính sách phát triển',
        'Chỉ sử dụng sản phẩm nội địa',
        'Không tham gia hội nhập quốc tế'
      ],
      correctAnswer: 1,
      explanation: 'Nền kinh tế độc lập, tự chủ có nghĩa là không bị lệ thuộc, khống chế về đường lối phát triển, nhưng vẫn hội nhập và hợp tác quốc tế.'
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      alert('Vui lòng chọn một đáp án!')
      return
    }

    // Lưu câu trả lời
    const newAnswer = {
      questionId: quizData[currentQuestion].id,
      question: quizData[currentQuestion].question,
      selectedAnswer: selectedAnswer,
      correctAnswer: quizData[currentQuestion].correctAnswer,
      options: quizData[currentQuestion].options,
      explanation: quizData[currentQuestion].explanation,
      isCorrect: selectedAnswer === quizData[currentQuestion].correctAnswer
    }

    const updatedAnswers = [...userAnswers, newAnswer]
    setUserAnswers(updatedAnswers)

    // Tính điểm
    if (newAnswer.isCorrect) {
      setScore(score + 1)
    }

    // Chuyển câu tiếp theo hoặc hiển thị kết quả
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    // Tạo thông điệp động viên dựa trên điểm số
    let motivationMessage = ''
    let motivationEmoji = ''
    
    if (score === 10) {
      motivationMessage = 'Xuất sắc! Bạn đã làm bài hoàn hảo! Kiến thức của bạn về Chương 6 thật tuyệt vời! 🌟'
      motivationEmoji = '🏆'
    } else if (score >= 8) {
      motivationMessage = 'Tuyệt vời! Bạn đã nắm vững kiến thức rất tốt! Chỉ cần cố gắng thêm một chút nữa thôi! 💪'
      motivationEmoji = '🎉'
    } else if (score >= 6) {
      motivationMessage = 'Khá tốt! Bạn đã hiểu phần lớn nội dung. Hãy xem lại các câu sai để hoàn thiện hơn nhé! 📚'
      motivationEmoji = '👍'
    } else {
      motivationMessage = 'Đừng nản chí! Hãy xem lại lý thuyết và thử lại nhé. Mỗi lần làm bài là một lần tiến bộ! 💪'
      motivationEmoji = '🌱'
    }

    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="results-section">
            <h1>🎉 Hoàn thành Quiz!</h1>
            
            {/* Button Làm lại Quiz - Moved to top */}
            <div className="restart-section">
              <button onClick={handleRestart} className="restart-button-top">
                🔄 Làm lại Quiz
              </button>
            </div>

            {/* Motivation Message */}
            <div className="motivation-message">
              <span className="motivation-emoji">{motivationEmoji}</span>
              <p>{motivationMessage}</p>
            </div>

            <div className="score-card">
              <h2>Kết quả của bạn</h2>
              <div className="score-display">
                <span className="score-number">{score}</span>
                <span className="score-divider">/</span>
                <span className="score-total">{quizData.length}</span>
              </div>
              <p className="score-text">
                Bạn đã trả lời đúng <strong>{score}</strong> trên <strong>{quizData.length}</strong> câu!
              </p>
              <div className="score-percentage">
                <div className="percentage-bar">
                  <div 
                    className="percentage-fill" 
                    style={{width: `${(score / quizData.length) * 100}%`}}
                  ></div>
                </div>
                <span className="percentage-text">
                  {Math.round((score / quizData.length) * 100)}%
                </span>
              </div>
            </div>

            <div className="review-section">
              <h2>📝 Ôn tập câu hỏi</h2>
              {userAnswers.map((answer, index) => (
                <div key={index} className={`review-card ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-header">
                    <span className="review-number">Câu {index + 1}</span>
                    <span className={`review-badge ${answer.isCorrect ? 'badge-correct' : 'badge-incorrect'}`}>
                      {answer.isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </span>
                  </div>
                  <p className="review-question">{answer.question}</p>
                  
                  {!answer.isCorrect && (
                    <div className="explanation-box">
                      <span className="explanation-icon">💡</span>
                      <p className="explanation-text">{answer.explanation}</p>
                    </div>
                  )}
                  
                  <div className="review-options">
                    {answer.options.map((option, optIndex) => (
                      <div 
                        key={optIndex} 
                        className={`review-option ${
                          optIndex === answer.correctAnswer ? 'option-correct' : ''
                        } ${
                          optIndex === answer.selectedAnswer && !answer.isCorrect ? 'option-wrong' : ''
                        }`}
                      >
                        {option}
                        {optIndex === answer.correctAnswer && <span className="option-label"> ✓ Đáp án đúng</span>}
                        {optIndex === answer.selectedAnswer && !answer.isCorrect && <span className="option-label"> ✗ Bạn đã chọn</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="quiz-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${quizBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <div className="quiz-header">
        <h1>📝 Quiz Kiểm Tra Kiến Thức</h1>
        <p className="quiz-subtitle">Chương 6: Công nghiệp hóa, Hiện đại hóa và Hội nhập Kinh tế Quốc tế</p>
      </div>

      <div className="quiz-container">
        <div className="progress-section">
          <div className="progress-text">
            Câu {currentQuestion + 1} / {quizData.length}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{width: `${((currentQuestion + 1) / quizData.length) * 100}%`}}
            ></div>
          </div>
        </div>

        <div className="question-card">
          <h2 className="question-text">{quizData[currentQuestion].question}</h2>
          
          <div className="options-container">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={handleNextQuestion} 
            className="next-button"
            disabled={selectedAnswer === null}
          >
            {currentQuestion < quizData.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎯'}
          </button>
        </div>

        <div className="quiz-info">
          <p>💡 <strong>Lưu ý:</strong> Chọn đáp án bạn cho là đúng nhất, sau đó nhấn nút để tiếp tục.</p>
        </div>
      </div>
    </div>
  )
}

export default Quiz
