const modules = [
  "발전계획",
  "경영정보",
  "경쟁력분석",
  "고등교육통계",
  "교육단위통계",
  "부서별통계",
];

const kpis = [
  {
    label: "전임교원 확보율",
    value: "66.67",
    unit: "%",
    target: "기준 70.05%",
    change: "+2.4%",
    tone: "blue",
    bars: [34, 45, 40, 56, 51, 66, 72, 68, 82, 76, 91, 100],
  },
  {
    label: "재학생 충원율",
    value: "97.39",
    unit: "%",
    target: "목표 95.00%",
    change: "+1.8%",
    tone: "green",
    bars: [48, 54, 46, 63, 60, 67, 73, 70, 81, 84, 91, 100],
  },
  {
    label: "신입생 충원율",
    value: "100.00",
    unit: "%",
    target: "목표 100.00%",
    change: "목표 달성",
    tone: "amber",
    bars: [42, 47, 53, 58, 64, 69, 74, 79, 84, 90, 96, 100],
  },
  {
    label: "중도탈락자 비율",
    value: "4.01",
    unit: "%",
    target: "전년 대비 -0.32%p",
    change: "개선 중",
    tone: "coral",
    bars: [100, 91, 87, 80, 83, 72, 69, 64, 59, 53, 48, 42],
  },
];

const recentWork = [
  {
    category: "대학 발전계획",
    title: "2026 대학 중장기 발전계획 성과 점검",
    date: "2026.09.28",
    status: "진행 중",
    progress: 72,
    tone: "blue",
  },
  {
    category: "고등교육통계",
    title: "2차 고등교육 통계자료 제출",
    date: "2026.09.25",
    status: "진행 중",
    progress: 48,
    tone: "amber",
  },
  {
    category: "교육성과 분석",
    title: "2025학년도 교육성과 분석 보고서",
    date: "2026.09.22",
    status: "검토 완료",
    progress: 100,
    tone: "green",
  },
];

const strategicGoals = [
  { label: "교육 혁신", value: 78, color: "blue" },
  { label: "연구 경쟁력", value: 64, color: "green" },
  { label: "지역사회 기여", value: 52, color: "amber" },
];

function Brand() {
  return (
    <a className="brand" href="#dashboard" aria-label="상명대학교 BI 홈">
      <span className="brand-mark" aria-hidden="true">
        <span>상</span>
        <span>명</span>
      </span>
      <span className="brand-copy">
        <strong>상명대학교</strong>
        <small>SANGMYUNG UNIVERSITY</small>
      </span>
    </a>
  );
}

