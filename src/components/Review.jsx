import { useState } from 'react'
import SignImage from './SignImage.jsx'
import { CAT_ICONS } from './Home.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

const UI = {
  all:         { en: 'All',      zh: '全部', zhTW: '全部', es: 'Todas' },
  wrong:       { en: 'Wrong',    zh: '错题', zhTW: '錯題', es: 'Incorrectas' },
  correct:     { en: 'Correct',  zh: '正确', zhTW: '正確', es: 'Correctas' },
  back:        { en: '← Results',zh: '← 返回结果', zhTW: '← 返回結果', es: '← Resultados' },
  explanation: { en: 'Explanation', zh: '解析', zhTW: '解析', es: 'Explicación' },
  skipped:     { en: 'Not answered', zh: '未作答', zhTW: '未作答', es: 'Sin respuesta' },
  noItems:     { en: 'No questions in this filter.', zh: '该筛选条件下没有题目。', zhTW: '該篩選條件下沒有題目。', es: 'No hay preguntas con este filtro.' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

export default function Review({ lang, questions, answers, onBack, categories }) {
  const [filter, setFilter] = useState('all')

  const wrongCount   = answers.filter((a, i) => a !== questions[i].ans).length
  const correctCount = answers.filter((a, i) => a === questions[i].ans).length

  const filtered = questions
    .map((q, i) => ({ q, i, userAns: answers[i], isCorrect: answers[i] === q.ans }))
    .filter(({ isCorrect }) => filter === 'all' ? true : filter === 'correct' ? isCorrect : !isCorrect)

  return (
    <main className="page fade-in">
      {/* Filter tabs */}
      <div className="review-filter">
        <button className={`filter-btn${filter === 'all'     ? ' active' : ''}`} onClick={() => setFilter('all')}>
          {t('all', lang)} ({questions.length})
        </button>
        <button className={`filter-btn${filter === 'wrong'   ? ' active' : ''}`} onClick={() => setFilter('wrong')}>
          ✗ {t('wrong', lang)} ({wrongCount})
        </button>
        <button className={`filter-btn${filter === 'correct' ? ' active' : ''}`} onClick={() => setFilter('correct')}>
          ✓ {t('correct', lang)} ({correctCount})
        </button>
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text3)', padding: '40px 0', fontSize: 14 }}>
          {t('noItems', lang)}
        </div>
      )}

      {filtered.map(({ q, i, userAns, isCorrect }) => {
        const qData    = q[lang] || q.en
        const catLabel = categories[q.cat]?.[lang] || categories[q.cat]?.en || q.cat

        return (
          <div key={i} className={`review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`}>
            {/* Header */}
            <div className="review-header">
              <div className="review-num">{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div className="review-cat-label"><span style={{ marginRight: 4 }}>{CAT_ICONS[q.cat] || ''}</span>{catLabel}</div>
                <div className="review-q">{qData?.q}</div>
              </div>
            </div>

            {/* Sign image */}
            {q.sign && (
              <div className="review-sign">
                <SignImage type={q.sign} size={96} />
              </div>
            )}

            {/* Options */}
            <div className="review-opts">
              {qData?.opts?.map((opt, oi) => {
                let cls = 'review-opt'
                let icon = ''
                if (oi === q.ans) { cls += ' opt-correct'; icon = '✓' }
                else if (oi === userAns && !isCorrect) { cls += ' opt-user-wrong'; icon = '✗' }
                return (
                  <div key={oi} className={cls}>
                    <span className="review-icon">{icon}</span>
                    <span><strong>{LETTERS[oi]}.</strong> {opt}</span>
                  </div>
                )
              })}
              {userAns === null && (
                <div style={{ fontSize: 13, color: 'var(--text3)', padding: '6px 4px', fontStyle: 'italic' }}>
                  — {t('skipped', lang)}
                </div>
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
