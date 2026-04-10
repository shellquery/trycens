import { useState } from 'react'
import { questions } from '../data/questions.js'
import SignImage from './SignImage.jsx'
import { CAT_ICONS } from './Home.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

const UI = {
  title:       { en: 'Wrong Question Bank', zh: '错题集', zhTW: '錯題集', es: 'Banco de Errores' },
  empty:       { en: 'No wrong questions yet!', zh: '暂无错题', zhTW: '暫無錯題', es: '¡Sin errores todavía!' },
  emptyNote:   { en: 'Complete a practice test and your wrong answers will appear here.', zh: '完成一次练习后，答错的题目会自动加入这里。', zhTW: '完成一次練習後，答錯的題目會自動加入這裡。', es: 'Completa un examen y tus respuestas incorrectas aparecerán aquí.' },
  practice:    { en: 'Practice Wrong Questions', zh: '开始错题练习 →', zhTW: '開始錯題練習 →', es: 'Practicar Errores →' },
  clearAll:    { en: 'Clear All', zh: '清空全部', zhTW: '清空全部', es: 'Borrar Todo' },
  clearConfirm:{ en: 'Clear all wrong questions?', zh: '确认清空全部错题？', zhTW: '確認清空全部錯題？', es: '¿Borrar todas las preguntas incorrectas?' },
  correctAns:  { en: 'Correct answer', zh: '正确答案', zhTW: '正確答案', es: 'Respuesta correcta' },
  remove:      { en: 'Remove', zh: '移除', zhTW: '移除', es: 'Quitar' },
  filterAll:   { en: 'All', zh: '全部', zhTW: '全部', es: 'Todas' },
  total:       { en: 'questions', zh: '道题', zhTW: '道題', es: 'preguntas' },
  startPractice: { en: 'Start Practice', zh: '开始练习', zhTW: '開始練習', es: 'Comenzar' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

export default function WrongBank({ lang, wrongIds, categories, onPractice, onRemove, onClearAll }) {
  const [filter, setFilter]       = useState('all')
  const [expanded, setExpanded]   = useState(null)
  const [confirming, setConfirming] = useState(false)

  // Resolve wrong questions from the full question bank
  const wrongQuestions = questions.filter(q => wrongIds.has(q.id))

  // Category counts among wrong questions
  const catCounts = wrongQuestions.reduce((acc, q) => {
    acc[q.cat] = (acc[q.cat] || 0) + 1
    return acc
  }, {})

  const catKeys = ['all', ...Object.keys(catCounts)]

  const filtered = filter === 'all'
    ? wrongQuestions
    : wrongQuestions.filter(q => q.cat === filter)

  const toggleExpand = (id) => setExpanded(prev => prev === id ? null : id)

  const handleClearAll = () => {
    if (confirming) {
      onClearAll()
      setConfirming(false)
      setFilter('all')
      setExpanded(null)
    } else {
      setConfirming(true)
    }
  }

  return (
    <main className="page fade-in">
      {/* Top action bar */}
      {wrongQuestions.length > 0 && (
        <div className="wb-actions">
          <button className="start-btn" style={{ marginBottom: 0, flex: 1 }} onClick={() => onPractice(filtered)}>
            {filter === 'all'
              ? t('practice', lang)
              : `${t('startPractice', lang)} (${filtered.length})`}
          </button>
          <button
            className={`wb-clear-btn${confirming ? ' confirming' : ''}`}
            onClick={handleClearAll}
            onBlur={() => setConfirming(false)}
          >
            {confirming ? (lang === 'zh' ? '确认？' : lang === 'zhTW' ? '確認？' : lang === 'es' ? '¿OK?' : 'Sure?') : t('clearAll', lang)}
          </button>
        </div>
      )}

      {/* Category filter */}
      {catKeys.length > 2 && (
        <div className="review-filter" style={{ marginTop: 14 }}>
          {catKeys.map(k => {
            const cnt = k === 'all' ? wrongQuestions.length : (catCounts[k] || 0)
            const label = k === 'all' ? t('filterAll', lang) : (categories[k]?.[lang] || categories[k]?.en || k)
            return (
              <button
                key={k}
                className={`filter-btn${filter === k ? ' active' : ''}`}
                onClick={() => setFilter(k)}
              >
                {label} ({cnt})
              </button>
            )
          })}
        </div>
      )}

      {/* Empty state */}
      {wrongQuestions.length === 0 && (
        <div className="wb-empty">
          <div className="wb-empty-icon">✓</div>
          <div className="wb-empty-title">{t('empty', lang)}</div>
          <div className="wb-empty-note">{t('emptyNote', lang)}</div>
        </div>
      )}

      {/* Wrong questions list */}
      {filtered.map((q, idx) => {
        const qData    = q[lang] || q.en
        const catLabel = categories[q.cat]?.[lang] || categories[q.cat]?.en || q.cat
        const isOpen   = expanded === q.id
        const correctOpt = qData?.opts?.[q.ans]

        return (
          <div key={q.id} className="wb-item">
            <div className="wb-item-top" onClick={() => toggleExpand(q.id)}>
              <div className="wb-item-meta">
                <span className="wb-num">{idx + 1}</span>
                <span className="wb-cat">{CAT_ICONS[q.cat] ? `${CAT_ICONS[q.cat]} ` : ''}{catLabel}</span>
              </div>
              <p className="wb-q">{qData?.q}</p>
              {!isOpen && correctOpt && (
                <div className="wb-ans-preview">
                  <span className="wb-ans-label">{t('correctAns', lang)}: </span>
                  <span className="wb-ans-text">{LETTERS[q.ans]}. {correctOpt}</span>
                </div>
              )}
              <span className="wb-chevron">{isOpen ? '▲' : '▼'}</span>
            </div>

            {isOpen && (
              <div className="wb-item-detail fade-in">
                {q.sign && (
                  <div className="review-sign" style={{ marginBottom: 10 }}>
                    <SignImage type={q.sign} size={90} />
                  </div>
                )}
                <div className="review-opts">
                  {qData?.opts?.map((opt, oi) => (
                    <div key={oi} className={`review-opt${oi === q.ans ? ' opt-correct' : ''}`}>
                      <span className="review-icon">{oi === q.ans ? '✓' : ''}</span>
                      <span><strong>{LETTERS[oi]}.</strong> {opt}</span>
                    </div>
                  ))}
                </div>
                {qData?.exp && (
                  <div className="review-exp" style={{ marginTop: 10 }}>
                    <strong>{lang === 'zh' ? '解析' : lang === 'zhTW' ? '解析' : lang === 'es' ? 'Explicación' : 'Explanation'}</strong>
                    {qData.exp}
                  </div>
                )}
                <button className="wb-remove-btn" onClick={() => onRemove(q.id)}>
                  ✕ {t('remove', lang)}
                </button>
              </div>
            )}
          </div>
        )
      })}

      {filtered.length === 0 && wrongQuestions.length > 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text3)', padding: '40px 0', fontSize: 14 }}>
          {lang === 'zh' ? '该分类下暂无错题' : lang === 'zhTW' ? '該分類下暫無錯題' : lang === 'es' ? 'Sin errores en esta categoría' : 'No wrong questions in this category'}
        </div>
      )}
    </main>
  )
}
