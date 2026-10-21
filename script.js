// Data: Academic Departments and Majors
const MAJORS_DATA = [
  {
    category: "crop",
    categoryName: "작물·스마트원예",
    badgeClass: "badge-crop",
    name: "식량작물전공",
    desc: "쌀, 맥류, 두류 등 국가 주곡 자급과 정밀 농업기계, 벼 직파 등 식량산업의 첨단 스마트 영농을 학습합니다."
  },
  {
    category: "crop",
    categoryName: "작물·스마트원예",
    badgeClass: "badge-crop",
    name: "원예환경시스템전공 (채소/시설)",
    desc: "파프리카, 토마토, 딸기 등 고소득 채소와 ICT 유리온실 환경제어, 수경재배 스마트팜 실무를 집중 교육합니다."
  },
  {
    category: "crop",
    categoryName: "작물·스마트원예",
    badgeClass: "badge-crop",
    name: "과수전공",
    desc: "사과, 배, 포도, 복숭아 등 고품질 과수 재배기술, 기후변화 대응 품종 및 스마트 과수원 자동화 기술을 다룹니다."
  },
  {
    category: "crop",
    categoryName: "작물·스마트원예",
    badgeClass: "badge-crop",
    name: "화훼전공",
    desc: "절화, 분화, 난 등 고부가가치 화훼 생산 기술과 원예치료, 화훼 유통·마케팅 실무를 종합적으로 학습합니다."
  },
  {
    category: "crop",
    categoryName: "작물·스마트원예",
    badgeClass: "badge-crop",
    name: "특용작물전공",
    desc: "인삼, 약용작물, 버섯 등 기능성 바이오 바이오소재 식물 재배와 가공·창업 비즈니스 역량을 배양합니다."
  },
  {
    category: "animal",
    categoryName: "축산 계열",
    badgeClass: "badge-animal",
    name: "한우전공",
    desc: "한우 개량, 번식, 사양관리, 고급육 생산 및 ICT 스마트 우사 운영을 통한 한우 전문 경영인을 육성합니다."
  },
  {
    category: "animal",
    categoryName: "축산 계열",
    badgeClass: "badge-animal",
    name: "낙농전공",
    desc: "로봇 착유기, 자동 급이 시스템 기반의 스마트 젖소 사양 관리 및 고품질 우유, 유가공 제품 생산 기술을 지도합니다."
  },
  {
    category: "animal",
    categoryName: "축산 계열",
    badgeClass: "badge-animal",
    name: "양돈전공",
    desc: "모돈 및 비육돈 환기·환경제어, 양돈 질병 방역, 악취 저감 친환경 돈사 관리 전문 노하우를 전수합니다."
  },
  {
    category: "animal",
    categoryName: "축산 계열",
    badgeClass: "badge-animal",
    name: "가금전공 (양계/오리)",
    desc: "산란계, 육계, 오리 등 최신 자동화 스마트 가금사 사양 기술과 AI 방역, 친환경 동물복지 축산을 실습합니다."
  },
  {
    category: "animal",
    categoryName: "축산 계열",
    badgeClass: "badge-animal",
    name: "말산업전공",
    desc: "승마, 경마, 재활승마, 말 사육 및 조련, 마구 관리 등 고부가가치 레저·반려 동물 산업의 리더를 양성합니다."
  },
  {
    category: "forest-fishery",
    categoryName: "산림·수산·융복합",
    badgeClass: "badge-forest-fishery",
    name: "산림전공",
    desc: "임목 생산, 산림 자원 육성, 임산물 채취 및 산림 탄소중립, 청년 임업 창업 특화 교육을 진행합니다."
  },
  {
    category: "forest-fishery",
    categoryName: "산림·수산·융복합",
    badgeClass: "badge-forest-fishery",
    name: "조경전공",
    desc: "수목 식재, 정원 설계 및 시공, 도시 녹화, 스마트 조경 자재를 활용한 공간 환경 개선 전문가를 배출합니다."
  },
  {
    category: "forest-fishery",
    categoryName: "산림·수산·융복합",
    badgeClass: "badge-forest-fishery",
    name: "수산양식전공",
    desc: "친환경 순환여과식(RAS), 바이오플락 등 스마트 양식 기술과 어류·패류·갑각류 번식 및 양식 경영을 교육합니다."
  },
  {
    category: "forest-fishery",
    categoryName: "산림·수산·융복합",
    badgeClass: "badge-forest-fishery",
    name: "농수산가공·융복합전공",
    desc: "6차 산업화, 식품 가공 제조, 농식품 HMR 밀키트 개발, 온라인 이커머스 마케팅 등 융복합 비즈니스를 개척합니다."
  }
];

