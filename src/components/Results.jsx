const UI = {
  passed:     { en: 'Passed!',          zh: '通过！',       zhTW: '通過！',       es: '¡Aprobado!' },
  failed:     { en: 'Not Yet',          zh: '继续加油',     zhTW: '繼續加油',     es: 'Sigue Practicando' },
  passNote:   { en: 'You passed the DMV threshold (≥70%)', zh: '超过加州DMV及格线（≥70%）', zhTW: '超過加州DMV及格線（≥70%）', es: 'Superaste el umbral del DMV (≥70%)' },
  failNote:   { en: 'Review mistakes and try again',       zh: '查看错题后再试一次',         zhTW: '查看錯題後再試一次',         es: 'Revisa errores e inténtalo de nuevo' },
  correct:    { en: 'Correct',    zh: '正确', zhTW: '正確', es: 'Correctas' },
  incorrect:  { en: 'Incorrect',  zh: '错误', zhTW: '錯誤', es: 'Incorrectas' },
  time:       { en: 'Time',       zh: '用时', zhTW: '用時', es: 'Tiempo' },
  grade:      { en: 'Grade',      zh: '等级', zhTW: '等級', es: 'Calificación' },
  byCategory: { en: 'By Category',zh: '分类',zhTW: '分類', es: 'Por Categoría' },
  reviewBtn:  { en: 'Review Answers', zh: '查看答案',  zhTW: '查看答案',  es: 'Revisar Respuestas' },
  retryBtn:   { en: 'Try Again',      zh: '再来一次',  zhTW: '再來一次',  es: 'Intentar de Nuevo' },
  homeBtn:    { en: '← Home',         zh: '← 返回首页',zhTW: '← 返回首頁',es: '← Inicio' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

function fmtTime(ms) {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

function getGrade(pct) {
  if (pct >= 90) return { letter: 'A', color: '#16a34a' }
  if (pct >= 80) return { letter: 'B', color: '#2563eb' }
  if (pct >= 70) return { letter: 'C', color: '#d97706' }
  if (pct >= 60) return { letter: 'D', color: '#ea580c' }
  return { letter: 'F', color: '#dc2626' }
}

export default function Results({ lang, score, elapsed, questions, answers, onReview, onRetry, onHome, categories }) {
  const pct    = Math.round((score.correct / score.total) * 100)
  const passed = pct >= 70
  const grade  = getGrade(pct)

  // Per-category breakdown
  const catStats = {}
  questions.forEach((q, i) => {
    if (!catStats[q.cat]) catStats[q.cat] = { correct: 0, total: 0 }
    catStats[q.cat].total++
    if (answers[i] === q.ans) catStats[q.cat].correct++
  })

  return (
    <main className="page fade-in">
      {/* Hero */}
      <div className="result-hero">
        <div className="result-emoji">{passed ? '🎉' : '📚'}</div>
        <div className={`result-score ${passed ? 'pass' : 'fail'}`}>{pct}%</div>
        <div className="result-grade-row">
          <span className="result-grade" style={{ color: grade.color }}>{grade.letter}</span>
          <span className="result-verdict">{passed ? t('passed', lang) : t('failed', lang)}</span>
        </div>
        <p className="result-meta">{passed ? t('passNote', lang) : t('failNote', lang)}</p>

        <div className="result-breakdown">
          <div className="breakdown-pill">
            <div className="breakdown-num correct-num">{score.correct}</div>
            <div className="breakdown-label">{t('correct', lang)}</div>
          </div>
          <div className="breakdown-pill">
            <div className="breakdown-num incorrect-num">{score.total - score.correct}</div>
            <div className="breakdown-label">{t('incorrect', lang)}</div>
          </div>
          <div className="breakdown-pill">
            <div className="breakdown-num">{fmtTime(elapsed)}</div>
            <div className="breakdown-label">{t('time', lang)}</div>
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      {Object.keys(catStats).length > 1 && (
        <div className="cat-breakdown">
          <div className="config-label" style={{ marginBottom: 8 }}>{t('byCategory', lang)}</div>
          {Object.entries(catStats).map(([cat, s]) => {
            const p = Math.round((s.correct / s.total) * 100)
            const barColor = p >= 70 ? 'var(--correct)' : p >= 50 ? 'var(--warning)' : 'var(--incorrect)'
            return (
              <div className="cat-row" key={cat}>
                <span className="cat-name">{categories[cat]?.[lang] || categories[cat]?.en || cat}</span>
                <div className="cat-bar-wrap">
                  <div className="cat-bar-fill" style={{ width: `${p}%`, background: barColor }} />
                </div>
                <span className="cat-score">{s.correct}/{s.total}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Actions */}
      <div className="action-btns" style={{ marginBottom: 10 }}>
        <button className="secondary-btn" onClick={onReview}>{t('reviewBtn', lang)}</button>
        <button className="primary-btn" onClick={onRetry}>{t('retryBtn', lang)}</button>
      </div>
      <button className="secondary-btn" style={{ width: '100%' }} onClick={onHome}>{t('homeBtn', lang)}</button>
    </main>
  )
}
