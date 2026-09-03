// ============================================================
//  cv.js — 홈페이지의 모든 내용은 이 파일 하나에서 관리한다.
//  - 텍스트는 { en: "...", ko: "..." } 형태. 한쪽만 있으면 그대로 fallback.
//  - 항목 추가/삭제는 배열에 객체를 넣고 빼면 끝. HTML/CSS 수정 불필요.
//  - 링크가 없는 필드는 "" 또는 생략하면 렌더링에서 자동으로 숨긴다.
//  - 날짜는 "YYYY-MM" 문자열. news 는 위에서부터 최신순으로 유지.
// ============================================================

window.CV = {
  meta: {
    name: { en: "Eunsang Eom", ko: "엄은상" },
    nameSub: { en: "엄은상 · 嚴恩相", ko: "Eunsang Eom · 嚴恩相" },
    title: {
      en: "Ph.D. Candidate, School of Electrical Engineering, Korea University",
      ko: "고려대학교 전기전자공학부 박사수료",
    },
    subtitle: {
      en: "HPIC Lab (advisor: Prof. Jong-Kook Kim) · Founder of Codle, an AI learning platform",
      ko: "고성능컴퓨팅 연구실 (지도교수 김종국) · AI 학습플랫폼 코들(Codle) 창업자",
    },
    email: "justin5324@korea.ac.kr",
    github: "https://github.com/eesmonolith",
    scholar: "",        // Google Scholar 프로필 URL. 비우면 숨김.
    linkedin: "",       // LinkedIn URL. 비우면 숨김.
    orcid: "",          // ORCID URL. 비우면 숨김.
    cvPdf: "",          // 공개용 CV PDF를 files/ 에 넣고 경로 지정 (예: "files/CV_Eunsang_Eom.pdf"). 비우면 버튼 숨김.
                        // ⚠️ 전화번호·주소·생년월일 있는 지원용 이력서는 올리지 말 것.
    location: { en: "Seoul, Republic of Korea", ko: "서울, 대한민국" },
    photo: "assets/photo.jpg",
  },

  about: {
    en: [
      "I am a Ph.D. candidate (ABD) in the School of Electrical Engineering at Korea University, working in the High Performance and Intelligent Computing (HPIC) Lab with Prof. Jong-Kook Kim. I study how learners interact with AI-assisted programming environments at scale, using data mining and learning analytics to turn platform logs into evidence about help-seeking, feedback, and learning transfer.",
      "Before returning to research full time, I founded Team Monolith (2021–2026) and led the development of Codle, an AI learning platform deployed nationwide in Korean schools and universities, as well as the AI Digital Textbook for high-school Informatics published by Kumsung. Much of my research is grounded in the longitudinal data these deployments produced.",
      "My current work sits at the intersection of sequential pattern mining, knowledge tracing, and large language models for education.",
    ],
    ko: [
      "고려대학교 전기전자공학부 고성능컴퓨팅 연구실(지도교수 김종국)에서 교육용 AI를 전공하는 박사수료 연구자입니다. 대규모 AI 보조 프로그래밍 환경에서 학습자가 어떻게 행동하는지를 데이터마이닝과 학습분석으로 연구하며, 플랫폼 로그를 도움 요청·피드백·학습 전이에 관한 근거로 바꾸는 일을 합니다.",
      "연구에 전념하기 전에는 팀모노리스(2021–2026)를 창업하여 전국 학교와 대학에 배포된 AI 학습플랫폼 코들(Codle)과 금성출판사 고등학교 「정보」 AI 디지털교과서 개발을 총괄했습니다. 현재 연구의 상당 부분은 이 배포에서 축적된 종단 데이터에 기반합니다.",
      "현재 관심 분야는 순차패턴마이닝, 지식추적(Knowledge Tracing), 교육용 대규모 언어모델의 교차점입니다.",
    ],
  },

  interests: [
    { en: "Learning Analytics", ko: "학습분석" },
    { en: "Sequential Pattern Mining", ko: "순차패턴마이닝" },
    { en: "Knowledge Tracing", ko: "지식추적" },
    { en: "LLMs for Education", ko: "교육용 LLM" },
    { en: "AI-Assisted Programming Education", ko: "AI 보조 프로그래밍교육" },
    { en: "AI Digital Textbooks", ko: "AI 디지털교과서" },
  ],

  // 최신순. 위에 추가.
  news: [
    { date: "2026-08", en: "Paper accepted to IEEE ICDM 2026: Multi-View Pattern Selection for Cohort-Robust Sequential Pattern Mining.", ko: "IEEE ICDM 2026 논문 채택: Multi-View Pattern Selection for Cohort-Robust Sequential Pattern Mining." },
    { date: "2026-07", en: "Presented at the CATS Workshop @ AIED 2026 (Seoul).", ko: "AIED 2026 CATS 워크샵(서울) 발표." },
    { date: "2026-07", en: "Paper accepted to SIAM SDM 2026: Outcome-Aware Sequential Pattern Mining for Assisted-to-Independent Transition Analysis.", ko: "SIAM SDM 2026 논문 채택: Outcome-Aware Sequential Pattern Mining for Assisted-to-Independent Transition Analysis." },
    { date: "2026-05", en: "Paper accepted to IEEE CSEE&T 2026 on multi-semester AI error feedback.", ko: "IEEE CSEE&T 2026 논문 채택 (다학기 AI 오류 피드백 분석)." },
    { date: "2026-03", en: "Paper accepted to ITS 2026 on help-seeking profiles and at-risk detection.", ko: "ITS 2026 논문 채택 (도움 요청 프로파일과 위험학생 조기 탐지)." },
    { date: "2026-03", en: "Started service as a Technical Research Personnel (전문연구요원) at HPIC Lab, Korea University.", ko: "고려대학교 고성능컴퓨팅 연구실 전문연구요원 복무 시작." },
    { date: "2026-02", en: "Spoke at the Sharjah International Summit on Improvement in Education and the World Education Summit in Dubai, UAE.", ko: "샤르자 국제 교육개선 서밋과 두바이 World Education Summit(UAE) 연사." },
    { date: "2026-01", en: "Signed an MOU on educational AI with Sharjah Private Education Authority (SPEA), UAE.", ko: "샤르자 교육청(SPEA, UAE)과 교육 AI 협력 MOU 체결." },
    { date: "2025-09", en: "Speaker at the World Knowledge Forum (Maeil Business Newspaper).", ko: "세계지식포럼(매일경제) 연사." },
  ],

  // type: "conference" | "workshop" | "journal" | "preprint"
  // 게재 확정된 논문만 기재. 심사 중 논문은 익명심사 보호를 위해 올리지 않는다.
  publications: [
    {
      title: "Multi-View Pattern Selection for Cohort-Robust Sequential Pattern Mining",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: { en: "IEEE International Conference on Data Mining (ICDM 2026)", ko: "IEEE International Conference on Data Mining (ICDM 2026)" },
      year: 2026, type: "conference",
      note: { en: "CORE A*", ko: "CORE A*" },
      links: { pdf: "", code: "https://github.com/eesmonolith/mvps-cohort-spm", doi: "" },
    },
    {
      title: "Outcome-Aware Sequential Pattern Mining for Assisted-to-Independent Transition Analysis",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: { en: "SIAM International Conference on Data Mining (SDM 2026)", ko: "SIAM International Conference on Data Mining (SDM 2026)" },
      year: 2026, type: "conference",
      note: { en: "CORE A", ko: "CORE A" },
      links: { pdf: "", code: "https://github.com/eesmonolith/htr-miner-sdm26", doi: "" },
    },
    {
      title: "Multi-Semester Analysis of AI Error Feedback in Introductory Programming: Effectiveness, Error Types, and Longitudinal Patterns",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: { en: "IEEE Conference on Software Engineering Education and Training (CSEE&T 2026)", ko: "IEEE Conference on Software Engineering Education and Training (CSEE&T 2026)" },
      year: 2026, type: "conference",
      note: { en: "", ko: "" },
      links: { pdf: "", code: "", doi: "" },
    },
    {
      title: "Help-Seeking Profiles and Early Detection of At-Risk Students in AI-Assisted Programming: A Multi-Semester Learning Analytics Study",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: { en: "International Conference on Intelligent Tutoring Systems (ITS 2026), Springer LNCS", ko: "International Conference on Intelligent Tutoring Systems (ITS 2026), Springer LNCS" },
      year: 2026, type: "conference",
      note: { en: "", ko: "" },
      links: { pdf: "", code: "", doi: "" },
    },
    {
      title: "Equal Access, Unequal Engagement: School Culture and AI Tutor Use in Korean K-12 Data Science Classrooms",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: { en: "CATS Workshop @ AIED 2026", ko: "CATS Workshop @ AIED 2026" },
      year: 2026, type: "workshop",
      note: { en: "", ko: "" },
      links: { pdf: "", code: "", doi: "" },
    },
  ],

  experience: [
    {
      period: "2026.03 – present",
      org: { en: "HPIC Lab, Korea University", ko: "고려대학교 고성능컴퓨팅 연구실" },
      role: { en: "Technical Research Personnel (전문연구요원)", ko: "전문연구요원 (박사수료 후 복무)" },
      desc: { en: "High-performance computing and AI for education research.", ko: "고성능컴퓨팅 · 교육용 AI 연구" },
    },
    {
      period: "2021.11 – 2026.02",
      org: { en: "Team Monolith", ko: "팀모노리스(Team Monolith)" },
      role: { en: "Founder & CEO", ko: "대표 (창업)" },
      desc: { en: "Led an ed-tech company building AI learning platforms; developed and operated Codle and the Kumsung high-school Informatics AI Digital Textbook.", ko: "에듀테크·AI 학습플랫폼 사업 총괄. 코들(Codle)과 금성출판사 고등 「정보」 AI 디지털교과서 개발·운영." },
    },
  ],

  teaching: [
    {
      period: "2024.12 – 2026.08",
      org: { en: "Gyeongin National University of Education", ko: "경인교육대학교" },
      role: { en: "Contract Professor", ko: "계약교수" },
      desc: { en: "Course: Understanding AI Digital Textbooks", ko: "「AI 디지털교과서의 이해」 강의" },
    },
    {
      period: "2025.03 – 2025.08",
      org: { en: "Daegu National University of Education", ko: "대구교육대학교" },
      role: { en: "Contract Professor", ko: "계약교수" },
      desc: { en: "Course: AI Learning Platforms (major elective)", ko: "「AI 학습플랫폼」 전공 강의" },
    },
  ],

  education: [
    {
      period: "2019.08 – 2026.02",
      org: { en: "Korea University", ko: "고려대학교" },
      role: { en: "Ph.D. Candidate (ABD), School of Electrical Engineering", ko: "전기전자공학부 석·박사통합과정 박사수료" },
      desc: { en: "HPIC Lab · Educational AI. Dissertation in progress.", ko: "고성능컴퓨팅 연구실 · 교육용 AI 전공. 학위논문 진행 중." },
    },
    {
      period: "",
      org: { en: "Korea University", ko: "고려대학교" },
      role: { en: "B.S., School of Electrical Engineering", ko: "전기전자공학부 학사" },
      desc: { en: "", ko: "" },
    },
  ],

  talks: [
    { date: "2026.02", title: { en: "Sharjah International Summit on Improvement in Education (5th), Sharjah, UAE (speaker)", ko: "샤르자 국제 교육개선 서밋 (5회), 샤르자, UAE 연사" }, host: { en: "Sharjah Education Academy (SEA) & Sharjah Private Education Authority (SPEA)", ko: "샤르자교육아카데미(SEA) · 샤르자교육청(SPEA) 공동 주최" } },
    { date: "2026.02", title: { en: "World Education Summit, Dubai, UAE (speaker)", ko: "World Education Summit, 두바이, UAE 연사" }, host: { en: "Elets Technomedia", ko: "Elets Technomedia" } },
    { date: "2025.10", title: { en: "Special lecture, Dongyang Mirae University", ko: "동양미래대학교 특강" }, host: { en: "Learning Spark", ko: "러닝스파크" } },
    { date: "2025.09", title: { en: "World Knowledge Forum 2025, Seoul (speaker)", ko: "세계지식포럼 2025, 서울 연사" }, host: { en: "Maeil Business Newspaper", ko: "매일경제" } },
    { date: "2025.05", title: { en: "APEC Education Ministerial Meeting 2025, Jeju — AI Digital Textbook demonstration", ko: "APEC 교육장관회의 2025, 제주 — AI 디지털교과서 시연" }, host: { en: "Ministry of Education, Republic of Korea / APEC", ko: "교육부 / APEC" } },
    { date: "2024.02", title: { en: "Classroom Revolution Leading Teachers / Touch Teachers 2nd cohort (speaker)", ko: "교실혁명 선도교사단 / 터치교사단 2기 연사" }, host: { en: "KERIS", ko: "KERIS" } },
    { date: "2023.05", title: { en: "Generative AI ASIA (speaker)", ko: "Generative AI ASIA 연사" }, host: { en: "Wrtn Technologies", ko: "뤼튼 테크놀로지스" } },
  ],

  // 언론 보도 (본인 인터뷰·본인 중심 기사 우선). EB-1A 기준 3 증빙과 동일 목록 유지.
  // url 없으면 링크 없이 제목만 표시. 원문 PDF는 ../EB1_evidence/press/ 에 별도 보존.
  press: [
    { date: "2025.02", outlet: { en: "ET News (전자신문)", ko: "전자신문" }, title: { en: "Team Monolith completes Classroom Revolution leading-teacher training program", ko: "팀모노리스, 교실혁명 선도교사단 연수 성료" }, url: "https://www.etnews.com/20250221000008" },
    { date: "2023.11", outlet: { en: "Money Today (머니투데이)", ko: "머니투데이" }, title: { en: "Interview: How a coding-education platform reached 207 schools within six months of launch", ko: "출시 6개월만에 207개 학교가 도입한 코딩교육 SW, 비결은? (인터뷰)" }, url: "https://news.mt.co.kr/mtview.php?no=2023111508383397981" },
    // { date: "YYYY.MM", outlet: { en: "JoongAng Ilbo (중앙일보)", ko: "중앙일보" }, title: { en: "", ko: "" }, url: "" },
  ],

  projects: [
    {
      name: { en: "Codle — AI learning platform", ko: "코들(Codle) — AI 학습플랫폼" },
      period: "2021.11 – 2026.02",
      desc: { en: "Designed, built, and operated an AI-assisted programming and data-science learning platform. Adopted in Korea University's first-year general education course and by schools nationwide; over 210K registered users.", ko: "AI 보조 프로그래밍·데이터과학 학습플랫폼 기획·개발·서비스 총괄. 고려대학교 1학년 기초교양 수업 도입, 전국 회원 21만 명." },
      link: "",
    },
    {
      name: { en: "AI Digital Textbook (AIDT) — High-school Informatics", ko: "AI 디지털교과서(AIDT) — 고등학교 「정보」" },
      period: "2021.11 – 2026.02",
      desc: { en: "Developed the AI Digital Textbook for the Kumsung high-school Informatics curriculum.", ko: "금성출판사 고등학교 「정보」 교과서 AI 디지털교과서 개발." },
      link: "",
    },
    {
      name: { en: "MOU with Sharjah Private Education Authority (UAE)", ko: "UAE 샤르자 교육청(SPEA) 업무협약" },
      period: "2026.01",
      desc: { en: "Educational AI cooperation agreement with SPEA, Sharjah, UAE.", ko: "샤르자 교육청(UAE)과 교육 AI 협력 MOU 체결." },
      link: "",
    },
  ],

  // 연구책임자(PI)로 수행한 과제. 연구비 단위: 천원.
  grants: [
    { period: "2025.08 – 2025.12", title: { en: "Digital-Based Education Innovation Capacity Building Program", ko: "디지털기반 교육혁신 역량강화 연수" }, funder: { en: "Seoul Education Research & Information Institute", ko: "서울시교육연구정보원" }, amount: 174969 },
    { period: "2025.08 – 2025.12", title: { en: "School-Visiting AI & Digital Competency Training 2025", ko: "학교로 찾아가는 2025 AI·디지털 역량 강화 연수" }, funder: { en: "Seoul Dongbu District Office of Education", ko: "서울시동부교육지원청" }, amount: 68860 },
    { period: "2025.05 – 2026.02", title: { en: "2025 Digital Tutor Training Center", ko: "2025 디지털튜터양성센터" }, funder: { en: "KOFAC", ko: "한국과학창의재단" }, amount: 280000 },
    { period: "2025.05 – 2025.12", title: { en: "2025 Youth SW Companion Project: Educational Program Planning & Operation", ko: "2025년 청소년 SW 동행 프로젝트 교육활동 기획·운영" }, funder: { en: "KOFAC", ko: "한국과학창의재단" }, amount: 350000 },
    { period: "2025.03 – 2025.12", title: { en: "Classroom Revolution Leading Teacher Training, 2024 H2 (Winter)", ko: "2024 하반기(동계) 교실혁명 선도교사 양성연수" }, funder: { en: "KERIS", ko: "KERIS" }, amount: 358509 },
    { period: "2024.06 – 2024.07", title: { en: "2024 K-Cloud Project: Public-Sector SaaS Development & Verification", ko: "2024년도 K-클라우드 프로젝트 공공부문 이용 SaaS 개발·검증" }, funder: { en: "KOFAC", ko: "한국과학창의재단" }, amount: 350000 },
    { period: "2024.05 – 2024.11", title: { en: "Classroom Revolution Leading Teacher Training, 2024 H1 (Summer)", ko: "2024 상반기(하계) 교실혁명 선도교사 양성연수" }, funder: { en: "KERIS", ko: "KERIS" }, amount: 850000 },
    { period: "2024.05 – 2024.11", title: { en: "AI Digital Textbook Service Model & Prototype for Middle-School Technology and Home Economics", ko: "중등 기술가정 AI 디지털교과서 서비스 모델 및 프로토타입 개발 연구" }, funder: { en: "KERIS", ko: "KERIS" }, amount: 100000 },
    { period: "2024.03 – 2025.02", title: { en: "AI Digital Textbook Service Model & Prototype for Elementary Practical Arts", ko: "초등 실과 AI 디지털교과서 서비스 모델 및 프로토타입 개발 연구" }, funder: { en: "KERIS", ko: "KERIS" }, amount: 100000 },
  ],
  grantsNote: {
    en: "Principal investigator on the 9 projects above. Additionally served as co-institution lead on 12 projects and co-investigator on 1 project (22 projects in total over the last three years).",
    ko: "위 9건은 연구책임자로 수행. 이 외 공동기관책임자 12건 · 공동연구원 1건 별도 수행 (최근 3년 총 22건).",
  },
};