// Data: Real Latest News & Press Articles
const NEWS_DATA = [
  {
    title: "국립한국농수산대, 2026학년도 신입생 전공별 모집 전면 전환",
    source: "대한민국 농림축산식품부 보도자료",
    date: "최신 입시 개편",
    summary: "한농대가 2026학년도부터 학부 중심에서 세부 전공별 모집으로 전면 개편했습니다. 신입생들이 입학 초기부터 맞춤형 영농 교육을 받고 2학년 장기현장실습을 체계적으로 준비할 수 있게 됩니다.",
    url: "https://www.mafra.go.kr"
  },
  {
    title: "한농대, 청년농업인 육성 및 스마트농업 발전을 위한 산학협력 MOU 체결",
    source: "대한민국 정책브리핑 (korea.kr)",
    date: "보도자료",
    summary: "첨단 농자재 전문기업과 업무협약을 체결하고, 시설원예를 경영하는 졸업 청년농업인들에게 고품질 필름 지원 및 생육 데이터 기반 스마트팜 최적 환경제어 기술 컨설팅을 제공합니다.",
    url: "https://www.korea.kr"
  },
  {
    title: "지역균형 선발 확대 및 광역시 지원 자격 개방",
    source: "국립한국농수산대학교 입학처",
    date: "공식 공지",
    summary: "지역균형선발 인원을 40명에서 61명으로 대폭 늘리고 고교장 추천 규정을 폐지했습니다. 대구, 부산, 울산, 대전 등 광역시 청년들도 차별 없이 지원할 수 있도록 문호를 활짝 열었습니다.",
    url: "https://ipsi.af.ac.kr"
  },
  {
    title: "한국임업진흥원-한농대 협력, '청년 임업 창업 및 AI 역량 강화 교육' 진행",
    source: "뉴시스 (NEWSIS)",
    date: "현장 보도",
    summary: "산림 및 조경 전공 학생들을 대상으로 AI를 활용한 농림 정책사업 탐색, 임산물 고부가가치 가공 및 디지털 유통 마케팅 실습을 지원하는 맞춤형 청년 창업 캠프를 성황리에 마쳤습니다.",
    url: "https://www.newsis.com"
  },
  {
    title: "미래 농수산업 융복합 인재 504명 입학… 제30회 입학식 거행",
    source: "한국농어촌전문지 팜인사이트",
    date: "대학 소식",
    summary: "대한민국 농수산업을 디지털 첨단 혁신 산업으로 전환시킬 정예 신입생 504명이 교내 대강당에서 입학식을 갖고 3년 간의 전액 국비 정예 교육 여정을 시작했습니다.",
    url: "https://www.af.ac.kr"
  },
  {
    title: "농식품부 '제1차 스마트농업 육성 기본계획' 연계 청년 영농정착 지원",
    source: "농림축산식품부 정책포털",
    date: "정부 정책 연계",
    summary: "데이터 기반 스마트팜 보급 가속화에 따라 한농대 졸업생을 대상으로 스마트팜 청년창업 보육센터 및 영농정착지원금, 멘토링 연계 제도를 한층 강화합니다.",
    url: "https://www.mafra.go.kr"
  }
];

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
  renderMajors("all");
  renderNews();
  setupFilterTabs();
  setupSurveyLogic();
});

// ==========================================
// Survey & Benefit Matching Checklist Logic
// ==========================================
let currentSurveyState = {
  userType: null,
  interests: []
};

