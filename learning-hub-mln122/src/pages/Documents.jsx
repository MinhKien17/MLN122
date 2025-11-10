import React, { useState } from 'react';
// Import 2 file PDF từ thư mục assets
import GiaoTrinh111 from '../assets/document/Giáo trình MLN111.pdf';
import GiaoTrinh122 from '../assets/document/Giáo trình MLN122.pdf';

// Import CSS mới cho trang này
import './Documents.css';

// Import icon Download
import { FiDownload, FiBookOpen } from 'react-icons/fi';

// 1. Tạo danh sách tài liệu
const documentsList = [
  {
    id: 'gt111',
    title: 'Giáo trình MLN111',
    url: GiaoTrinh111
  },
  {
    id: 'gt122',
    title: 'Giáo trình MLN122',
    url: GiaoTrinh122
  },
  // (Thêm các tài liệu khác vào đây nếu cần)
];

const Documents = () => {
  // 2. Dùng useState để lưu trữ tài liệu đang được chọn
  // Đặt GiaoTrinh111 làm tài liệu mặc định
  const [selectedDoc, setSelectedDoc] = useState(documentsList[0]);

  return (
    <div className="doc-page-container">
      {/* 3. SIDEBAR BÊN TRÁI */}
      <aside className="doc-sidebar">
        <h3>Danh mục tài liệu</h3>
        <ul>
          {documentsList.map((doc) => (
            <li
              key={doc.id}
              // Thêm class 'active' nếu doc này đang được chọn
              className={selectedDoc.id === doc.id ? 'doc-item active' : 'doc-item'}
            >
              {/* Nút để XEM tài liệu */}
              <button
                className="doc-view-btn"
                onClick={() => setSelectedDoc(doc)}
              >
                <FiBookOpen />
                <span>{doc.title}</span>
              </button>

              {/* Nút để TẢI VỀ tài liệu */}
              <a
                href={doc.url}
                download={doc.title}
                className="doc-download-btn"
                title={`Tải về ${doc.title}`}
              >
                <FiDownload />
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* 4. NỘI DUNG BÊN PHẢI */}
      <main className="doc-viewer-content">
        <h2 className="doc-viewer-title">{selectedDoc.title}</h2>

        {/* 5. Trình nhúng PDF */}
        <iframe
          src={selectedDoc.url}
          title={selectedDoc.title}
          width="100%"
          height="100%"
          className="pdf-iframe"
        >
          Trình duyệt của bạn không hỗ trợ iFrame.
          <a href={selectedDoc.url}>Nhấn vào đây để xem tài liệu</a>.
        </iframe>
      </main>
    </div>
  );
};

export default Documents;