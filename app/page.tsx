const modules = ["발전계획", "경영정보", "경쟁력분석", "고등교육통계", "교육단위통계", "부서별 통계"];

const kpis = [
  { label: "전임교원 확보율", value: "66.67", unit: "%", trend: "+2.4%", tone: "teal" },
  { label: "재학생 충원율", value: "97.39", unit: "%", trend: "목표 95%", tone: "indigo" },
  { label: "교육비 환원율", value: "79.10", unit: "%", trend: "+0.8%p", tone: "amber" },
  { label: "중도탈락자 수", value: "38", unit: "명", trend: "+5 이번 주", tone: "rose" },
];

const colleges = [
  { label: "전체 대학", count: 11, color: "teal" },
  { label: "인문사회과학대학", count: 3, color: "indigo" },
  { label: "경영경제대학", count: 2, color: "blue" },
  { label: "융합기술대학", count: 3, color: "amber" },
  { label: "예술문화대학", count: 3, color: "rose" },
];

const collegeRates = [
  { label: "인문사회", value: 72, change: "+4%", color: "teal" },
  { label: "경영경제", value: 81, change: "+2%", color: "indigo" },
  { label: "융합기술", value: 68, change: "-3%", color: "cyan" },
  { label: "예술문화", value: 76, change: "+1%", color: "violet" },
  { label: "보건복지", value: 74, change: "+6%", color: "amber" },
  { label: "자유전공", value: 87, change: "+3%", color: "rose" },
  { label: "대학원", value: 91, change: "-1%", color: "mint" },
];

const weeklyValues = [66, 72, 81, 70, 77, 52, 56, 72, 69, 83];
const distribution = [22, 30, 42, 56, 70, 85, 100, 89, 74, 60, 44, 33, 23, 15, 11];

const topIndicators = [
  { label: "신입생 충원율", detail: "2026학년도 · 정원 내", value: "100%", color: "teal" },
  { label: "재학생 충원율", detail: "전체 재학생", value: "97.4%", color: "indigo" },
  { label: "취업률", detail: "2025년 졸업자", value: "72.8%", color: "amber" },
  { label: "교육 만족도", detail: "재학생 설문", value: "4.3", color: "violet" },
  { label: "국제화 지수", detail: "글로벌 교류", value: "68.2", color: "rose" },
];

const termGoals = [
  { label: "전임교원 확보율 ≥ 70%", current: "66.7", target: "70", value: 78, color: "amber" },
  { label: "재학생 충원율 ≥ 95%", current: "97.4", target: "95", value: 100, color: "amber" },
  { label: "교육비 환원율 ≥ 85%", current: "79.1", target: "85", value: 82, color: "indigo" },
  { label: "중도탈락자 수 < 25", current: "38", target: "25", value: 100, color: "rose" },
];

const alerts = [
  { initials: "교", label: "전임교원 확보율", detail: "목표 대비 3.3%p 부족", status: "주의", color: "rose" },
  { initials: "연", label: "국제 논문 실적", detail: "전년 동기 대비 감소", status: "확인", color: "amber" },
  { initials: "학", label: "장학금 지급률", detail: "학기 목표까지 6.5%p", status: "양호", color: "teal" },
];