// Benefit Knowledge Base
const BENEFIT_DATABASE = {
  // Common for Youth
  youth: {
    badge: "청년 / 수험생 맞춤형 지원",
    mainTitle: "청년 미래 CEO 육성을 위한 전주기 국비 패키지",
    subTitle: "경제적 부담 없이 미래 첨단 농수산업 리더로 성장할 수 있는 핵심 혜택입니다.",
    ctaText: "한농대 2026 수시·정시 입학요강 보기 ↗",
    ctaLink: "https://ipsi.af.ac.kr",
    baseBenefits: [
      {
        tag: "학비 제로",
        type: "primary",
        title: "3년 전액 국비 장학 (학비, 기숙사, 1일 3식 식비 전액 지원)",
        desc: "입학금부터 등록금, 기숙사비, 삼시세끼 식비까지 국가 예산으로 100% 지원되어 청년들이 오직 영농 배움에만 전념할 수 있습니다."
      },
      {
        tag: "스마트 실무",
        type: "blue",
        title: "AI·빅데이터 기반 스마트팜 실증 및 최첨단 실습 인프라 제공",
        desc: "최첨단 유리온실, 자동화 스마트 축사, 순환여과식 양식 시설 등 국내 최고 설비에서 직접 작물과 가축을 키우는 실전 교육을 받습니다."
      }
    ]
  },
  // Parent
  parent: {
    badge: "학부모 / 가족 안심 지원",
    mainTitle: "자녀의 든든한 평생 진로와 성공 정착을 보장하는 안심 설계",
    subTitle: "대학 등록금 걱정 해소와 함께 졸업 후 안정적인 취·창업 진로가 열립니다.",
    ctaText: "학부모를 위한 대학 안내서 다운로드 ↗",
    ctaLink: "https://www.af.ac.kr",
    baseBenefits: [
      {
        tag: "학비 부담 제로",
        type: "primary",
        title: "학부모의 경제적 부담을 0으로 만드는 3개년 완전 전액 국비 지원",
        desc: "타 대학 대비 연간 수천만 원에 달하는 등록금 및 기숙사·생활비 부담이 전혀 발생하지 않아 자녀 교육비 걱정을 말끔히 덜어드립니다."
      },
      {
        tag: "성공 정착 보장",
        type: "amber",
        title: "졸업 후 6년 전담 교수 멘토링 & 정부 창업 자금 연계",
        desc: "졸업생의 85% 이상이 현장에 성공적으로 안착하도록 농어촌공사 농지 임대, 정책자금 융자, 선배 멘토링이 체계적으로 밀착 지원됩니다."
      }
    ]
  },
  // Farmer / Existing
  farmer: {
    badge: "농어업인 / 가업 승계 & 귀농 지원",
    mainTitle: "지속가능한 부농(富農) 실현 및 영농 승계·신기술 보급 파트너",
    subTitle: "ICT 첨단 농업 기술 도입과 차세대 가업 승계의 든든한 동반자가 되어드립니다.",
    ctaText: "평생교육 및 위탁 영농 교육과정 보기 ↗",
    ctaLink: "https://www.af.ac.kr",
    baseBenefits: [
      {
        tag: "가업 승계 전문화",
        type: "primary",
        title: "자녀를 최첨단 농업 경영 CEO로 탈바꿈시키는 3년 압축 교육",
        desc: "단순 경험 승계를 넘어 경영 분석, 세무, 마케팅, 스마트 생육 제어까지 마스터하여 농장의 매출과 가치를 극대화합니다."
      },
      {
        tag: "신기술 컨설팅",
        type: "blue",
        title: "스마트농업 데이터 분석 및 최신 기술 컨설팅 무료 연계",
        desc: "기업·연구소와 연계한 스마트팜 환경제어 컨설팅 및 현장 실증 기술을 지역 농가에 전파하고 교류합니다."
      }
    ]
  },
  // General Citizen
  citizen: {
    badge: "일반 국민 / 소비자 상생 파트너",
    mainTitle: "국민 안심 먹거리 공급과 식량안보를 지키는 국가 핵심 자산",
    subTitle: "국민의 세금으로 육성된 정예 청년들이 깨끗하고 안전한 미래 먹거리를 책임집니다.",
    ctaText: "국립한국농수산대 대학 홍보관 둘러보기 ↗",
    ctaLink: "https://www.af.ac.kr",
    baseBenefits: [
      {
        tag: "식량 안보",
        type: "primary",
        title: "고령화된 농어촌을 지키는 국가 정예 청년 인력 양성",
        desc: "대한민국 식량 주권과 첨단 농수산업 생태계를 지속가능하게 유지하여 국민에게 신선하고 안전한 친환경 농수산물을 안정 공급합니다."
      },
      {
        tag: "열린 대학",
        type: "amber",
        title: "도시농업, 정원문화(조경), 힐링 치유농업 프로그램 국민 개방",
        desc: "지역 사회와 국민을 위해 교내 농업 박람회, 정원 및 치유농업 체험, 평생교육 문화 강좌를 함께 제공합니다."
      }
    ]
  }
};

