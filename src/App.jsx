import { useState, useCallback, useEffect } from 'react'
import { questions, CATEGORIES } from './data/questions.js'
import { useWrongBank } from './hooks/useWrongBank.js'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import Review from './components/Review.jsx'
import WrongBank from './components/WrongBank.jsx'

const LANGS = [
  { id: 'en',   label: 'EN' },
  { id: 'zh',   label: '简中' },
  { id: 'zhTW', label: '繁中' },
  { id: 'es',   label: 'ES' },
]

const TITLE = {
  home:      { en: 'CA DMV Practice',   zh: '加州驾考宝典', zhTW: '加州駕考寶典', es: 'Práctica DMV CA' },
  quiz:      { en: 'Practice Test',     zh: '练习考试',     zhTW: '練習考試',     es: 'Examen de Práctica' },
  results:   { en: 'Results',           zh: '考试结果',     zhTW: '考試結果',     es: 'Resultados' },
  review:    { en: 'Review Answers',    zh: '查看答案',     zhTW: '查看答案',     es: 'Revisar Respuestas' },
  wrongbank: { en: 'Wrong Question Bank', zh: '错题集',     zhTW: '錯題集',       es: 'Banco de Errores' },
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('ca-dmv-theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [lang, setLang] = useState(() => localStorage.getItem('ca-dmv-lang') || 'en')
  const [screen, setScreen] = useState('home')

  // quiz state
  const [quizConfig, setQuizConfig]       = useState({ count: 20, category: 'all' })
  const [quizQuestions, setQuizQuestions] = useState([])
  const [answers, setAnswers]             = useState([])
  const [elapsed, setElapsed]             = useState(0)
  const [quizSource, setQuizSource]       = useState('normal') // 'normal' | 'wrongbank'

  // wrong question bank
  const { ids: wrongIds, syncAfterQuiz, removeOne, clearAll } = useWrongBank()

  const score = quizQuestions.length
    ? { correct: answers.filter((a, i) => a === quizQuestions[i]?.ans).length, total: quizQuestions.length }
    : null

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('ca-dmv-theme', next)
  }

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('ca-dmv-lang', l)
  }

  const startQuiz = useCallback(({ count, category }) => {
    const pool = category === 'all' ? questions : questions.filter(q => q.cat === category)
    const selected = shuffle(pool).slice(0, Math.min(count, pool.length))
    setQuizConfig({ count, category })
    setQuizQuestions(selected)
    setAnswers(new Array(selected.length).fill(null))
    setElapsed(0)
    setQuizSource('normal')
    setScreen('quiz')
  }, [])

  const startWrongBankQuiz = useCallback((pool) => {
    const selected = shuffle(pool)
    setQuizQuestions(selected)
    setAnswers(new Array(selected.length).fill(null))
    setElapsed(0)
    setQuizSource('wrongbank')
    setScreen('quiz')
  }, [])

  const finishQuiz = useCallback((finalAnswers, elapsedMs) => {
    setAnswers(finalAnswers)
    setElapsed(elapsedMs)
    // Auto-sync wrong bank: add wrong IDs, graduate correct ones
    setQuizQuestions(prev => {
      syncAfterQuiz(prev, finalAnswers)
      return prev
    })
    setScreen('results')
  }, [syncAfterQuiz])

  const topTitle = TITLE[screen]?.[lang] || TITLE[screen]?.en

  const handleBack = () => {
    if (screen === 'review') setScreen('results')
    else if (screen === 'results') setScreen(quizSource === 'wrongbank' ? 'wrongbank' : 'home')
    else setScreen('home')
  }

  return (
    <div className="shell" data-theme={theme}>
      <header className="topbar">
        {screen !== 'home' ? (
          <button className="back-btn" onClick={handleBack}>←</button>
        ) : (
          <span className="topbar-logo">🚗</span>
        )}
        <span className="topbar-title">{topTitle}</span>
        <div className="topbar-actions">
          <div className="lang-switcher">
            {LANGS.map(l => (
              <button
                key={l.id}
                className={`lang-btn${lang === l.id ? ' active' : ''}`}
                onClick={() => switchLang(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <div className={`screen-wrap screen-${screen}`}>
        {screen === 'home' && (
          <Home
            lang={lang}
            onStart={startQuiz}
            onOpenWrongBank={() => setScreen('wrongbank')}
            totalQuestions={questions.length}
            categories={CATEGORIES}
            wrongCount={wrongIds.size}
          />
        )}
        {screen === 'quiz' && (
          <Quiz
            key={quizQuestions.map(q => q.id).join('-')}
            lang={lang}
            questions={quizQuestions}
            onFinish={finishQuiz}
            onExit={() => setScreen(quizSource === 'wrongbank' ? 'wrongbank' : 'home')}
            categories={CATEGORIES}
          />
        )}
        {screen === 'results' && score && (
          <Results
            lang={lang}
            score={score}
            elapsed={elapsed}
            questions={quizQuestions}
            answers={answers}
            onReview={() => setScreen('review')}
            onRetry={() => quizSource === 'wrongbank'
              ? startWrongBankQuiz(quizQuestions)
              : startQuiz(quizConfig)}
            onHome={() => setScreen(quizSource === 'wrongbank' ? 'wrongbank' : 'home')}
            onOpenWrongBank={() => setScreen('wrongbank')}
            categories={CATEGORIES}
            wrongCount={wrongIds.size}
            quizSource={quizSource}
          />
        )}
        {screen === 'review' && (
          <Review
            lang={lang}
            questions={quizQuestions}
            answers={answers}
            onBack={() => setScreen('results')}
            categories={CATEGORIES}
          />
        )}
        {screen === 'wrongbank' && (
          <WrongBank
            lang={lang}
            wrongIds={wrongIds}
            categories={CATEGORIES}
            onPractice={startWrongBankQuiz}
            onRemove={removeOne}
            onClearAll={clearAll}
          />
        )}
      </div>
    </div>
  )
}