function ProgressBar({ value, tone }: { value: number; tone: string }) {
  return (
    <div
      className={`progress-track ${tone}`}
      role="progressbar"
      aria-label="진행률"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="dashboard-shell" id="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Brand />
          <button className="sidebar-star" type="button" aria-label="즐겨찾기">
            ★
          </button>
        </div>
        <div className="sidebar-section-label">통합 대시보드</div>
        <nav className="side-nav" aria-label="대시보드 메뉴">
          <a className="side-link active" href="#overview">
            <span className="side-icon">01</span>
            <span>발전계획 모니터링</span>
            <span className="side-chevron">›</span>
          </a>
          <a className="side-link" href="#work">
            <span className="side-icon">02</span>
            <span>핵심성과지표 모니터링</span>
          </a>
          <a className="side-link" href="#goals">
            <span className="side-icon">03</span>
            <span>전략과제 추진 현황</span>
          </a>
          <a className="side-link" href="#work">
            <span className="side-icon">04</span>
            <span>최근 업무</span>
          </a>
        </nav>
        <div className="sidebar-bottom">
          <div className="system-status"><span /> 시스템 정상 운영 중</div>
          <p>대학 성과관리 시스템</p>
          <small>SMU BI · VERSION 2.6</small>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <nav className="module-nav" aria-label="통계 모듈">
            {modules.map((module, index) => (
              <a
                className={index === 0 ? "module-link selected" : "module-link"}
                href={index === 0 ? "#overview" : "#work"}
                key={module}
              >
                {module}
              </a>
            ))}
          </nav>
          <div className="topbar-tools">
            <form className="search-form" role="search">
              <input aria-label="대시보드 검색" name="q" placeholder="Search..." />
              <button type="submit" aria-label="검색">⌕</button>
            </form>
            <span className="topbar-divider" />
            <button className="tool-button" type="button" aria-label="알림">♧<i /></button>
            <button className="tool-button user-button" type="button" aria-label="사용자 메뉴">SM</button>
          </div>
        </header>

        <main className="workspace">
          <div className="breadcrumb"><span>홈</span><b>/</b><strong>발전계획 모니터링</strong></div>
          <section className="page-heading" id="overview">
            <div>
              <p className="eyebrow">SANGMYUNG UNIVERSITY · PERFORMANCE INSIGHT</p>
              <h1>대학 성과 대시보드</h1>
              <p className="heading-caption">주요 지표와 전략과제 추진 현황을 한눈에 확인합니다.</p>
            </div>
            <div className="heading-meta">
              <span className="live-indicator"><i /> 실시간 업데이트</span>
              <span className="updated-date">최종 업데이트 <strong>2026.09.29 09:30</strong></span>
            </div>
          </section>

          <section className="kpi-section" aria-labelledby="kpi-title">
            <div className="section-heading">
              <div>
                <span className="section-index">01</span>
                <h2 id="kpi-title">주요 성과지표</h2>
                <span className="section-note">2026학년도 기준</span>
              </div>
              <a className="text-link" href="#work">전체 지표 보기 <span>↗</span></a>
            </div>
            <div className="kpi-grid">
              {kpis.map((kpi, index) => (
                <article className={`kpi-card ${kpi.tone}`} key={kpi.label}>
                  <div className="kpi-card-top">
                    <span className="kpi-overline">KEY INDICATOR 0{index + 1}</span>
                    <span className="kpi-spark" aria-label="최근 추이">
                      {kpi.bars.map((height, barIndex) => (
                        <i key={`${kpi.label}-${barIndex}`} style={{ height: `${height}%` }} />
                      ))}
                    </span>
                  </div>
                  <p className="kpi-label">{kpi.label}</p>
                  <div className="kpi-value">{kpi.value}<span>{kpi.unit}</span></div>
                  <div className="kpi-footer">
                    <span>{kpi.target}</span>
                    <strong>{kpi.change}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="detail-grid">
            <section className="work-panel" id="work" aria-labelledby="work-title">
              <div className="section-heading panel-heading">
                <div>
                  <span className="section-index">02</span>
                  <h2 id="work-title">최근 업무</h2>
                  <span className="section-note">진행 중인 주요 업무</span>
                </div>
                <a className="text-link" href="#work-list">업무 전체보기 <span>↗</span></a>
              </div>
              <div className="work-list" id="work-list">
                {recentWork.map((work) => (
                  <article className="work-row" key={work.title}>
                    <span className={`work-marker ${work.tone}`} />
                    <div className="work-main">
                      <div className="work-category">{work.category}</div>
                      <h3>{work.title}</h3>
                      <div className="work-progress">
                        <ProgressBar value={work.progress} tone={work.tone} />
                        <span>{work.progress}%</span>
                      </div>
                    </div>
                    <div className="work-side">
                      <span className={`status-pill ${work.tone}`}>{work.status}</span>
                      <time>{work.date}</time>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="goals-panel" id="goals" aria-labelledby="goals-title">
              <div className="section-heading panel-heading">
                <div>
                  <span className="section-index">03</span>
                  <h2 id="goals-title">전략과제 진행률</h2>
                </div>
                <button className="more-button" type="button" aria-label="전략과제 더보기">···</button>
              </div>
              <div className="goal-summary">
                <div><strong>68</strong><span>%</span></div>
                <p>전체 평균 달성률 <b>+6.2%</b></p>
              </div>
              <div className="goal-list">
                {strategicGoals.map((goal) => (
                  <div className="goal-item" key={goal.label}>
                    <div className="goal-label"><span>{goal.label}</span><strong>{goal.value}%</strong></div>
                    <ProgressBar value={goal.value} tone={goal.color} />
                  </div>
                ))}
              </div>
              <a className="goal-link" href="#work">전략과제 상세 현황 <span>→</span></a>
            </section>
          </div>
          <footer className="page-footer"><span>© 2026 SANGMYUNG UNIVERSITY</span><span>대학 성과관리 시스템 <b>·</b> 데이터 기준일 2026.09.29</span></footer>
        </main>
      </div>
    </div>
  );
}