// Interest-Specific Additional Benefit Mapping
const INTEREST_BENEFIT_MAP = {
  tuition: {
    tag: "학비·생활비 전액 국비",
    type: "primary",
    title: "100% 국비 지원: 입학금·수업료·기숙사비·식비 전액 면제",
    desc: "학업 기간 일체의 경제적 부담 없이, 대한민국 최고 수준의 농수산 교육 시설에서 숙식과 교재까지 모두 무료로 지원받습니다."
  },
  smartfarm: {
    tag: "스마트팜 특화",
    type: "blue",
    title: "최첨단 스마트팜·온실 AI 환경제어 & 데이터 영농 실무",
    desc: "국내 최고 수준의 스마트 온실과 ICT 축산 시설에서 빅데이터를 활용한 생육 환경 제어 및 첨단 농업기계 운용 역량을 습득합니다."
  },
  military: {
    tag: "병역 혜택",
    type: "amber",
    title: "후계농업경영인 산업기능요원 편입을 통한 군 복무 대체",
    desc: "일정 요건 충족 시 현장 영농 종사를 통해 군 복무를 대체하여, 20대 청년 시절의 학업 및 창업 경력 단절 없이 역량을 축적합니다."
  },
  internship: {
    tag: "1년 장기실습",
    type: "blue",
    title: "국내외 선진 농가 1년 전일제(1대1) 도제식 장기현장실습",
    desc: "2학년 1년 전체를 미국·유럽·호주 등 해외 연수 또는 국내 최고 선도 농가에서 직접 체득하며 경영 노하우와 영농 네트워크를 확보합니다."
  },
  startup: {
    tag: "창업·정착 지원",
    type: "primary",
    title: "청년창업농 펀드 연계, 농지·시설 임대 및 정착지원금 패키지",
    desc: "졸업생을 대상으로 영농정착지원금(최대 월 110만 원 상당) 및 저리 창업 융자금, 농어촌공사 우량 농지 임대 혜택을 우선 지원합니다."
  },
  lifelong: {
    tag: "평생교육·컨설팅",
    type: "amber",
    title: "평생교육원 단기 기술과정 및 맞춤형 스마트 영농 컨설팅",
    desc: "일반 농업인, 귀농 준비자를 위한 단계별 품목 교육, 스마트 자재 활용법 등 현장 중심의 단기 위탁 교육을 수강할 수 있습니다."
  }
};

