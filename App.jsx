import { useMemo, useState } from 'react'
import { profiles, questions, summarizeScores } from './data/questions'

const axisMeta = [
  {
    key: 'social',
    left: { code: 'C', label: 'Cuddle', text: '窝心慢享' },
    right: { code: 'J', label: 'Jump', text: '热闹开席' }
  },
  {
    key: 'flavor',
    left: { code: 'H', label: 'Healing', text: '清润治愈' },
    right: { code: 'M', label: 'Max', text: '浓郁过瘾' }
  },
  {
    key: 'style',
    left: { code: 'T', label: 'Tradition', text: '经典派' },
    right: { code: 'N', label: 'New', text: '猎奇派' }
  },
  {
    key: 'decision',
    left: { code: 'I', label: 'Intuition', text: '凭感觉吃' },
    right: { code: 'P', label: 'Plan', text: '先做攻略' }
  }
]

function App() {
  const [phase, setPhase] = useState('home')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  const scoreSummary = useMemo(() => summarizeScores(answers), [answers])
  const typeCode = useMemo(() => {
    if (!scoreSummary) return ''
    return axisMeta
      .map((axis) =>
        scoreSummary[axis.key] >= 0 ? axis.right.code : axis.left.code
      )
      .join('')
  }, [scoreSummary])
  const profile = profiles[typeCode]

  const progress = ((current + 1) / questions.length) * 100
  const isCurrentAnswered = answers[current] !== null
  const isFinished = answers.every((answer) => answer !== null)

  const startTest = () => {
    setPhase('quiz')
    setCurrent(0)
    setAnswers(Array(questions.length).fill(null))
  }

  const restart = () => {
    setPhase('home')
    setCurrent(0)
    setAnswers(Array(questions.length).fill(null))
  }

  const selectAnswer = (optionIndex) => {
    const nextAnswers = [...answers]
    nextAnswers[current] = optionIndex
    setAnswers(nextAnswers)
  }

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
    }
  }

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  const showResult = () => {
    if (isFinished) {
      setPhase('result')
    }
  }

  if (phase === 'home') {
    return (
      <div className="app-shell">
        <div className="floating floating-sakura"></div>
        <div className="floating floating-matcha"></div>
        <div className="floating floating-yuzu"></div>

        <main className="page home-page">
          <section className="hero-card">
            <p className="eyebrow">CHTI Character Dining Type Indicator</p>
            <h1 className="hero-title">
              CHTI
              <span>吃货人格测试</span>
            </h1>
            <p className="hero-subtitle">
              像做一场和风食梦一样，测出你属于哪一种吃货灵魂。
            </p>

            <div className="hero-copy">
              <p>
                12 道情境小题，拆解你的饭桌偏好、夜宵习惯、点单直觉与治愈方式。
              </p>
              <p>
                结果不是冷冰冰的标签，而是一张属于你的日式食欲小档案。
              </p>
            </div>

            <div className="hero-tags">
              <span>和风奶油色</span>
              <span>MBTI 式四维结果</span>
              <span>一键测出专属食系</span>
            </div>

            <button className="primary-button" onClick={startTest}>
              开始今天的食欲巡礼
            </button>
          </section>

          <section className="intro-grid">
            <article className="intro-panel">
              <span className="panel-icon">茶</span>
              <h2>测试方式</h2>
              <p>每题二选一，没有标准答案，选更像你真正会做的那一个。</p>
            </article>
            <article className="intro-panel">
              <span className="panel-icon">团</span>
              <h2>人格维度</h2>
              <p>从社交氛围、口味浓度、饮食风格到点单习惯，拼出四字母类型。</p>
            </article>
            <article className="intro-panel">
              <span className="panel-icon">宴</span>
              <h2>结果呈现</h2>
              <p>你会拿到专属昵称、治愈菜单、氛围关键词与一句吃货人生签。</p>
            </article>
          </section>
        </main>
      </div>
    )
  }

  if (phase === 'quiz') {
    const question = questions[current]

    return (
      <div className="app-shell">
        <div className="floating floating-sakura"></div>
        <div className="floating floating-matcha"></div>

        <main className="page quiz-page">
          <section className="quiz-header card">
            <div>
              <p className="eyebrow">Question {current + 1}</p>
              <h2>今日食欲坐标校准中</h2>
            </div>
            <div className="progress-pill">{current + 1} / {questions.length}</div>
          </section>

          <section className="progress-card card">
            <div className="progress-meta">
              <span>{question.axisLabel}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </section>

          <section className="question-card card">
            <p className="question-axis">{question.dimension}</p>
            <h3 className="question-title">{question.text}</h3>
            <div className="option-list">
              {question.options.map((option, index) => (
                <button
                  key={option.id}
                  className={`option-card ${answers[current] === index ? 'is-selected' : ''}`}
                  onClick={() => selectAnswer(index)}
                >
                  <span className="option-marker">{index === 0 ? 'A' : 'B'}</span>
                  <span className="option-content">
                    <strong>{option.title}</strong>
                    <small>{option.text}</small>
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="quiz-actions">
            <button className="ghost-button" onClick={prevQuestion} disabled={current === 0}>
              上一题
            </button>
            {current === questions.length - 1 ? (
              <button className="primary-button" onClick={showResult} disabled={!isFinished}>
                查看我的 CHTI
              </button>
            ) : (
              <button className="primary-button" onClick={nextQuestion} disabled={!isCurrentAnswered}>
                下一题
              </button>
            )}
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <div className="floating floating-sakura"></div>
      <div className="floating floating-matcha"></div>
      <div className="floating floating-yuzu"></div>

      <main className="page result-page">
        <section className="result-hero card">
          <div className="result-stamp">{profile.symbol}</div>
          <p className="eyebrow">Your CHTI Type</p>
          <h1 className="result-code">{typeCode}</h1>
          <h2 className="result-name">{profile.name}</h2>
          <p className="result-summary">{profile.summary}</p>

          <div className="result-tags">
            {profile.keywords.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="result-grid">
          <article className="card">
            <h3>你的饭桌气质</h3>
            <p>{profile.vibe}</p>
          </article>
          <article className="card">
            <h3>一口入魂菜单</h3>
            <ul className="food-list">
              {profile.menu.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3>最适合的场景</h3>
            <p>{profile.scene}</p>
          </article>
          <article className="card">
            <h3>吃货人生签</h3>
            <blockquote>{profile.motto}</blockquote>
          </article>
        </section>

        <section className="axis-section card">
          <div className="section-head">
            <h3>四维偏好图谱</h3>
            <p>越靠左或右，表示你在该维度的偏好越明显。</p>
          </div>

          <div className="axis-list">
            {axisMeta.map((axis) => {
              const value = scoreSummary[axis.key]
              const percent = Math.min(100, Math.abs(value) * 16 + 50)
              const towardRight = value >= 0

              return (
                <div className="axis-row" key={axis.key}>
                  <div className="axis-labels">
                    <span>{axis.left.code} · {axis.left.text}</span>
                    <strong>{axis.left.label} / {axis.right.label}</strong>
                    <span>{axis.right.code} · {axis.right.text}</span>
                  </div>
                  <div className="axis-track">
                    <div
                      className={`axis-indicator ${towardRight ? 'toward-right' : 'toward-left'}`}
                      style={{
                        left: towardRight ? `${percent / 2}%` : `calc(${100 - percent / 2}% - 18px)`
                      }}
                    >
                      {towardRight ? axis.right.code : axis.left.code}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="result-actions">
          <button className="ghost-button" onClick={restart}>
            返回首页
          </button>
          <button className="primary-button" onClick={() => {
            setPhase('quiz')
            setCurrent(0)
            setAnswers(Array(questions.length).fill(null))
          }}>
            再测一次
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
