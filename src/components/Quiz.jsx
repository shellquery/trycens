import { useState, useEffect, useCallback } from 'react'
import SignImage from './SignImage.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

const UI = {
  next:        { en: 'Next', zh: '下一题', zhTW: '下一題', es: 'Siguiente' },
  finish:      { en: 'Finish', zh: '完成', zhTW: '完成', es: 'Terminar' },
  exit:        { en: 'Exit', zh: '退出', zhTW: '退出', es: 'Salir' },
  explanation: { en: 'Explanation', zh: '解析', zhTW: '解析', es: 'Explicación' },
  question:    { en: 'Question', zh: '第', zhTW: '第', es: 'Pregunta' },
  of:          { en: 'of', zh: '/', zhTW: '/', es: 'de' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

function fmtTime(ms) {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

export default function Quiz({ lang, questions, onFinish, onExit, categories }) {
  const [idx, setIdx]         = useState(0)
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null))
  const [selected, setSelected] = useState(null)   // current selection
  const [revealed, setRevealed] = useState(false)  // answer shown?
  const [startMs]             = useState(Date.now())

  const q = questions[idx]
  const qData = q?.[lang] || q?.en
  const isLast = idx === questions.length - 1

  const pickAnswer = useCallback((i) => {
    if (revealed) return
    setSelected(i)
    setRevealed(true)
    setAnswers(prev => {
      const next = [...prev]
      next[idx] = i
      return next
    })
  }, [revealed, idx])

  const advance = useCallback(() => {
    if (isLast) {
      onFinish(
        answers.map((a, i) => (i === idx ? selected : a)),
        Date.now() - startMs
      )
    } else {
      setIdx(i => i + 1)
      setSelected(null)
      setRevealed(false)
    }
  }, [isLast, idx, selected, answers, onFinish, startMs])

  // keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (['1','2','3','4'].includes(e.key) && !revealed) {
        pickAnswer(+e.key - 1)
      }
      if ((e.key === 'Enter' || e.key === ' ') && revealed) {
        advance()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [pickAnswer, advance, revealed])

  if (!q) return null

  const pct = Math.round(((idx) / questions.length) * 100)
  const catLabel = categories[q.cat]?.[lang] || categories[q.cat]?.en || q.cat

  return (
    <main className="page fade-in">
      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>

      {/* Meta row */}
      <div className="quiz-meta">
        <span className="quiz-counter">
          {lang === 'zh' || lang === 'zhTW'
            ? `${t('question', lang)} ${idx + 1} ${t('of', lang)} ${questions.length} 题`
            : `${t('question', lang)} ${idx + 1} ${t('of', lang)} ${questions.length}`}
        </span>
        <span className="quiz-cat">{catLabel}</span>
      </div>

      {/* Question card */}
      <div className="q-card pop-in" key={idx}>
        {/* Sign image */}
        {q.sign && (
          <div className="sign-wrap">
            <SignImage type={q.sign} size={120} />
          </div>
        )}

        <p className="q-text">{qData?.q}</p>

        {/* Options */}
        <div className="options-list">
          {qData?.opts?.map((opt, i) => {
            let cls = 'option-btn'
            if (revealed) {
              if (i === q.ans) cls += ' correct'
              else if (i === selected && selected !== q.ans) cls += ' incorrect'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => pickAnswer(i)}
                disabled={revealed}
              >
                <span className="option-letter">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

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
        {revealed && (
          <button className="next-btn" onClick={advance}>
            {isLast ? t('finish', lang) : t('next', lang)} →
          </button>
        )}
      </div>
    </main>
  )
}