const recentWork = [
  { icon: "▤", title: "2026 발전계획 성과 점검", detail: "단과대학별 실적 취합 완료 · 2시간 전", color: "teal" },
  { icon: "◷", title: "고등교육 통계자료 제출", detail: "담당 부서 검토 대기 · 오늘 09:14", color: "amber" },
  { icon: "✓", title: "교육성과 분석 보고서", detail: "최종 검토 완료 · 어제 16:40", color: "indigo" },
];

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div
      className={`progress-track ${color}`}
      role="progressbar"
      aria-label="목표 진행률"
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
    <div className="bi-app" id="dashboard">
      <header className="app-header">
        <a className="brand" href="#dashboard" aria-label="상명대학교 통계분석 홈">
          <span className="brand-mark" aria-hidden="true"><span>상</span><span>명</span></span>
          <span className="brand-name"><strong>상명대학교</strong><small>UNIVERSITY INSIGHT</small></span>
        </a>
        <nav className="top-nav" aria-label="주요 메뉴">
          <a className="nav-active" href="#dashboard">대시보드</a>
          {modules.map((module) => <a href="#analytics" key={module}>{module}</a>)}
        </nav>
        <div className="header-meta">
          <span className="term-chip"><i /> 2026학년도 2학기</span>
          <span className="week-label">9월 4주차</span>
          <button className="avatar" type="button" aria-label="사용자 메뉴">SM</button>
        </div>
      </header>

      <div className="dashboard-grid">
        <aside className="left-rail">
          <section className="rail-section college-section">
            <div className="rail-heading"><h2>단과대학</h2><span>11개</span></div>
            <p className="rail-subtitle">소속 단위별 성과 현황</p>
            <nav className="college-list" aria-label="단과대학 선택">
              {colleges.map((college, index) => (
                <a className={index === 0 ? "college-row selected" : "college-row"} href="#analytics" key={college.label}>
                  <i className={college.color} />
                  <span>{college.label}</span>
                  <small>{college.count}</small>
                </a>
              ))}
            </nav>
          </section>

          <section className="rail-section distribution-summary" aria-labelledby="grade-title">
            <div className="rail-heading"><h2 id="grade-title">성과 등급 분포</h2><span>2026</span></div>
            <div className="mini-chart" role="img" aria-label="성과 등급 분포: S 42개, A 97개, B 128개, C 84개, D 77개">
              {[42, 97, 128, 84, 77].map((value, index) => (
                <div className="mini-bar-column" key={value}>
                  <span>{value}</span>
                  <i className={`bar-color-${index}`} style={{ height: `${(value / 128) * 54}px` }} />
                  <small>{["S", "A", "B", "C", "D"][index]}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="rail-section alert-section" aria-labelledby="alert-title">
            <div className="rail-heading"><h2 id="alert-title">관리 필요 지표</h2><span className="alert-count">3</span></div>
            <div className="alert-list">
              {alerts.map((alert) => (
                <article className={`alert-card ${alert.color}`} key={alert.label}>
                  <span className="alert-avatar">{alert.initials}</span>
                  <div><strong>{alert.label}</strong><small>{alert.detail}</small></div>
                  <b>{alert.status}</b>
                </article>
              ))}
            </div>
          </section>
        </aside>

        <main className="main-content">
          <section className="kpi-strip" aria-label="핵심 성과 지표">
            {kpis.map((kpi) => (
              <article className={`kpi-card ${kpi.tone}`} key={kpi.label}>
                <p>{kpi.label}</p>
                <div className="kpi-value">{kpi.value}<span>{kpi.unit}</span></div>
                <small><b>{kpi.trend}</b>{kpi.label === "중도탈락자 수" ? " · 전체 428명" : " · 전년 동기 대비"}</small>
              </article>
            ))}
          </section>

          <div className="analytics-grid" id="analytics">
            <section className="panel subject-panel" aria-labelledby="subject-title">
              <div className="panel-heading"><h2 id="subject-title">단과대학별 주요 지표</h2><span className="filter-chip">전체 대학 · 2026</span></div>
              <div className="subject-list">
                {collegeRates.map((item) => (
                  <div className="subject-row" key={item.label}>
                    <strong>{item.label}</strong>
                    <ProgressBar value={item.value} color={item.color} />
                    <b>{item.value}%</b>
                    <small className={item.change.startsWith("-") ? "negative" : "positive"}>{item.change}</small>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel weekly-panel" aria-labelledby="weekly-title">
              <div className="panel-heading"><h2 id="weekly-title">주요 지표 추이</h2><span className="filter-chip blue-chip">최근 10개월</span></div>
              <div className="weekly-chart" role="img" aria-label="최근 10개월 주요 지표 추이">
                {weeklyValues.map((value, index) => (
                  <div className="week-column" key={`month-${index}`}>
                    <i className={index > 4 && index < 7 ? "amber-bar" : index === 9 ? "current-bar" : "teal-bar"} style={{ height: `${value}%` }} />
                    <small>{index + 1}월</small>
                  </div>
                ))}
              </div>
              <div className="chart-legend"><span><i className="legend-teal" />목표 달성</span><span><i className="legend-amber" />관찰</span><span><i className="legend-rose" />개선 필요</span></div>
            </section>

            <section className="panel assignment-panel" aria-labelledby="assignment-title">
              <div className="panel-heading"><h2 id="assignment-title">성과 목표 달성 현황</h2><span className="filter-chip amber-chip">2026학년도</span></div>
              <div className="assignment-content">
                <div className="donut-chart" role="img" aria-label="전체 목표의 79% 달성"><div><strong>79%</strong><small>달성</small></div></div>
                <div className="assignment-detail">
                  <div><i className="legend-teal" /><span>달성</span><ProgressBar value={79} color="teal" /><b>79%</b></div>
                  <div><i className="legend-amber" /><span>진행 중</span><ProgressBar value={11} color="amber" /><b>11%</b></div>
                  <div><i className="legend-rose" /><span>미달성</span><ProgressBar value={10} color="rose" /><b>10%</b></div>
                  <div className="assignment-totals"><strong>1,842<small>달성</small></strong><strong>256<small>진행 중</small></strong><strong>233<small>미달성</small></strong></div>
                </div>
              </div>
            </section>

            <section className="panel score-panel" aria-labelledby="score-title">
              <div className="panel-heading"><h2 id="score-title">성과 점수 분포</h2><span className="filter-chip purple-chip">전체 지표 · 2026</span></div>
              <div className="distribution-chart" role="img" aria-label="대학 성과 점수 분포 히스토그램">
                {distribution.map((height, index) => (
                  <i className={index < 3 ? "dist-low" : index < 6 ? "dist-mid" : index < 11 ? "dist-high" : "dist-tail"} key={`score-${index}`} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="distribution-axis"><span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span></div>
              <div className="chart-legend"><span><i className="legend-teal" />70점 이상</span><span><i className="legend-amber" />50–69점</span><span><i className="legend-rose" />50점 미만</span></div>
            </section>
          </div>
        </main>

        <aside className="right-rail">
          <section className="right-section performers-section" aria-labelledby="performers-title">
            <div className="rail-heading"><h2 id="performers-title">우수 성과 지표</h2><a href="#analytics">전체보기</a></div>
            <ol className="performer-list">
              {topIndicators.map((item, index) => (
                <li className="performer-card" key={item.label}>
                  <span className="rank-number">{index + 1}</span>
                  <span className={`performer-avatar ${item.color}`}>{item.label.slice(0, 1)}</span>
                  <span className="performer-copy"><strong>{item.label}</strong><small>{item.detail}</small></span>
                  <b>{item.value}</b>
                </li>
              ))}
            </ol>
          </section>

          <section className="right-section goals-section" aria-labelledby="goals-title">
            <div className="rail-heading"><h2 id="goals-title">핵심 목표</h2></div>
            <div className="term-goal-list">
              {termGoals.map((goal) => (
                <div className="term-goal" key={goal.label}>
                  <div><strong>{goal.label}</strong><small>{goal.current}<span> / {goal.target}</span></small></div>
                  <ProgressBar value={goal.value} color={goal.color} />
                </div>
              ))}
            </div>
          </section>

          <section className="right-section recent-section" aria-labelledby="recent-title">
            <div className="rail-heading"><h2 id="recent-title">최근 업무</h2><a href="#dashboard">전체보기</a></div>
            <div className="recent-list">
              {recentWork.map((work) => (
                <article className="recent-card" key={work.title}>
                  <span className={`recent-icon ${work.color}`}>{work.icon}</span>
                  <div><strong>{work.title}</strong><p>{work.detail}</p></div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
