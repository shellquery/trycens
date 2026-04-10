import { useState } from 'react'
import SignImage from './SignImage.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

const UI = {
  all:         { en: 'All', zh: '全部', zhTW: '全部', es: 'Todas' },
  wrong:       { en: 'Wrong', zh: '错题', zhTW: '錯題', es: 'Incorrectas' },
  correct:     { en: 'Correct', zh: '正确', zhTW: '正確', es: 'Correctas' },
  back:        { en: '← Back to Results', zh: '← 返回结果', zhTW: '← 返回結果', es: '← Volver a Resultados' },
  explanation: { en: 'Explanation', zh: '解析', zhTW: '解析', es: 'Explicación' },
  yourAnswer:  { en: 'Your answer', zh: '你的答案', zhTW: '你的答案', es: 'Tu respuesta' },
  skipped:     { en: 'Skipped', zh: '未作答', zhTW: '未作答', es: 'Omitida' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

export default function Review({ lang, questions, answers, onBack, categories }) {
  const [filter, setFilter] = useState('all')

  const filtered = questions
    .map((q, i) => ({ q, i, userAns: answers[i], isCorrect: answers[i] === q.ans }))
    .filter(({ isCorrect }) => {
      if (filter === 'correct') return isCorrect
      if (filter === 'wrong') return !isCorrect
      return true
    })

  return (
    <main className="page fade-in">
      {/* Filter */}
      <div className="review-filter">
        {['all', 'wrong', 'correct'].map(f => (
          <button key={f} className={`filter-btn${filter === f ? ' active' : ''}`} onClick={() => setFilter(f)}>
            {t(f, lang)} ({
              f === 'all' ? questions.length :
              f === 'wrong' ? answers.filter((a, i) => a !== questions[i].ans).length :
              answers.filter((a, i) => a === questions[i].ans).length
            })
          </button>
        ))}
      </div>

      {/* Items */}
      {filtered.map(({ q, i, userAns, isCorrect }) => {
        const qData = q[lang] || q.en
        const catLabel = categories[q.cat]?.[lang] || categories[q.cat]?.en || q.cat
        return (
          <div key={i} className={`review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`}>
            <div className="review-header">
              <div className="review-num">{i + 1}</div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 4 }}>{catLabel}</div>
                <div className="review-q">{qData?.q}</div>
              </div>
            </div>

            {/* Sign */}
            {q.sign && (
              <div className="review-sign">
                <SignImage type={q.sign} size={90} />
              </div>
            )}

            {/* Options */}
            <div className="review-opts">
              {qData?.opts?.map((opt, oi) => {
                let cls = 'review-opt'
                let icon = ''
                if (oi === q.ans) { cls += ' opt-correct'; icon = '✓' }
                else if (oi === userAns && userAns !== q.ans) { cls += ' opt-user-wrong'; icon = '✗' }
                return (
                  <div key={oi} className={cls}>
                    <span className="review-icon">{icon}</span>
                    <span><strong>{LETTERS[oi]}.</strong> {opt}</span>
                  </div>
                )
              })}
              {userAns === null && (
                <div style={{ fontSize: 13, color: 'var(--text3)', padding: '6px 0' }}>— {t('skipped', lang)}</div>
              )}
            </div>

            {/* Explanation */}
            {qData?.exp && (
              <div className="review-exp">
                <strong>{t('explanation', lang)}</strong>
                {qData.exp}
              </div>
            )}
          </div>
        )
      })}

      <button className="secondary-btn" style={{ width: '100%', marginTop: 8 }} onClick={onBack}>
        {t('back', lang)}
      </button>
    </main>
  )
}
