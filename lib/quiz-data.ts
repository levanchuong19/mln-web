// Dữ liệu câu hỏi trắc nghiệm về Kinh Tế Chính Trị Mác-Lênin
// 6 bộ câu hỏi từ dễ đến khó, mỗi bộ 6-8 câu

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number // index của đáp án đúng (0-based)
  explanation?: string
}

export interface QuizSet {
  id: string
  title: string
  difficulty: "dễ" | "trung bình" | "khó" | "rất khó" | "cực khó" | "chuyên sâu"
  level: number // 1-6
  questions: Question[]
}

export const quizSets: QuizSet[] = [
  // Bộ 1: Dễ - Kiến thức cơ bản
  {
    id: "quiz-1",
    title: "Bộ 1: Kiến Thức Cơ Bản",
    difficulty: "dễ",
    level: 1,
    questions: [
      {
        id: "q1-1",
        question: "Năm nào Đại hội Đảng VI khởi xướng công cuộc Đổi Mới?",
        options: ["1985", "1986", "1987", "1988"],
        correctAnswer: 1,
        explanation: "Đại hội Đảng VI diễn ra vào tháng 12/1986, đánh dấu bước ngoặt lịch sử với công cuộc Đổi Mới."
      },
      {
        id: "q1-2",
        question: "GDP bình quân đầu người của Việt Nam năm 1986 là khoảng bao nhiêu?",
        options: ["50 USD", "100 USD", "200 USD", "300 USD"],
        correctAnswer: 1,
        explanation: "GDP bình quân đầu người năm 1986 chỉ đạt khoảng 100 USD, phản ánh tình trạng khủng hoảng kinh tế nghiêm trọng."
      },
      {
        id: "q1-3",
        question: "Hai trụ cột tăng trưởng của mô hình kinh tế Việt Nam là gì?",
        options: [
          "Nông nghiệp và Công nghiệp",
          "FDI và Xuất khẩu",
          "Du lịch và Dịch vụ",
          "Khai khoáng và Năng lượng"
        ],
        correctAnswer: 1,
        explanation: "FDI (Đầu tư trực tiếp nước ngoài) và Xuất khẩu là hai trụ cột chính của mô hình tăng trưởng Việt Nam."
      },
      {
        id: "q1-4",
        question: "Viết tắt LLSX trong triết học Mác-Lênin có nghĩa là gì?",
        options: [
          "Lực lượng sản xuất",
          "Lực lượng sáng tạo",
          "Lực lượng sống",
          "Lực lượng sản phẩm"
        ],
        correctAnswer: 0,
        explanation: "LLSX là viết tắt của Lực lượng sản xuất - một khái niệm cơ bản trong triết học Mác-Lênin."
      },
      {
        id: "q1-5",
        question: "GDP của Việt Nam năm 2024 là khoảng bao nhiêu tỷ USD?",
        options: ["300 tỷ USD", "400 tỷ USD", "476 tỷ USD", "500 tỷ USD"],
        correctAnswer: 2,
        explanation: "GDP Việt Nam năm 2024 đạt 476.39 tỷ USD, tăng hơn 30 lần so với năm 1986."
      },
      {
        id: "q1-6",
        question: "QHSX là viết tắt của thuật ngữ nào?",
        options: [
          "Quan hệ sản xuất",
          "Quan hệ sống",
          "Quan hệ sáng tạo",
          "Quan hệ sản phẩm"
        ],
        correctAnswer: 0,
        explanation: "QHSX là viết tắt của Quan hệ sản xuất - thể chế, chính sách, thị trường trong nền kinh tế."
      }
    ]
  },

  // Bộ 2: Trung bình - Hiểu biết về các giai đoạn
  {
    id: "quiz-2",
    title: "Bộ 2: Các Giai Đoạn Phát Triển",
    difficulty: "trung bình",
    level: 2,
    questions: [
      {
        id: "q2-1",
        question: "Giai đoạn nào Việt Nam chuyển mình từ nước nghèo nhất thành thu nhập trung bình thấp?",
        options: [
          "Bối cảnh Khủng hoảng (Trước 1986)",
          "Bước ngoặt Đổi Mới (1986)",
          "Giai đoạn Hội nhập (1995-2020)",
          "Chuyển đổi số (2020-Nay)"
        ],
        correctAnswer: 2,
        explanation: "Giai đoạn Hội nhập (1995-2020) là thời kỳ Việt Nam chuyển mình từ một trong những nước nghèo nhất thành quốc gia thu nhập trung bình thấp."
      },
      {
        id: "q2-2",
        question: "Đặc điểm nào KHÔNG phải của mô hình kinh tế kế hoạch hóa tập trung trước 1986?",
        options: [
          "Quan liêu, bao cấp",
          "Bộc lộ sự lạc hậu",
          "Công nhận kinh tế thị trường",
          "Nền kinh tế bị cô lập quốc tế"
        ],
        correctAnswer: 2,
        explanation: "Mô hình kế hoạch hóa tập trung trước 1986 KHÔNG công nhận kinh tế thị trường. Đây là đặc điểm của mô hình sau Đổi Mới."
      },
      {
        id: "q2-3",
        question: "Giai đoạn Chuyển đổi số (2020-Nay) tập trung vào lĩnh vực nào?",
        options: [
          "Nông nghiệp truyền thống",
          "Sản xuất lắp ráp",
          "AI, bán dẫn, công nghệ cao",
          "Khai thác tài nguyên"
        ],
        correctAnswer: 2,
        explanation: "Giai đoạn Chuyển đổi số tập trung vào AI, bán dẫn và các lĩnh vực công nghệ cao, chuyển dịch từ sản xuất truyền thống."
      },
      {
        id: "q2-4",
        question: "Phong trào 'phá rào' trước 1986 phản ánh điều gì?",
        options: [
          "Sự thành công của mô hình cũ",
          "Đòi hỏi thay đổi không thể đảo ngược",
          "Sự ổn định của nền kinh tế",
          "Chính sách mới của nhà nước"
        ],
        correctAnswer: 1,
        explanation: "Phong trào 'phá rào' tự phát phản ánh đòi hỏi thay đổi không thể đảo ngược, cho thấy mô hình cũ không còn phù hợp."
      },
      {
        id: "q2-5",
        question: "Quyết định Đổi Mới năm 1986 mang tính chất gì?",
        options: [
          "Lý luận cứng nhắc",
          "Thực dụng (pragmatic)",
          "Bảo thủ",
          "Cực đoan"
        ],
        correctAnswer: 1,
        explanation: "Quyết định Đổi Mới mang tính 'thực dụng' sâu sắc, ưu tiên 'điều gì sẽ hoạt động tốt nhất' thay vì cam kết lý luận cứng nhắc."
      },
      {
        id: "q2-6",
        question: "Tỷ trọng lao động Nông nghiệp năm 2019 và 2024 lần lượt là?",
        options: [
          "34.7% và 26.5%",
          "26.5% và 34.7%",
          "40% và 30%",
          "30% và 20%"
        ],
        correctAnswer: 0,
        explanation: "Tỷ trọng lao động Nông nghiệp giảm từ 34.7% (2019) xuống 26.5% (2024), phản ánh quá trình công nghiệp hóa."
      },
      {
        id: "q2-7",
        question: "Vốn FDI giải ngân năm 2024 là bao nhiêu?",
        options: ["20 tỷ USD", "23.18 tỷ USD", "25.35 tỷ USD", "30 tỷ USD"],
        correctAnswer: 2,
        explanation: "Vốn FDI giải ngân năm 2024 đạt 25.35 tỷ USD, tăng so với 23.18 tỷ USD năm 2023."
      }
    ]
  },

  // Bộ 3: Khó - Triết học và lý luận
  {
    id: "quiz-3",
    title: "Bộ 3: Triết Học Mác-Lênin",
    difficulty: "khó",
    level: 3,
    questions: [
      {
        id: "q3-1",
        question: "Theo quy luật triết học Mác-Lênin, quan hệ sản xuất (QHSX) phải như thế nào với lực lượng sản xuất (LLSX)?",
        options: [
          "Độc lập hoàn toàn",
          "Phù hợp với trình độ phát triển",
          "Đối lập nhau",
          "Không liên quan"
        ],
        correctAnswer: 1,
        explanation: "Quy luật cơ bản: QHSX phải phù hợp với trình độ phát triển của LLSX. Khi LLSX phát triển, QHSX cũng phải thay đổi."
      },
      {
        id: "q3-2",
        question: "Trong CMCN 4.0, yếu tố nào trở thành yếu tố sản xuất quyết định?",
        options: [
          "Lao động phổ thông",
          "Vốn tài chính",
          "Tri thức và thông tin",
          "Tài nguyên thiên nhiên"
        ],
        correctAnswer: 2,
        explanation: "Trong CMCN 4.0, tri thức và thông tin trở thành yếu tố sản xuất quyết định, thay thế lao động phổ thông."
      },
      {
        id: "q3-3",
        question: "Tại sao hội nhập kinh tế quốc tế là giải pháp để mở rộng QHSX?",
        options: [
          "Vì QHSX không thể bị giới hạn trong biên giới quốc gia khi LLSX phát triển toàn cầu",
          "Vì nó giúp tăng GDP",
          "Vì nó tạo việc làm",
          "Vì nó giảm chi phí"
        ],
        correctAnswer: 0,
        explanation: "Khi LLSX (CMCN 4.0) phát triển mang tính toàn cầu, QHSX không thể bị giới hạn trong biên giới quốc gia. Hội nhập là giải pháp để mở rộng QHSX."
      },
      {
        id: "q3-4",
        question: "Công nghiệp hóa, Hiện đại hóa (CNH-HĐH) ngày nay yêu cầu gì?",
        options: [
          "Chỉ cần nhà máy",
          "Phát triển nguồn nhân lực chất lượng cao",
          "Tăng lao động phổ thông",
          "Giảm giáo dục"
        ],
        correctAnswer: 1,
        explanation: "CNH-HĐH ngày nay không chỉ là nhà máy, mà yêu cầu bắt buộc phải phát triển nguồn nhân lực chất lượng cao để đáp ứng LLSX mới."
      },
      {
        id: "q3-5",
        question: "Mô hình kinh tế thị trường định hướng XHCN của Việt Nam được đánh giá là gì?",
        options: [
          "Công thức cố định",
          "Mô hình mở, sáng tạo và liên tục vận động",
          "Mô hình đóng",
          "Mô hình bất biến"
        ],
        correctAnswer: 1,
        explanation: "Mô hình này là một 'mô hình mở', sáng tạo và liên tục vận động, không phải công thức cố định."
      },
      {
        id: "q3-6",
        question: "Theo triết học Mác-Lênin, kinh tế thị trường được coi là gì trong mô hình Việt Nam?",
        options: [
          "Đối lập với CNXH",
          "Sản phẩm của văn minh nhân loại, công cụ để đạt mục tiêu XHCN",
          "Không liên quan đến CNXH",
          "Thay thế CNXH"
        ],
        correctAnswer: 1,
        explanation: "Việt Nam coi kinh tế thị trường là 'sản phẩm của văn minh nhân loại', một công cụ hiệu quả để đạt mục tiêu XHCN."
      },
      {
        id: "q3-7",
        question: "Đặc trưng cơ bản của mô hình kinh tế thị trường định hướng XHCN là gì?",
        options: [
          "Chỉ có kinh tế nhà nước",
          "Nhiều hình thức sở hữu và thành phần kinh tế cùng phát triển",
          "Chỉ có kinh tế tư nhân",
          "Không có thành phần kinh tế nào"
        ],
        correctAnswer: 1,
        explanation: "Đặc trưng là nhiều hình thức sở hữu và thành phần kinh tế cùng phát triển, trong đó kinh tế nhà nước giữ vai trò chủ đạo."
      },
      {
        id: "q3-8",
        question: "Vai trò của Nhà nước trong mô hình kinh tế thị trường định hướng XHCN là gì?",
        options: [
          "Không can thiệp",
          "Chủ thể quản lý, điều tiết và định hướng phát triển",
          "Chỉ quản lý",
          "Chỉ điều tiết"
        ],
        correctAnswer: 1,
        explanation: "Nhà nước là chủ thể quản lý, điều tiết và định hướng phát triển, bảo đảm sự hài hòa giữa các lợi ích."
      }
    ]
  },

  // Bộ 4: Rất khó - Phân tích tác động
  {
    id: "quiz-4",
    title: "Bộ 4: Tác Động Toàn Cầu Hóa",
    difficulty: "rất khó",
    level: 4,
    questions: [
      {
        id: "q4-1",
        question: "Tác động tiêu cực nào của CMCN 4.0 đe dọa lợi thế cạnh tranh của Việt Nam?",
        options: [
          "Tăng lao động",
          "Robot và tự động hóa đe dọa lợi thế lao động giá rẻ",
          "Giảm công nghệ",
          "Tăng chi phí"
        ],
        correctAnswer: 1,
        explanation: "Robot và tự động hóa đe dọa trực tiếp lợi thế cạnh tranh dựa trên lao động phổ thông, giá rẻ - nền tảng của các ngành lắp ráp, dệt may."
      },
      {
        id: "q4-2",
        question: "Rủi ro nào đi kèm với việc ứng dụng mạnh mẽ AI và điện toán đám mây?",
        options: [
          "Tăng chi phí",
          "Phụ thuộc vào dịch vụ đám mây nước ngoài, rủi ro an ninh mạng",
          "Giảm hiệu quả",
          "Không có rủi ro"
        ],
        correctAnswer: 1,
        explanation: "Việc ứng dụng mạnh mẽ AI và điện toán đám mây dẫn đến phụ thuộc vào dịch vụ đám mây nước ngoài, kéo theo rủi ro lớn về an ninh mạng và an toàn dữ liệu."
      },
      {
        id: "q4-3",
        question: "Tỷ lệ lao động nông thôn không có chuyên môn kỹ thuật là bao nhiêu?",
        options: ["70%", "80%", "91.4%", "95%"],
        correctAnswer: 2,
        explanation: "91.4% lao động ở nông thôn không có chuyên môn kỹ thuật, đây là thách thức lớn trong bối cảnh CMCN 4.0."
      },
      {
        id: "q4-4",
        question: "Thách thức về chênh lệch phát triển vùng miền thể hiện ở đâu?",
        options: [
          "FDI và cơ hội việc làm tập trung vào các đô thị lớn",
          "Tất cả vùng đều phát triển đồng đều",
          "Nông thôn phát triển hơn thành thị",
          "Không có chênh lệch"
        ],
        correctAnswer: 0,
        explanation: "FDI và cơ hội việc làm chất lượng cao có xu hướng tập trung vào các đô thị lớn (như Đông Nam Bộ), trong khi các vùng khác bị bỏ lại phía sau."
      },
      {
        id: "q4-5",
        question: "CMCN 4.0 được xem là gì trong cơ cấu lại nền kinh tế Việt Nam?",
        options: [
          "Yếu tố phụ",
          "Nhân tố quyết định",
          "Yếu tố không quan trọng",
          "Yếu tố tùy chọn"
        ],
        correctAnswer: 1,
        explanation: "CMCN 4.0 được xem là 'nhân tố quyết định' để cơ cấu lại nền kinh tế, phát triển kinh tế số và nâng cao sức cạnh tranh."
      },
      {
        id: "q4-6",
        question: "Độ mở thương mại của Việt Nam (tổng XNK/GDP) là bao nhiêu?",
        options: ["100%", "120%", "164.8%", "200%"],
        correctAnswer: 2,
        explanation: "Độ mở thương mại 164.8% GDP phản ánh mức độ hội nhập sâu rộng của Việt Nam vào nền kinh tế toàn cầu."
      },
      {
        id: "q4-7",
        question: "Tỷ trọng vốn FDI giải ngân vào sản xuất là bao nhiêu?",
        options: ["60%", "70%", "81.4%", "90%"],
        correctAnswer: 2,
        explanation: "81.4% vốn FDI giải ngân vào sản xuất, thể hiện mô hình 'trung tâm lắp ráp dựa trên FDI'."
      }
    ]
  },

  // Bộ 5: Cực khó - Vai trò thế hệ trẻ
  {
    id: "quiz-5",
    title: "Bộ 5: Vai Trò Thế Hệ Trẻ",
    difficulty: "cực khó",
    level: 5,
    questions: [
      {
        id: "q5-1",
        question: "Thế hệ trẻ được xác định là gì trong quá trình chuyển đổi số?",
        options: [
          "Lực lượng phụ",
          "Lực lượng nòng cốt và lực lượng xung kích",
          "Lực lượng quan sát",
          "Lực lượng không quan trọng"
        ],
        correctAnswer: 1,
        explanation: "Trong bối cảnh chuyển đổi số, thanh niên được xác định là 'lực lượng nòng cốt' và 'lực lượng xung kích' để thực hiện các nhiệm vụ chiến lược."
      },
      {
        id: "q5-2",
        question: "5 lĩnh vực then chốt mà Thủ tướng kêu gọi thanh niên 'xung kích' KHÔNG bao gồm?",
        options: [
          "Nâng cao nhận thức số",
          "Xây dựng thể chế số",
          "Phát triển hạ tầng số",
          "Phát triển nông nghiệp truyền thống"
        ],
        correctAnswer: 3,
        explanation: "5 lĩnh vực là: (1) nâng cao nhận thức số, (2) xây dựng thể chế số, (3) phát triển hạ tầng số, (4) đào tạo nguồn nhân lực số, và (5) đổi mới sáng tạo, khởi nghiệp."
      },
      {
        id: "q5-3",
        question: "Người kiến tạo tương lai (Architect) khác với Người sáng tạo (Creator) ở điểm nào?",
        options: [
          "Chỉ tạo ra sản phẩm",
          "Không chỉ tạo sản phẩm mà còn xây dựng nền tảng, đào tạo nhân lực và dẫn dắt chuyển đổi",
          "Chỉ sử dụng sản phẩm",
          "Không có khác biệt"
        ],
        correctAnswer: 1,
        explanation: "Người kiến tạo tương lai không chỉ tạo ra sản phẩm mà còn tham gia xây dựng nền tảng, đào tạo nguồn nhân lực số, và dẫn dắt sự chuyển dịch của Việt Nam."
      },
      {
        id: "q5-4",
        question: "Hệ sinh thái hỗ trợ khởi nghiệp đổi mới sáng tạo bao gồm những gì?",
        options: [
          "Chỉ các quỹ vay",
          "Các quỹ vay, trung tâm hỗ trợ, và sự kết nối giữa viện, trường, doanh nghiệp",
          "Chỉ trung tâm hỗ trợ",
          "Không có hệ sinh thái"
        ],
        correctAnswer: 1,
        explanation: "Hệ sinh thái bao gồm các cơ quan quản lý, các quỹ vay, trung tâm hỗ trợ, và sự kết nối giữa viện, trường, doanh nghiệp."
      },
      {
        id: "q5-5",
        question: "Thế hệ trẻ là lực lượng tiên phong trong các lĩnh vực nào?",
        options: [
          "Nông nghiệp truyền thống",
          "Kinh tế số, khởi nghiệp sáng tạo, AI – Data – Green Economy",
          "Khai thác tài nguyên",
          "Sản xuất lắp ráp"
        ],
        correctAnswer: 1,
        explanation: "Thế hệ trẻ là lực lượng tiên phong trong kinh tế số, khởi nghiệp sáng tạo, AI – Data – Green Economy."
      },
      {
        id: "q5-6",
        question: "Người tiêu dùng (Consumer) trong nền kinh tế mở là gì?",
        options: [
          "Người tạo ra sản phẩm",
          "Người thụ hưởng thành quả của hội nhập, sử dụng sản phẩm công nghệ toàn cầu",
          "Người kiến tạo tương lai",
          "Người quản lý"
        ],
        correctAnswer: 1,
        explanation: "Người tiêu dùng là người thụ hưởng thành quả của hội nhập, sử dụng các sản phẩm công nghệ toàn cầu và dịch vụ đám mây."
      },
      {
        id: "q5-7",
        question: "Phần lớn công việc do FDI tạo ra cho lao động nữ trong ngành chế tạo có đặc điểm gì?",
        options: [
          "Đòi hỏi kỹ năng cao",
          "Truyền thống, không đòi hỏi kỹ năng cao",
          "Sáng tạo",
          "Quản lý"
        ],
        correctAnswer: 1,
        explanation: "Phần lớn công việc do FDI tạo ra cho lao động nữ (đặc biệt trong ngành chế tạo) là các công việc 'truyền thống, không đòi hỏi kỹ năng cao'."
      },
      {
        id: "q5-8",
        question: "Mục tiêu của việc chuyển dịch từ trung tâm lắp ráp sang quốc gia đổi mới sáng tạo là gì?",
        options: [
          "Giữ nguyên mô hình cũ",
          "Vượt qua thách thức về rào cản kỹ năng (91.4% lao động nông thôn không có kỹ năng)",
          "Giảm giáo dục",
          "Tăng lao động phổ thông"
        ],
        correctAnswer: 1,
        explanation: "Mục tiêu là vượt qua thách thức về rào cản kỹ năng, chuyển từ mô hình dựa trên lao động giá rẻ sang đổi mới sáng tạo thực thụ."
      }
    ]
  },

  // Bộ 6: Chuyên sâu - Câu hỏi trung tâm và phân tích
  {
    id: "quiz-6",
    title: "Bộ 6: Phân Tích Chuyên Sâu",
    difficulty: "chuyên sâu",
    level: 6,
    questions: [
      {
        id: "q6-1",
        question: "Câu hỏi trung tâm về mô hình kinh tế thị trường định hướng XHCN là gì?",
        options: [
          "Là sự lựa chọn tất yếu của lịch sử HAY là chiến lược thích ứng trong hội nhập toàn cầu?",
          "Là mô hình cố định hay linh hoạt?",
          "Là mô hình đóng hay mở?",
          "Là mô hình thành công hay thất bại?"
        ],
        correctAnswer: 0,
        explanation: "Câu hỏi trung tâm: 'Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam — là sự lựa chọn tất yếu của lịch sử hay là chiến lược thích ứng trong hội nhập toàn cầu?'"
      },
      {
        id: "q6-2",
        question: "Kết luận về mô hình kinh tế thị trường định hướng XHCN là gì?",
        options: [
          "Là công thức cố định",
          "Bắt đầu từ tất yếu lịch sử và phát triển thành công nhờ chiến lược thích ứng",
          "Chỉ là tất yếu lịch sử",
          "Chỉ là chiến lược thích ứng"
        ],
        correctAnswer: 1,
        explanation: "Mô hình bắt đầu từ một sự lựa chọn tất yếu của lịch sử để giải quyết khủng hoảng, nhưng phát triển và thành công được nhờ một chiến lược thích ứng đầy thực dụng và sáng tạo."
      },
      {
        id: "q6-3",
        question: "Đặc điểm nào của 'Chủ nghĩa Thực dụng' trong quá trình Đổi Mới?",
        options: [
          "Dựa trên cam kết lý luận cứng nhắc",
          "Dựa trên cân nhắc thực dụng về điều gì sẽ hoạt động tốt nhất",
          "Dựa trên ý thức hệ thuần túy",
          "Dựa trên mô hình nước ngoài"
        ],
        correctAnswer: 1,
        explanation: "Việt Nam áp dụng mô hình này 'không dựa trên một cam kết lý luận hay ý thức hệ... mà dựa trên những cân nhắc thực dụng về điều gì sẽ hoạt động tốt nhất'."
      },
      {
        id: "q6-4",
        question: "Mô hình 'trung tâm lắp ráp dựa trên FDI' thể hiện điều gì?",
        options: [
          "Sự thất bại của hội nhập",
          "Sự thích ứng thành công với chuỗi cung ứng toàn cầu",
          "Sự cô lập",
          "Sự bảo thủ"
        ],
        correctAnswer: 1,
        explanation: "Mô hình 'trung tâm lắp ráp dựa trên FDI' (81.4% vốn FDI vào sản xuất) là một sự thích ứng thành công với chuỗi cung ứng toàn cầu."
      },
      {
        id: "q6-5",
        question: "Sự 'sáng tạo trong vận dụng lý luận' thể hiện ở đâu?",
        options: [
          "Xem KTTT là đối lập với CNXH",
          "Coi KTTT là 'sản phẩm của văn minh nhân loại', công cụ để đạt mục tiêu XHCN",
          "Từ chối KTTT",
          "Áp dụng KTTT thuần túy"
        ],
        correctAnswer: 1,
        explanation: "Việt Nam 'vận dụng sáng tạo' bằng cách coi KTTT là một 'sản phẩm của văn minh nhân loại', một công cụ hiệu quả nhất để đạt mục tiêu XHCN - mô hình hoàn toàn mới, chưa có tiền lệ."
      },
      {
        id: "q6-6",
        question: "Thành tựu nào KHÔNG phải của quá trình hội nhập?",
        options: [
          "Chuyển từ nước nghèo nhất thành thu nhập trung bình thấp trong 1 thế hệ",
          "Tiếp cận điện tăng từ 14% (1993) lên gần 100% (2019)",
          "Chỉ số vốn nhân lực cao nhất trong nhóm nước thu nhập trung bình thấp",
          "Giảm GDP"
        ],
        correctAnswer: 3,
        explanation: "GDP tăng mạnh, không giảm. Các thành tựu khác đều là kết quả của quá trình hội nhập và phát triển."
      },
      {
        id: "q6-7",
        question: "Hạn chế nào về phụ thuộc công nghệ?",
        options: [
          "Không có hạn chế",
          "Phụ thuộc vào dịch vụ đám mây nước ngoài, rủi ro an ninh mạng",
          "Tự chủ hoàn toàn",
          "Không sử dụng công nghệ"
        ],
        correctAnswer: 1,
        explanation: "Việc ứng dụng mạnh mẽ AI và điện toán đám mây dẫn đến 'sự phụ thuộc ngày càng tăng vào các dịch vụ đám mây' (thường là của nước ngoài), kéo theo rủi ro về an ninh mạng và an toàn dữ liệu."
      },
      {
        id: "q6-8",
        question: "Mô hình kinh tế thị trường định hướng XHCN được đánh giá là gì?",
        options: [
          "Mô hình đóng, cố định",
          "Mô hình mở, sáng tạo và liên tục vận động",
          "Mô hình bất biến",
          "Mô hình sao chép"
        ],
        correctAnswer: 1,
        explanation: "Mô hình này không phải là một công thức cố định, mà là một 'mô hình mở', sáng tạo và liên tục vận động, được sinh ra từ tất yếu lịch sử nhưng phát triển nhờ chiến lược thích ứng."
      }
    ]
  }
]

