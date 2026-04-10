import { useState, useCallback } from 'react'
import { questions, CATEGORIES } from './data/questions.js'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import Review from './components/Review.jsx'

const LANGS = [
  { id: 'en',   label: 'EN' },
  { id: 'zh',   label: '简中' },
  { id: 'zhTW', label: '繁中' },
  { id: 'es',   label: 'ES' },
]

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
  const [lang, setLang]   = useState(() => localStorage.getItem('ca-dmv-lang') || 'en')
  const [screen, setScreen] = useState('home') // home | quiz | results | review

  const [quizQuestions, setQuizQuestions] = useState([])
  const [answers, setAnswers]             = useState([])  // index of selected option or null
  const [startTime, setStartTime]         = useState(null)
  const [elapsed, setElapsed]             = useState(0)

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
    let pool = category === 'all' ? questions : questions.filter(q => q.cat === category)
    const selected = shuffle(pool).slice(0, count)
    setQuizQuestions(selected)
    setAnswers(new Array(selected.length).fill(null))
    setStartTime(Date.now())
    setElapsed(0)
    setScreen('quiz')
  }, [])

  const finishQuiz = useCallback((finalAnswers, elapsedMs) => {
    setAnswers(finalAnswers)
    setElapsed(elapsedMs)
    setScreen('results')
  }, [])

  const t = (key) => {
    const ui = {
      appTitle: { en: 'CA DMV Practice', zh: '加州驾考宝典', zhTW: '加州駕考寶典', es: 'Práctica DMV CA' },
      quizTitle: { en: 'Practice Test', zh: '练习考试', zhTW: '練習考試', es: 'Examen de Práctica' },
      resultsTitle: { en: 'Results', zh: '考试结果', zhTW: '考試結果', es: 'Resultados' },
      reviewTitle: { en: 'Review Answers', zh: '查看答案', zhTW: '查看答案', es: 'Revisar Respuestas' },
    }
    return ui[key]?.[lang] || ui[key]?.en || key
  }

  const titleMap = { home: t('appTitle'), quiz: t('quizTitle'), results: t('resultsTitle'), review: t('reviewTitle') }

  const score = answers.length
    ? { correct: answers.filter((a, i) => a === quizQuestions[i]?.ans).length, total: quizQuestions.length }
    : null

  return (
    <div className="shell" data-theme={theme}>
      {/* Top bar */}
      <header className="topbar">
        <span className="topbar-title">{titleMap[screen]}</span>
        <div className="topbar-actions">
          <div className="lang-switcher">
            {LANGS.map(l => (
              <button key={l.id} className={`lang-btn${lang === l.id ? ' active' : ''}`}
                onClick={() => switchLang(l.id)}>{l.label}</button>
            ))}
          </div>
          <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {/* Screens */}
      {screen === 'home' && (
        <Home lang={lang} onStart={startQuiz} totalQuestions={questions.length} categories={CATEGORIES} />
      )}
      {screen === 'quiz' && (
        <Quiz
          lang={lang}
          questions={quizQuestions}
          onFinish={finishQuiz}
          onExit={() => setScreen('home')}
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
          onRetry={() => startQuiz({ count: quizQuestions.length, category: 'all' })}
          onHome={() => setScreen('home')}
          categories={CATEGORIES}
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
    </div>
  )
}
