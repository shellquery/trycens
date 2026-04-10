const UI = {
  passed:      { en: 'Passed!', zh: '通过！', zhTW: '通過！', es: '¡Aprobado!' },
  failed:      { en: 'Keep Practicing', zh: '继续加油', zhTW: '繼續加油', es: 'Sigue Practicando' },
  passNote:    { en: 'Great work! You scored above 70%.', zh: '太棒了！得分超过70%。', zhTW: '太棒了！得分超過70%。', es: '¡Buen trabajo! Obtuviste más del 70%.' },
  failNote:    { en: 'Review your mistakes and try again.', zh: '查看错误题目，再试一次。', zhTW: '查看錯誤題目，再試一次。', es: 'Revisa tus errores e inténtalo de nuevo.' },
  correct:     { en: 'Correct', zh: '正确', zhTW: '正確', es: 'Correctas' },
  incorrect:   { en: 'Incorrect', zh: '错误', zhTW: '錯誤', es: 'Incorrectas' },
  time:        { en: 'Time', zh: '用时', zhTW: '用時', es: 'Tiempo' },
  byCategory:  { en: 'By Category', zh: '各分类得分', zhTW: '各分類得分', es: 'Por Categoría' },
  reviewBtn:   { en: 'Review Answers', zh: '查看答案', zhTW: '查看答案', es: 'Revisar Respuestas' },
  retryBtn:    { en: 'Try Again', zh: '再来一次', zhTW: '再來一次', es: 'Intentar de Nuevo' },
  homeBtn:     { en: 'Home', zh: '返回首页', zhTW: '返回首頁', es: 'Inicio' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

function fmtTime(ms) {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

export default function Results({ lang, score, elapsed, questions, answers, onReview, onRetry, onHome, categories }) {
  const pct = Math.round((score.correct / score.total) * 100)
  const passed = pct >= 70

  // Per-category breakdown
  const catStats = {}
  questions.forEach((q, i) => {
    if (!catStats[q.cat]) catStats[q.cat] = { correct: 0, total: 0 }
    catStats[q.cat].total++
    if (answers[i] === q.ans) catStats[q.cat].correct++
  })

  return (
    <main className="page fade-in">
      {/* Hero score */}
      <div className="result-hero">
        <div className={`result-score ${passed ? 'pass' : 'fail'}`}>{pct}%</div>
        <div className="result-verdict">{passed ? t('passed', lang) : t('failed', lang)}</div>
        <div className="result-meta">{passed ? t('passNote', lang) : t('failNote', lang)}</div>

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
          <div className="config-label" style={{ marginBottom: 4 }}>{t('byCategory', lang)}</div>
          {Object.entries(catStats).map(([cat, s]) => {
            const p = Math.round((s.correct / s.total) * 100)
            return (
              <div className="cat-row" key={cat}>
                <span className="cat-name">{categories[cat]?.[lang] || categories[cat]?.en || cat}</span>
                <div className="cat-bar-wrap">
                  <div className="cat-bar-fill" style={{
                    width: `${p}%`,
                    background: p >= 70 ? 'var(--correct)' : p >= 50 ? 'var(--warning)' : 'var(--incorrect)'
                  }} />
                </div>
                <span className="cat-score">{s.correct}/{s.total}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Action buttons */}
      <div className="action-btns" style={{ marginBottom: 12 }}>
        <button className="secondary-btn" onClick={onReview}>{t('reviewBtn', lang)}</button>
        <button className="primary-btn" onClick={onRetry}>{t('retryBtn', lang)}</button>
      </div>
      <button className="secondary-btn" style={{ width: '100%' }} onClick={onHome}>{t('homeBtn', lang)}</button>
    </main>
  )
}