function setupSurveyLogic() {
  const step1 = document.getElementById("surveyStep1");
  const step2 = document.getElementById("surveyStep2");
  const result = document.getElementById("surveyResult");

  const userTypeButtons = document.querySelectorAll("#userTypeChoices .choice-btn");
  const btnPrev = document.getElementById("btnPrevStep");
  const btnShowResults = document.getElementById("btnShowResults");
  const btnRestart = document.getElementById("btnRestartSurvey");

  if (!step1 || !step2 || !result) return;

  // Step 1: Select User Type
  userTypeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      userTypeButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      currentSurveyState.userType = btn.getAttribute("data-type");

      // Auto Advance to Step 2
      setTimeout(() => {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
        window.scrollTo({
          top: document.getElementById("custom-matching").offsetTop - 80,
          behavior: "smooth"
        });
      }, 200);
    });
  });

  // Step 2: Back Button
  btnPrev.addEventListener("click", () => {
    step2.classList.add("hidden");
    step1.classList.remove("hidden");
  });

  // Step 2: Submit and View Result
  btnShowResults.addEventListener("click", () => {
    const checkedBoxes = document.querySelectorAll('input[name="interest"]:checked');
    currentSurveyState.interests = Array.from(checkedBoxes).map(cb => cb.value);

    // Render results
    renderSurveyResults();

    step2.classList.add("hidden");
    result.classList.remove("hidden");
    window.scrollTo({
      top: document.getElementById("custom-matching").offsetTop - 80,
      behavior: "smooth"
    });
  });

  // Step 3: Restart Button
  btnRestart.addEventListener("click", () => {
    // Reset state
    currentSurveyState = { userType: null, interests: [] };
    userTypeButtons.forEach(b => b.classList.remove("selected"));
    document.querySelectorAll('input[name="interest"]').forEach(cb => cb.checked = false);

    result.classList.add("hidden");
    step2.classList.add("hidden");
    step1.classList.remove("hidden");
  });
}

function renderSurveyResults() {
  const { userType, interests } = currentSurveyState;
  const config = BENEFIT_DATABASE[userType] || BENEFIT_DATABASE.youth;

  const badgeEl = document.getElementById("resultTargetBadge");
  const titleEl = document.getElementById("resultMainTitle");
  const subTitleEl = document.getElementById("resultSubTitle");
  const ctaBtn = document.getElementById("resultCtaBtn");
  const cardsContainer = document.getElementById("resultBenefitCards");

  if (badgeEl) badgeEl.textContent = config.badge;
  if (titleEl) titleEl.textContent = config.mainTitle;
  if (subTitleEl) subTitleEl.textContent = config.subTitle;
  if (ctaBtn) {
    ctaBtn.textContent = config.ctaText;
    ctaBtn.href = config.ctaLink;
  }

  // Combine Base Benefits with Selected Interests
  const allBenefitItems = [...config.baseBenefits];

  interests.forEach(key => {
    if (INTEREST_BENEFIT_MAP[key]) {
      // Check duplicate
      const item = INTEREST_BENEFIT_MAP[key];
      const exists = allBenefitItems.some(b => b.title === item.title);
      if (!exists) {
        allBenefitItems.push(item);
      }
    }
  });

  if (cardsContainer) {
    cardsContainer.innerHTML = allBenefitItems.map(item => {
      const highlightClass = item.type === "blue" ? "highlight-blue" : (item.type === "amber" ? "highlight-amber" : "");
      return `
        <div class="result-benefit-item ${highlightClass}">
          <div class="result-item-header">
            <span class="result-item-tag">${item.tag}</span>
          </div>
          <div class="result-item-title">${item.title}</div>
          <div class="result-item-desc">${item.desc}</div>
        </div>
      `;
    }).join("");
  }
}

// Render Majors by Category
function renderMajors(filter) {
  const container = document.getElementById("majorContainer");
  if (!container) return;

  const filtered = filter === "all" 
    ? MAJORS_DATA 
    : MAJORS_DATA.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="major-card">
      <span class="major-badge ${item.badgeClass}">${item.categoryName}</span>
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

// Setup Major Tab Event Listeners
function setupFilterTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderMajors(filter);
    });
  });
}

// Render News Cards
function renderNews() {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  container.innerHTML = NEWS_DATA.map(news => `
    <article class="news-card">
      <div>
        <div class="news-source-row">
          <span class="news-source">${news.source}</span>
          <span class="news-date">${news.date}</span>
        </div>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-summary">${news.summary}</p>
      </div>
      <div>
        <a href="${news.url}" target="_blank" rel="noopener noreferrer" class="news-link">
          기사 및 원문 보기 ↗
        </a>
      </div>
    </article>
  `).join("");
}
