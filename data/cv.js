// ============================================================
//  cv.js — 홈페이지의 모든 내용은 이 파일 하나에서 관리한다. (영어 단일)
//  - 항목 추가/삭제는 배열에 객체를 넣고 빼면 끝. HTML/CSS 수정 불필요.
//  - 링크가 없는 필드는 "" 또는 생략하면 렌더링에서 자동으로 숨긴다.
//  - 날짜는 "YYYY-MM" 문자열. news 는 위에서부터 최신순으로 유지.
// ============================================================

window.CV = {
  meta: {
    name: "Justin Eunsang Eom",
    nameSub: "엄은상 · 嚴恩相",
    // 논문 저자명 하이라이트용. 출판된 이름 그대로 (Eunsang Eom 등).
    aliases: ["Eunsang Eom", "Justin Eunsang Eom", "Justin Eom", "E. Eom"],
    title: "Ph.D. Candidate, School of Electrical Engineering, Korea University",
    subtitle: "HPIC Lab (advisor: Prof. Jong-Kook Kim) · Founder of Codle, an AI learning platform",
    email: "justin5324@korea.ac.kr",
    github: "https://github.com/eesmonolith",
    scholar: "",        // Google Scholar 프로필 URL. 비우면 숨김.
    linkedin: "",       // LinkedIn URL. 비우면 숨김.
    orcid: "",          // ORCID URL. 비우면 숨김.
    cvPdf: "",          // 공개용 CV PDF를 files/ 에 넣고 경로 지정 (예: "files/CV_Justin_Eom.pdf"). 비우면 버튼 숨김.
                        // ⚠️ 전화번호·주소·생년월일 있는 지원용 이력서는 올리지 말 것.
    location: "Seoul, Republic of Korea",
    photo: "assets/photo.jpg",
  },

  about: [
    "I am a Ph.D. candidate (ABD) in the School of Electrical Engineering at Korea University, working in the High Performance and Intelligent Computing (HPIC) Lab with Prof. Jong-Kook Kim. I study how learners interact with AI-assisted programming environments at scale, using data mining and learning analytics to turn platform logs into evidence about help-seeking, feedback, and learning transfer.",
    "Before returning to research full time, I founded Team Monolith (2021–2026) and led the development of Codle, an AI learning platform deployed nationwide in Korean schools and universities, as well as the AI Digital Textbook for high-school Informatics published by Kumsung. Much of my research is grounded in the longitudinal data these deployments produced.",
    "My current work sits at the intersection of sequential pattern mining, knowledge tracing, and large language models for education.",
  ],

  interests: [
    "Learning Analytics",
    "Sequential Pattern Mining",
    "Knowledge Tracing",
    "LLMs for Education",
    "AI-Assisted Programming Education",
    "AI Digital Textbooks",
  ],

  // 최신순. 위에 추가.
  news: [
    { date: "2026-08", text: "Paper accepted to IEEE ICDM 2026: Multi-View Pattern Selection for Cohort-Robust Sequential Pattern Mining." },
    { date: "2026-07", text: "Presented at the CATS Workshop @ AIED 2026 (Seoul)." },
    { date: "2026-07", text: "Paper accepted to SIAM SDM 2026: Outcome-Aware Sequential Pattern Mining for Assisted-to-Independent Transition Analysis." },
    { date: "2026-05", text: "Paper accepted to IEEE CSEE&T 2026 on multi-semester AI error feedback." },
    { date: "2026-03", text: "Paper accepted to ITS 2026 on help-seeking profiles and at-risk detection." },
    { date: "2026-03", text: "Started service as a Technical Research Personnel (전문연구요원) at HPIC Lab, Korea University." },
    { date: "2026-02", text: "Spoke at the Sharjah International Summit on Improvement in Education and the World Education Summit in Dubai, UAE." },
    { date: "2026-01", text: "Signed an MOU on educational AI with Sharjah Private Education Authority (SPEA), UAE." },
    { date: "2025-09", text: "Speaker at the World Knowledge Forum 2025, Seoul." },
  ],

  // type: "conference" | "workshop" | "journal" | "preprint"
  // 게재 확정된 논문만 기재. 심사 중 논문은 익명심사 보호를 위해 올리지 않는다.
  // authors 는 출판된 이름 그대로 (meta.aliases 에 있는 이름이 굵게 표시됨).
  publications: [
    {
      title: "Multi-View Pattern Selection for Cohort-Robust Sequential Pattern Mining",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: "IEEE International Conference on Data Mining (ICDM 2026)",
      year: 2026, type: "conference",
      note: "CORE A*",
      links: { pdf: "", code: "https://github.com/eesmonolith/mvps-cohort-spm", doi: "" },
    },
    {
      title: "Outcome-Aware Sequential Pattern Mining for Assisted-to-Independent Transition Analysis",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: "SIAM International Conference on Data Mining (SDM 2026)",
      year: 2026, type: "conference",
      note: "CORE A",
      links: { pdf: "", code: "https://github.com/eesmonolith/htr-miner-sdm26", doi: "" },
    },
    {
      title: "Multi-Semester Analysis of AI Error Feedback in Introductory Programming: Effectiveness, Error Types, and Longitudinal Patterns",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: "IEEE Conference on Software Engineering Education and Training (CSEE&T 2026)",
      year: 2026, type: "conference",
      note: "",
      links: { pdf: "", code: "", doi: "" },
    },
    {
      title: "Help-Seeking Profiles and Early Detection of At-Risk Students in AI-Assisted Programming: A Multi-Semester Learning Analytics Study",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: "International Conference on Intelligent Tutoring Systems (ITS 2026), Springer LNCS",
      year: 2026, type: "conference",
      note: "",
      links: { pdf: "", code: "", doi: "" },
    },
    {
      title: "Equal Access, Unequal Engagement: School Culture and AI Tutor Use in Korean K-12 Data Science Classrooms",
      authors: ["Eunsang Eom", "Jong-Kook Kim"],
      venue: "CATS Workshop @ AIED 2026",
      year: 2026, type: "workshop",
      note: "",
      links: { pdf: "", code: "", doi: "" },
    },
  ],

  experience: [
    {
      period: "2026.03 – present",
      org: "HPIC Lab, Korea University",
      role: "Technical Research Personnel (전문연구요원)",
      desc: "High-performance computing and AI for education research.",
    },
    {
      period: "2021.11 – 2026.02",
      org: "Team Monolith",
      role: "Founder & CEO",
      desc: "Led an ed-tech company building AI learning platforms; developed and operated Codle and the Kumsung high-school Informatics AI Digital Textbook.",
    },
  ],

  teaching: [
    {
      period: "2024.12 – 2026.08",
      org: "Gyeongin National University of Education",
      role: "Contract Professor",
      desc: "Course: Understanding AI Digital Textbooks",
    },
    {
      period: "2025.03 – 2025.08",
      org: "Daegu National University of Education",
      role: "Contract Professor",
      desc: "Course: AI Learning Platforms (major elective)",
    },
  ],

  education: [
    {
      period: "2019.08 – 2026.02",
      org: "Korea University",
      role: "Ph.D. Candidate (ABD), School of Electrical Engineering",
      desc: "HPIC Lab · Educational AI. Dissertation in progress.",
    },
    {
      period: "",
      org: "Korea University",
      role: "B.S., School of Electrical Engineering",
      desc: "",
    },
  ],

  talks: [
    { date: "2026.02", title: "Sharjah International Summit on Improvement in Education (5th), Sharjah, UAE (speaker)", host: "Sharjah Education Academy (SEA) & Sharjah Private Education Authority (SPEA)" },
    { date: "2026.02", title: "World Education Summit, Dubai, UAE (speaker)", host: "Elets Technomedia" },
    { date: "2025.10", title: "Special lecture, Dongyang Mirae University", host: "Learning Spark" },
    { date: "2025.09", title: "World Knowledge Forum 2025, Seoul (speaker)", host: "Maeil Business Newspaper" },
    { date: "2025.05", title: "APEC Education Ministerial Meeting 2025, Jeju — AI Digital Textbook demonstration", host: "Ministry of Education, Republic of Korea / APEC" },
    { date: "2024.02", title: "Classroom Revolution Leading Teachers / Touch Teachers 2nd cohort (speaker)", host: "KERIS" },
    { date: "2023.05", title: "Generative AI ASIA (speaker)", host: "Wrtn Technologies" },
  ],

  // 언론 보도 (본인 인터뷰·본인 중심 기사 우선). EB-1A 기준 3 증빙과 동일 목록 유지.
  // url 없으면 링크 없이 제목만 표시.
  press: [
    { date: "2025.07", outlet: "Financial News (파이낸셜뉴스)", title: "[fn People] \"AI is a tool for closing the education gap\" — Interview with Eunsang Eom, CEO of Team Monolith", url: "https://www.fnnews.com/news/202507311451294037" },
    { date: "2025.02", outlet: "ET News (전자신문)", title: "Team Monolith completes Classroom Revolution leading-teacher training program", url: "https://www.etnews.com/20250221000008" },
    { date: "2024.12", outlet: "JoongAng Ilbo (중앙일보)", title: "Feature on AI Digital Textbook developers — \"Lowering the barrier to coding\": Eunsang Eom, Team Monolith", url: "https://www.joongang.co.kr/article/25296741" },
    { date: "2024.09", outlet: "ET News (전자신문)", title: "[Education Meets AI] (6) Interview with Eunsang Eom, CEO of Team Monolith: AI that both students and teachers can use", url: "https://www.etnews.com/20240920000151" },
    { date: "2023.11", outlet: "Money Today (머니투데이)", title: "Interview: How a coding-education platform reached 207 schools within six months of launch", url: "https://news.mt.co.kr/mtview.php?no=2023111508383397981" },
    { date: "2023.10", outlet: "IT Chosun (IT조선)", title: "[Log-in] Eunsang Eom, CEO of Team Monolith: \"After Korean and English comes programming language — prepare for the change\"", url: "https://it.chosun.com/news/articleView.html?idxno=2023092103306" },
  ],

  projects: [
    {
      name: "Codle — AI learning platform",
      period: "2021.11 – 2026.02",
      desc: "Designed, built, and operated an AI-assisted programming and data-science learning platform. Adopted in Korea University's first-year general education course and by schools nationwide; over 210K registered users.",
      link: "",
    },
    {
      name: "AI Digital Textbook (AIDT) — High-school Informatics",
      period: "2021.11 – 2026.02",
      desc: "Developed the AI Digital Textbook for the Kumsung high-school Informatics curriculum.",
      link: "",
    },
    {
      name: "MOU with Sharjah Private Education Authority (UAE)",
      period: "2026.01",
      desc: "Educational AI cooperation agreement with SPEA, Sharjah, UAE.",
      link: "",
    },
  ],

  // 연구책임자(PI)로 수행한 과제. 연구비 단위: 천원 (KRW thousands).
  grants: [
    { period: "2025.08 – 2025.12", title: "Digital-Based Education Innovation Capacity Building Program", funder: "Seoul Education Research & Information Institute", amount: 174969 },
    { period: "2025.08 – 2025.12", title: "School-Visiting AI & Digital Competency Training 2025", funder: "Seoul Dongbu District Office of Education", amount: 68860 },
    { period: "2025.05 – 2026.02", title: "2025 Digital Tutor Training Center", funder: "KOFAC", amount: 280000 },
    { period: "2025.05 – 2025.12", title: "2025 Youth SW Companion Project: Educational Program Planning & Operation", funder: "KOFAC", amount: 350000 },
    { period: "2025.03 – 2025.12", title: "Classroom Revolution Leading Teacher Training, 2024 H2 (Winter)", funder: "KERIS", amount: 358509 },
    { period: "2024.06 – 2024.07", title: "2024 K-Cloud Project: Public-Sector SaaS Development & Verification", funder: "KOFAC", amount: 350000 },
    { period: "2024.05 – 2024.11", title: "Classroom Revolution Leading Teacher Training, 2024 H1 (Summer)", funder: "KERIS", amount: 850000 },
    { period: "2024.05 – 2024.11", title: "AI Digital Textbook Service Model & Prototype for Middle-School Technology and Home Economics", funder: "KERIS", amount: 100000 },
    { period: "2024.03 – 2025.02", title: "AI Digital Textbook Service Model & Prototype for Elementary Practical Arts", funder: "KERIS", amount: 100000 },
  ],
  grantsNote: "Principal investigator on the 9 projects above. Additionally served as co-institution lead on 12 projects and co-investigator on 1 project (22 projects in total over the last three years).",
};
