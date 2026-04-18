import { useState, useEffect } from 'react'
import { questions, calculateMBTI, getAxisScore } from './data/questions'
import { getIngredientByScore, combineIngredients } from './data/ingredients'

function App() {
  const [screen, setScreen] = useState('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [mbti, setMbti] = useState('')
  const [ingredient, setIngredient] = useState(null)
  const [roomCode, setRoomCode] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [participants, setParticipants] = useState([])
  const [showCopyNotification, setShowCopyNotification] = useState(false)

  const handleStartTest = () => {
    setScreen('test')
    setCurrentQuestion(0)
    setAnswers(Array(questions.length).fill(null))
  }

  const handleSelectOption = (optionIndex) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const result = calculateMBTI(answers)
    const axisScores = getAxisScore(result)
    const matchedIngredient = getIngredientByScore(axisScores)
    setMbti(result)
    setIngredient(matchedIngredient)
    setScreen('result')
  }

  const handleRestart = () => {
    setScreen('welcome')
    setCurrentQuestion(0)
    setAnswers(Array(questions.length).fill(null))
    setMbti('')
    setIngredient(null)
  }

  const handleCreateRoom = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    setRoomCode(code)
    const newParticipant = {
      id: Date.now(),
      name: `食材${participants.length + 1}`,
      ingredient: ingredient
    }
    setParticipants([newParticipant])
  }

  const handleJoinRoom = () => {
    if (joinCode.trim()) {
      setRoomCode(joinCode.toUpperCase())
      setParticipants([])
    }
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode)
    setShowCopyNotification(true)
    setTimeout(() => setShowCopyNotification(false), 2000)
  }

  const combinedDish = combineIngredients(participants.map(p => p.ingredient))

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const isAnswered = answers[currentQuestion] !== null

  if (screen === 'welcome') {
    return (
      <div className="app">
        <div className="container">
          <div className="welcome-screen">
            <h1 className="logo">吃货TI</h1>
            <p className="subtitle">你的本命食材是什么？</p>
            <p className="description">
              十二道情境题，发现你灵魂深处的味道。<br/>
              邀请朋友入座，看看你们能组合出什么料理。
            </p>
            <button className="start-btn" onClick={handleStartTest}>
              开始探索
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (screen === 'test') {
    const q = questions[currentQuestion]

    return (
      <div className="app">
        <div className="container">
          <div className="test-screen">
            <div className="progress-bar">
              <div className="progress-text">
                第 {currentQuestion + 1} / {questions.length} 题
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="question-card" key={currentQuestion}>
              <div className="question-number">
                {q.dimension}
              </div>
              <div className="question-text">{q.text}</div>

              <div className="options">
                {q.options.map((option, index) => (
                  <button
                    key={option.letter}
                    className={`option ${answers[currentQuestion] === index ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(index)}
                  >
                    <span className="option-letter">{option.letter}</span>
                    <span>{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-buttons">
              <button
                className="nav-btn"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                上一题
              </button>
              {currentQuestion === questions.length - 1 ? (
                <button
                  className="nav-btn next"
                  onClick={handleSubmit}
                  disabled={!answers.every(a => a !== null)}
                >
                  查看结果
                </button>
              ) : (
                <button
                  className="nav-btn next"
                  onClick={handleNext}
                  disabled={!isAnswered}
                >
                  下一题
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (screen === 'result') {
    return (
      <div className="app">
        <div className="container">
          <div className="result-screen">
            <div className="ingredient-certificate">
              <div className="certificate-header">
                <div className="certificate-label">你的本命食材</div>
                <div className="certificate-stamp">{ingredient.emoji}</div>
                <h1 className="certificate-title">{ingredient.name}</h1>
                <div className="certificate-trait">{ingredient.trait}</div>
              </div>

              <div className="certificate-divider"></div>

              <div className="certificate-whisper">
                {ingredient.whisper}
              </div>

              <div className="certificate-pairing">
                {ingredient.pairing}
              </div>

              <div className="result-actions">
                <button className="action-btn primary" onClick={handleRestart}>
                  重新测试
                </button>
                {!roomCode && (
                  <button className="action-btn" onClick={handleCreateRoom}>
                    创建房间邀请好友
                  </button>
                )}
              </div>

              {roomCode && (
                <div className="room-section">
                  <h2 className="room-title">房间码: {roomCode}</h2>

                  <div className="room-actions">
                    <button className="action-btn" onClick={handleCopyCode}>
                      复制房间码
                    </button>
                  </div>

                  {participants.length > 0 && (
                    <div className="cooking-table">
                      <h3 className="table-title">当前食材 ({participants.length})</h3>
                      <div className="participants">
                        {participants.map((p) => (
                          <div
                            key={p.id}
                            className="participant"
                          >
                            <div className="participant-emoji">{p.ingredient.emoji}</div>
                            <div className="participant-name">{p.ingredient.name}</div>
                          </div>
                        ))}
                      </div>

                      <div className="dish-results">
                        {combinedDish.map((dish, index) => (
                          <div key={index} className="dish-result">
                            <div className="dish-name">{dish.dishName}</div>
                            <div className="dish-description">{dish.dishDescription}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!roomCode && (
                <div className="room-section">
                  <h2 className="room-title">或加入已有房间</h2>
                  <div className="room-actions">
                    <input
                      type="text"
                      className="room-input"
                      placeholder="输入房间码"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                      maxLength={6}
                    />
                    <button className="action-btn" onClick={handleJoinRoom}>
                      加入房间
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {showCopyNotification && (
          <div className="copy-notification">房间码已复制！</div>
        )}
      </div>
    )
  }
}

export default App
