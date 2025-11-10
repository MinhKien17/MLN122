import { useEffect } from 'react'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import LearnSidebar from '../components/LearnSidebar'
import LearnToc from '../components/LearnToc'
import './Learn.css'

// Import các ảnh minh họa
import CN1_img from '../assets/example/CN1.jpg';
import CN2_img from '../assets/example/CN2.jpg';
import CN3_img from '../assets/example/CN3.webp';
import CN4_img from '../assets/example/CN4.webp';

function Learn() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '#learn-sidebar',
          popover: {
            title: 'Thanh điều hướng trái',
            description: 'Đây là thanh điều hướng chính. Click vào các mục để di chuyển nhanh đến phần nội dung tương ứng trong bài học.',
            side: 'right',
            align: 'start'
          }
        },
        {
          element: '#main-content',
          popover: {
            title: 'Nội dung chính',
            description: 'Đây là phần nội dung chính của bài học. Bạn có thể đọc và học tập tại đây. Nội dung được chia thành các phần rõ ràng với tiêu đề và đoạn văn.',
            side: 'top',
            align: 'center'
          }
        },
        {
          element: '#learn-toc',
          popover: {
            title: 'Mục lục nhanh',
            description: 'Đây là mục lục nhanh (Table of Contents). Giúp bạn xem tổng quan các chủ đề trong bài và nhảy nhanh đến phần cần đọc.',
            side: 'left',
            align: 'start'
          }
        },
        {
          element: '#tour-button',
          popover: {
            title: 'Hoàn thành!',
            description: 'Bạn có thể click nút này bất cứ lúc nào để xem lại hướng dẫn. Chúc bạn học tốt!',
            side: 'bottom',
            align: 'center'
          }
        }
      ]
    })

    driverObj.drive()
  }

  return (
    <div className="learn-page">
      <div className="learn-layout">
        <LearnSidebar />
        
        <main className="learn-content" id="main-content">
          <div className="content-header">
            <h1>Chương 6: Công nghiệp hóa, Hiện đại hóa và Hội nhập Kinh tế Quốc tế của Việt Nam</h1>
            <button onClick={startTour} className="tour-button" id="tour-button">
              🎯 Bắt đầu Hướng dẫn
            </button>
          </div>

          <section className="intro-section" id="intro">
            <p className="lead">
              Chương 6 sẽ cung cấp hệ thống tri thức về công nghiệp hoá, hiện đại hoá ở Việt Nam 
              trong bối cảnh thích ứng với cuộc Cách mạng công nghiệp lần thứ tư; trong đó đề cập 
              đến những nội dung cơ bản như: khái quát lịch sử các cuộc cách mạng công nghiệp; 
              khái quát về công nghiệp hoá và các mô hình công nghiệp hoá tiêu biểu; tính tất yếu 
              và nội dung cơ bản của công nghiệp hoá, hiện đại hoá ở Việt Nam.
            </p>
          </section>

          <section id="section-1">
            <h2>I. CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA Ở VIỆT NAM</h2>
            
            <div id="section-1-1">
              <h3>1. Khái quát về cách mạng công nghiệp và công nghiệp hóa</h3>
              
              <div id="cmcn-concept">
                <h4>a) Khái quát về cách mạng công nghiệp</h4>
                
                <h5>* Khái niệm về cách mạng công nghiệp</h5>
                <p>
                  Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trình độ của 
                  tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ 
                  trong quá trình phát triển của nhân loại kéo theo sự thay đổi căn bản về phân 
                  công lao động xã hội cũng như tạo bước phát triển năng suất lao động cao hơn 
                  hẳn nhờ áp dụng một cách phổ biến những tính năng mới trong kỹ thuật - công 
                  nghệ đó vào đời sống xã hội.
                </p>

                <h5 id="cmcn-history">* Khái quát lịch sử các cuộc cách mạng công nghiệp</h5>
                <p>
                  Về mặt lịch sử, cho đến nay, loài người đã trải qua ba cuộc cách mạng công 
                  nghiệp và đang bắt đầu cuộc cách mạng công nghiệp lần thứ tư. Cụ thể:
                </p>

                <div className="cmcn-item">
                  <h6>Cách mạng công nghiệp lần thứ nhất</h6>
                  <img src={CN1_img} alt="Cách mạng công nghiệp 1" className="cmcn-image" />
                  <p>
                    Khởi phát từ nước Anh, bắt đầu từ giữa thế kỷ XVIII đến giữa thế kỷ XIX.
                  </p>
                  <p>
                    <strong>Tiền đề:</strong> Xuất phát từ sự trưởng thành về lực lượng sản xuất 
                    cho phép tạo ra bước phát triển đột biến về tư liệu lao động, trước hết trong 
                    lĩnh vực dệt vải sau đó lan tỏa ra các ngành kinh tế khác của nước Anh.
                  </p>
                  <p>
                    <strong>Nội dung cơ bản:</strong> Chuyển từ lao động thủ công thành lao động 
                    sử dụng máy móc, thực hiện cơ giới hóa sản xuất bằng việc sử dụng năng lượng 
                    nước và hơi nước.
                  </p>
                  <p>
                    <strong>Phát minh quan trọng:</strong> Máy dệt, máy hơi nước của James Watt 
                    (1784), công nghệ luyện kim, đầu máy xe lửa, tàu thủy...
                  </p>
                </div>

                <div className="cmcn-item">
                  <h6>Cách mạng công nghiệp lần thứ hai</h6>
                  <img src={CN2_img} alt="Cách mạng công nghiệp 2" className="cmcn-image" />
                  <p>
                    Diễn ra từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX.
                  </p>
                  <p>
                    <strong>Nội dung:</strong> Sử dụng năng lượng điện và động cơ điện, tạo ra 
                    các dây chuyền sản xuất có tính chuyên môn hoá cao, chuyển nền sản xuất cơ khí 
                    sang nền sản xuất điện - cơ khí và sang giai đoạn tự động hóa cục bộ trong sản xuất.
                  </p>
                  <p>
                    <strong>Thành tựu:</strong> Điện, xăng dầu, động cơ đốt trong, kỹ thuật phun 
                    khí nóng, công nghệ luyện thép, sản xuất theo dây chuyền, ôtô, điện thoại...
                  </p>
                </div>

                <div className="cmcn-item">
                  <h6>Cách mạng công nghiệp lần thứ ba</h6>
                  <img src={CN3_img} alt="Cách mạng công nghiệp 3" className="cmcn-image" />
                  <p>
                    Bắt đầu từ khoảng những năm đầu thập niên 60 của thế kỷ XX đến cuối thế kỷ XX.
                  </p>
                  <p>
                    <strong>Đặc trưng:</strong> Sự xuất hiện công nghệ thông tin, tự động hóa sản xuất. 
                    Được xúc tác bởi sự phát triển của chất bán dẫn, siêu máy tính, máy tính cá nhân và 
                    internet.
                  </p>
                  <p>
                    <strong>Tiến bộ nổi bật:</strong> Hệ thống mạng, máy tính cá nhân, thiết bị điện tử 
                    sử dụng công nghệ số và robot công nghiệp.
                  </p>
                </div>

                <div className="cmcn-item highlight">
                  <h6>Cách mạng công nghiệp lần thứ tư</h6>
                  <img src={CN4_img} alt="Cách mạng công nghiệp 4" className="cmcn-image" />
                  <p>
                    Được đề cập lần đầu tiên tại Hội chợ triển lãm công nghệ Hannover (Đức) năm 2011.
                  </p>
                  <p>
                    <strong>Đặc trưng:</strong> Hình thành trên cơ sở cuộc cách mạng số, gắn với sự 
                    phát triển và phổ biến của internet kết nối vạn vật (IoT). Sự xuất hiện các công 
                    nghệ mới có tính đột phá như trí tuệ nhân tạo, big data, in 3D, blockchain...
                  </p>
                </div>

                <div className="info-box">
                  <h6>Hộp 6.1: Tóm tắt đặc trưng của các cuộc cách mạng công nghiệp</h6>
                  <ul>
                    <li><strong>CMCN lần 1:</strong> Sử dụng năng lượng nước và hơi nước, để cơ khí hoá sản xuất</li>
                    <li><strong>CMCN lần 2:</strong> Sử dụng năng lượng điện và động cơ điện, để tạo ra dây chuyền sản xuất hàng loạt</li>
                    <li><strong>CMCN lần 3:</strong> Sử dụng công nghệ thông tin và máy tính, để tự động hoá sản xuất</li>
                    <li><strong>CMCN lần 4:</strong> Liên kết giữa thế giới thực và ảo, để thực hiện công việc thông minh và hiệu quả nhất</li>
                  </ul>
                </div>
              </div>

              <div id="cmcn-role">
                <h5>* Vai trò của cách mạng công nghiệp đối với phát triển</h5>
                
                <h6>Một là, thúc đẩy sự phát triển lực lượng sản xuất</h6>
                <p>
                  Các cuộc cách mạng công nghiệp có những tác động vô cùng to lớn đến sự phát triển 
                  lực lượng sản xuất của các quốc gia, đồng thời, tác động mạnh mẽ tới quá trình điều 
                  chỉnh cấu trúc và vai trò của các nhân tố trong lực lượng sản xuất xã hội.
                </p>
                <p>
                  C. Mác và Ph. Ăngghen đã nhận xét: "Giai cấp tư sản, trong quá trình thống trị giai 
                  cấp chưa đầy một thế kỷ, đã tạo ra những lực lượng sản xuất nhiều hơn và đồ sộ hơn 
                  lực lượng sản xuất của tất cả các thế hệ trước kia gộp lại".
                </p>

                <h6>Hai là, thúc đẩy hoàn thiện quan hệ sản xuất</h6>
                <p>
                  Các cuộc cách mạng công nghiệp tạo sự phát triển nhảy vọt về chất trong lực lượng 
                  sản xuất và sự phát triển này tất yếu dẫn đến quá trình điều chỉnh, phát triển và 
                  hoàn thiện quan hệ sản xuất xã hội, và quản trị phát triển.
                </p>

                <h6>Ba là, thúc đẩy đổi mới phương thức quản trị phát triển</h6>
                <p>
                  Cách mạng công nghiệp làm cho sản xuất xã hội có những bước phát triển nhảy vọt. 
                  Công nghệ kỹ thuật số và internet đã kết nối doanh nghiệp với doanh nghiệp, giữa 
                  doanh nghiệp với cá nhân và giữa các cá nhân với nhau trên phạm vi toàn cầu.
                </p>
              </div>
            </div>

            <div id="section-1-2">
              <h3>2. Tính tất yếu khách quan và nội dung của công nghiệp hóa, hiện đại hóa ở Việt Nam</h3>
              
              <div id="vn-necessity">
                <h4>a) Tính tất yếu của công nghiệp hóa, hiện đại hóa ở Việt Nam</h4>
                <p>
                  <strong>Công nghiệp hóa, hiện đại hóa</strong> là quá trình chuyển đổi căn bản, toàn diện 
                  các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế - xã hội, từ sử dụng sức lao 
                  động thủ công là chính sang sử dụng một cách phổ biến sức lao động với công nghệ, phương 
                  tiện, phương pháp tiên tiến hiện đại.
                </p>
                
                <h5>Lý do khách quan Việt Nam phải thực hiện công nghiệp hóa, hiện đại hóa:</h5>
                <p>
                  <strong>Một là,</strong> lý luận và thực tiễn cho thấy, công nghiệp hóa là quy luật phổ biến 
                  của sự phát triển lực lượng sản xuất xã hội mà mọi quốc gia đều trải qua.
                </p>
                <p>
                  <strong>Hai là,</strong> đối với các nước có nền kinh tế kém phát triển quá độ lên chủ nghĩa 
                  xã hội như nước ta, xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội phải thực hiện 
                  từ đầu thông qua công nghiệp hóa, hiện đại hóa.
                </p>
              </div>

              <div id="vn-content">
                <h4>b) Nội dung công nghiệp hóa, hiện đại hóa ở Việt Nam</h4>
                
                <p>
                  <strong>Một là,</strong> tạo lập những điều kiện để có thể thực hiện chuyển đổi từ nền 
                  sản xuất - xã hội lạc hậu sang nền sản xuất - xã hội tiến bộ.
                </p>
                
                <p>
                  <strong>Hai là,</strong> thực hiện các nhiệm vụ để chuyển đổi nền sản xuất - xã hội lạc 
                  hậu sang nền sản xuất - xã hội hiện đại. Cụ thể:
                </p>
                
                <ul>
                  <li>Đẩy mạnh ứng dụng những thành tựu của khoa học - công nghệ mới, hiện đại</li>
                  <li>Chuyển dịch cơ cấu kinh tế theo hướng hiện đại, hợp lý và hiệu quả</li>
                  <li>Từng bước hoàn thiện quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất</li>
                  <li>Sẵn sàng thích ứng với tác động của bối cảnh Cách mạng công nghiệp lần thứ tư</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="section-2">
            <h2>II. HỘI NHẬP KINH TẾ QUỐC TẾ CỦA VIỆT NAM</h2>
            
            <div id="section-2-1">
              <h3>1. Khái niệm và nội dung hội nhập kinh tế quốc tế</h3>
              
              <div id="integration-concept">
                <h4>a) Khái niệm và sự cần thiết khách quan hội nhập kinh tế quốc tế</h4>
                
                <h5>* Khái niệm về hội nhập kinh tế quốc tế</h5>
                <p>
                  Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết 
                  nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích, đồng thời 
                  tuân thủ các chuẩn mực quốc tế chung.
                </p>

                <h5>* Tính tất yếu khách quan của hội nhập kinh tế quốc tế</h5>
                <p>
                  <strong>Thứ nhất,</strong> do xu thế khách quan trong bối cảnh toàn cầu hóa kinh tế.
                </p>
                <p>
                  <strong>Thứ hai,</strong> hội nhập kinh tế quốc tế là phương thức phát triển phổ biến 
                  của các nước, nhất là các nước đang và kém phát triển trong điều kiện hiện nay.
                </p>
              </div>
            </div>

            <div id="section-2-2">
              <h3 id="integration-impact">2. Tác động của hội nhập kinh tế quốc tế đến quá trình phát triển của Việt Nam</h3>
              
              <h4>a) Tác động tích cực của hội nhập kinh tế quốc tế</h4>
              <ul>
                <li>Tạo điều kiện mở rộng thị trường, tiếp thu khoa học - công nghệ, vốn, chuyển dịch cơ cấu kinh tế</li>
                <li>Tạo cơ hội để nâng cao chất lượng nguồn nhân lực</li>
                <li>Tạo điều kiện để thúc đẩy hội nhập của các lĩnh vực văn hóa, chính trị, củng cố an ninh - quốc phòng</li>
              </ul>

              <h4>b) Tác động tiêu cực của hội nhập kinh tế quốc tế</h4>
              <ul>
                <li>Làm gia tăng sự cạnh tranh gay gắt</li>
                <li>Có thể làm gia tăng sự phụ thuộc của nền kinh tế vào thị trường bên ngoài</li>
                <li>Có thể dẫn đến phân phối không công bằng về lợi ích</li>
                <li>Nguy cơ xói mòn bản sắc văn hóa dân tộc</li>
              </ul>
            </div>

            <div id="section-2-3">
              <h3 id="integration-direction">3. Phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế</h3>
              
              <ul>
                <li>Nhận thức sâu sắc về thời cơ và thách thức do hội nhập kinh tế quốc tế mang lại</li>
                <li>Xây dựng chiến lược và lộ trình hội nhập kinh tế phù hợp</li>
                <li>Tích cực, chủ động tham gia vào các liên kết kinh tế quốc tế</li>
                <li>Hoàn thiện thể chế kinh tế và luật pháp</li>
                <li>Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế</li>
                <li>Xây dựng nền kinh tế độc lập, tự chủ của Việt Nam</li>
              </ul>
            </div>
          </section>

          <div className="summary-box">
            <h3>TÓM TẮT CHƯƠNG</h3>
            <p>
              Công nghiệp hóa, hiện đại hóa là quá trình tất yếu đối với sự phát triển của Việt Nam. 
              Việt Nam cần thực hiện khai thác lợi thế của quốc gia đi sau để thực hiện thành công 
              công nghiệp hóa, hiện đại hóa.
            </p>
            <p>
              Hội nhập kinh tế quốc tế là đòi hỏi khách quan của thời kỳ toàn cầu hóa. Việt Nam cần 
              phải tích cực và chủ động tham gia hội nhập kinh tế quốc tế, xây dựng chiến lược và lộ 
              trình hội nhập phù hợp.
            </p>
          </div>
        </main>

        <LearnToc />
      </div>
    </div>
  )
}

export default Learn
