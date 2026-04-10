import { useState, useEffect, useCallback, useRef } from 'react'
import SignImage from './SignImage.jsx'
import { CAT_ICONS } from './Home.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

const UI = {
  next:        { en: 'Next',        zh: '下一题', zhTW: '下一題', es: 'Siguiente' },
  finish:      { en: 'Finish',      zh: '完成',   zhTW: '完成',   es: 'Terminar' },
  exit:        { en: 'Exit',        zh: '退出',   zhTW: '退出',   es: 'Salir' },
  explanation: { en: 'Explanation', zh: '解析',   zhTW: '解析',   es: 'Explicación' },
  question:    { en: 'Question',    zh: '第',     zhTW: '第',     es: 'Pregunta' },
  of:          { en: 'of',          zh: '/',      zhTW: '/',      es: 'de' },
  keyHint:     { en: 'Press 1–4 to answer · Enter to continue', zh: '按 1–4 选答案 · 回车继续', zhTW: '按 1–4 選答案 · 回車繼續', es: 'Presiona 1–4 para responder · Enter para continuar' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

function fmtTime(s) {
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

export default function Quiz({ lang, questions, onFinish, onExit, categories, onWrongAnswer }) {
  const [idx, setIdx]           = useState(0)
  const [answers, setAnswers]   = useState(() => new Array(questions.length).fill(null))
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [secs, setSecs]         = useState(0)
  const startRef                = useRef(Date.now())
  const timerRef                = useRef(null)

  // Live timer
  useEffect(() => {
    timerRef.current = setInterval(() => setSecs(Math.floor((Date.now() - startRef.current) / 1000)), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const q     = questions[idx]
  const qData = q?.[lang] || q?.en
  const isLast = idx === questions.length - 1

  const pickAnswer = useCallback((i) => {
    if (revealed) return
    setSelected(i)
    setRevealed(true)
    const q = questions[idx]
    // Immediately record wrong answer to the wrong bank
    if (i !== q.ans && onWrongAnswer) onWrongAnswer(q.id)
    setAnswers(prev => {
      const next = [...prev]
      next[idx] = i
      return next
    })
  }, [revealed, idx, questions, onWrongAnswer])

  const advance = useCallback(() => {
    if (isLast) {
      clearInterval(timerRef.current)
      // answers[idx] is already set; read via functional update to get latest
      setAnswers(prev => {
        onFinish(prev, Date.now() - startRef.current)
        return prev
      })
    } else {
      setIdx(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }, [isLast, onFinish])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'BUTTON') return
      if (['1','2','3','4'].includes(e.key) && !revealed) pickAnswer(+e.key - 1)
      if ((e.key === 'Enter' || e.key === ' ') && revealed) { e.preventDefault(); advance() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [pickAnswer, advance, revealed])

  if (!q) return null

  const answeredCount = answers.filter(a => a !== null).length
  const pct = Math.round((answeredCount / questions.length) * 100)
  const catLabel = categories[q.cat]?.[lang] || categories[q.cat]?.en || q.cat
  const isCorrect = selected === q.ans

  return (
    <main className="page">
      {/* Progress bar */}
      <div className="progress-wrap">
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>

      {/* Meta row */}
      <div className="quiz-meta">
        <span className="quiz-counter">
          {lang === 'zh' || lang === 'zhTW'
            ? `第 ${idx + 1} / ${questions.length} 题`
            : `${t('question', lang)} ${idx + 1} ${t('of', lang)} ${questions.length}`}
        </span>
        <span className="quiz-timer">{fmtTime(secs)}</span>
        <span className="quiz-cat">{CAT_ICONS[q.cat] ? `${CAT_ICONS[q.cat]} ` : ''}{catLabel}</span>
      </div>

      {/* Question card — key forces remount = animation replay */}
      <div className="q-card pop-in" key={idx}>
        {q.sign && (
          <div className="sign-wrap">
            <SignImage type={q.sign} size={130} />
          </div>
        )}

        <p className="q-text">{qData?.q}</p>

        <div className="options-list">
          {qData?.opts?.map((opt, i) => {
            let cls = 'option-btn'
            if (revealed) {
              if (i === q.ans)                           cls += ' correct'
              else if (i === selected && !isCorrect)     cls += ' incorrect'
            }
            return (
              <button key={i} className={cls} onClick={() => pickAnswer(i)} disabled={revealed}>
                <span className="option-letter">{LETTERS[i]}</span>
                <span className="option-text">{opt}</span>
                {revealed && i === q.ans   && <span className="option-icon">✓</span>}
                {revealed && i === selected && !isCorrect && i !== q.ans && <span className="option-icon">✗</span>}
              </button>
            )
          })}
        </div>

        {/* Result flash */}
        {revealed && (
          <div className={`result-flash ${isCorrect ? 'flash-correct' : 'flash-incorrect'} fade-in`}>
            {isCorrect ? '✓ ' : '✗ '}
            {isCorrect
              ? (lang === 'zh' ? '回答正确！' : lang === 'zhTW' ? '回答正確！' : lang === 'es' ? '¡Correcto!' : 'Correct!')
              : (lang === 'zh' ? '答错了' : lang === 'zhTW' ? '答錯了' : lang === 'es' ? 'Incorrecto' : 'Incorrect')}
          </div>
        )}

        {/* Explanation */}
        {revealed && qData?.exp && (
          <div className="explanation-box fade-in">
            <strong>{t('explanation', lang)}</strong>
            {qData.exp}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="quiz-footer">
        <button className="exit-btn" onClick={onExit}>{t('exit', lang)}</button>
        {revealed ? (
          <button className="next-btn" onClick={advance}>
            {isLast ? t('finish', lang) : t('next', lang)} →
          </button>
        ) : (
          <span className="key-hint">{t('keyHint', lang)}</span>
        )}
      </div>
    </main>
  )
}
