import React, { useMemo, useState, useEffect } from 'react'
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
  const [friendsIngredients, setFriendsIngredients] = useState([])
  const [combinedDish, setCombinedDish] = useState(null)

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
    setFriendsIngredients([])
    setCombinedDish(null)
  }

  const restart = () => {
    setPhase('home')
    setCurrent(0)
    setAnswers(Array(questions.length).fill(null))
    setFriendsIngredients([])
    setCombinedDish(null)
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

  const shareIngredient = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?type=${typeCode}`
    navigator.clipboard.writeText(shareUrl)
    alert('分享链接已复制到剪贴板！\n\n把这个链接发给你的朋友，让他们也来测试，然后你们可以一起组合食材做道菜！')
  }

  const addFriendIngredient = (ingredient) => {
    if (ingredient && !friendsIngredients.includes(ingredient)) {
      setFriendsIngredients([...friendsIngredients, ingredient])
    }
  }

  const removeFriendIngredient = (ingredient) => {
    setFriendsIngredients(friendsIngredients.filter(item => item !== ingredient))
  }

  const combineIngredients = () => {
    if (friendsIngredients.length === 0) {
      alert('请先添加至少一个好友的食材！')
      return
    }

    const allIngredients = [profile.food, ...friendsIngredients]
    const processedIngredients = processIngredients(allIngredients)
    const dishName = generateDishName(processedIngredients)
    const dishDescription = generateDishDescription(processedIngredients)
    const message = generateMessage(processedIngredients)

    setCombinedDish({
      dishName,
      dishDescription,
      message,
      ingredients: allIngredients
    })
  }

  const processIngredients = (ingredients) => {
    // 统计每种食材的数量
    const ingredientCount = {}
    ingredients.forEach(ingredient => {
      ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1
    })

    // 处理相同食材
    const processed = []
    Object.entries(ingredientCount).forEach(([ingredient, count]) => {
      if (count === 1) {
        processed.push(ingredient)
      } else if (count === 2) {
        processed.push(`双份${ingredient}`)
      } else if (count === 3) {
        processed.push(`三重${ingredient}`)
      } else {
        processed.push(`${count}份${ingredient}`)
      }
    })

    return processed
  }

  const generateDishName = (ingredients) => {
    const prefixes = ['欢乐', '暖心', '幸福', '友谊', '相聚', '快乐', '美味', '特别', '温馨', '创意']
    const suffixes = ['拼盘', '大餐', '盛宴', '料理', '佳肴', '美餐', '美食', '盛宴', '烩', '煲', '炖', '炒']
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
    return `${prefix}${ingredients.join('+')}${suffix}`
  }

  const generateDishDescription = (ingredients) => {
    const descriptions = [
      `这道菜融合了${ingredients.join('、')}的精华，象征着你们之间的深厚友谊。`,
      `${ingredients.join('、')}的完美结合，就像你们的友谊一样，缺一不可。`,
      `每一种食材都代表着一个独特的灵魂，组合在一起创造出了这道特别的料理。`,
      `这道菜不仅美味，更是你们友谊的见证，每一口都充满了温暖。`,
      `${ingredients.join('、')}的巧妙搭配，就像你们在一起时的化学反应，总是那么和谐。`,
      `相同的食材相遇，碰撞出不一样的火花，就像你们的友谊一样，越相处越深厚。`,
      `多种食材的完美融合，展现了你们之间的默契与包容。`,
      `这道料理不仅是食材的组合，更是你们情感的凝聚。`
    ]
    return descriptions[Math.floor(Math.random() * descriptions.length)]
  }

  const generateMessage = (ingredients) => {
    const messages = [
      `愿你们的友谊像这道菜一样，越品越香，地久天长！`,
      `每一次相聚都是珍贵的回忆，每一次分享都是幸福的时刻。`,
      `友谊就像美食，需要用心经营，才能变得更加美味。`,
      `愿你们的生活像这道菜一样，丰富多彩，充满惊喜！`,
      `珍惜每一次相聚的机会，因为这些都是人生中最美好的时光。`,
      `相同的灵魂相遇，创造出最珍贵的友谊，就像这道菜一样独特。`,
      `愿你们的友谊如这道料理般，层次丰富，回味无穷。`,
      `每一次食材的组合，都是一次友谊的升华。`
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  // 检查 URL 参数，自动填充好友食材
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const friendType = urlParams.get('type')
    if (friendType && profiles[friendType]) {
      addFriendIngredient(profiles[friendType].food)
    }
  }, [])

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
                10 道情境小题，拆解你的饭桌偏好、夜宵习惯、点单直觉与治愈方式。
              </p>
              <p>
                结果不是冷冰冰的标签，而是一张属于你的专属食材卡。
              </p>
              <p>
                与好友分享你的食材，一起组合成美味的料理！
              </p>
            </div>

            <div className="hero-tags">
              <span>和风奶油色</span>
              <span>MBTI 式四维结果</span>
              <span>一键测出专属食材</span>
              <span>多人互动做菜</span>
            </div>

            <button className="primary-button" onClick={startTest}>
              开始今天的食欲巡礼
            </button>
          </section>

          <section className="intro-grid">
            <article className="intro-panel">
              <span className="panel-icon">🍽️</span>
              <h2>测试方式</h2>
              <p>每题二选一，没有标准答案，选更像你真正会做的那一个。</p>
            </article>
            <article className="intro-panel">
              <span className="panel-icon">🧪</span>
              <h2>人格维度</h2>
              <p>从社交氛围、口味浓度、饮食风格到点单习惯，拼出四字母类型。</p>
            </article>
            <article className="intro-panel">
              <span className="panel-icon">🤝</span>
              <h2>核心玩法</h2>
              <p>分享你的专属食材，与好友的食材组合成一道菜，收获友谊寄语。</p>
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

          <div className="food-display">
            <h3>你的专属食材</h3>
            <div className="food-item">
              <span className="food-symbol">{profile.symbol}</span>
              <span className="food-name">{profile.food}</span>
            </div>
          </div>
        </section>

        <section className="result-grid">
          <article className="card">
            <h3>你的饭桌气质</h3>
            <p>{profile.vibe}</p>
          </article>
          <article className="card">
            <h3>最适合的场景</h3>
            <p>{profile.scene}</p>
          </article>
          <article className="card">
            <h3>吃货人生签</h3>
            <blockquote>{profile.motto}</blockquote>
          </article>
          <article className="card">
            <h3>分享你的食材</h3>
            <p>复制链接发给好友，一起组合食材做道菜！</p>
            <button className="primary-button" onClick={shareIngredient}>
              复制分享链接
            </button>
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

        <section className="card">
          <div className="section-head">
            <h3>与好友组合食材</h3>
            <p>添加好友的食材，一起做道菜吧！</p>
          </div>

          <div className="friend-ingredients">
            <div className="ingredient-input">
              <input
                type="text"
                placeholder="输入好友的食材名称"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addFriendIngredient(e.target.value)
                    e.target.value = ''
                  }
                }}
              />
              <button 
                className="primary-button"
                onClick={() => {
                  const input = document.querySelector('input[type="text"]')
                  if (input) {
                    addFriendIngredient(input.value)
                    input.value = ''
                  }
                }}
              >
                添加
              </button>
            </div>

            <div className="ingredients-list">
              <h4>已添加的食材：</h4>
              {friendsIngredients.length === 0 ? (
                <p className="no-ingredients">还没有添加好友的食材</p>
              ) : (
                <ul>
                  {friendsIngredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient}
                      <button 
                        className="remove-button"
                        onClick={() => removeFriendIngredient(ingredient)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button 
              className="primary-button"
              onClick={combineIngredients}
              disabled={friendsIngredients.length === 0}
            >
              组合食材做菜
            </button>
          </div>
        </section>

        {combinedDish && (
          <section className="card">
            <div className="section-head">
              <h3>你们的专属料理</h3>
            </div>

            <div className="dish-result">
              <h4 className="dish-name">{combinedDish.dishName}</h4>
              <p className="dish-description">{combinedDish.dishDescription}</p>
              <p className="dish-message">{combinedDish.message}</p>
              <div className="dish-ingredients">
                <h5>使用的食材：</h5>
                <div className="ingredients-tags">
                  {combinedDish.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">{ingredient}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="result-actions">
          <button className="ghost-button" onClick={restart}>
            返回首页
          </button>
          <button className="primary-button" onClick={() => {
            setPhase('quiz')
            setCurrent(0)
            setAnswers(Array(questions.length).fill(null))
            setFriendsIngredients([])
            setCombinedDish(null)
          }}>
            再测一次
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
