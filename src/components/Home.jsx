import { useState } from 'react'
import { questions } from '../data/questions.js'

const COUNT_OPTIONS = [10, 20, 50, 100, 'all']

// Icons for each category
export const CAT_ICONS = {
  signs:      '🚦',
  laws:       '📋',
  rightofway: '↔️',
  speed:      '⚡',
  dui:        '🍺',
  parking:    '🅿️',
  highway:    '🛣️',
  safety:     '🛡️',
}

const UI = {
  sub:       { en: '500 questions · 4 languages · Day & Night mode', zh: '500题精选 · 四语切换 · 昼夜模式', zhTW: '500題精選 · 四語切換 · 晝夜模式', es: '500 preguntas · 4 idiomas · Modo día y noche' },
  perSess:   { en: 'Questions per session', zh: '每次题数', zhTW: '每次題數', es: 'Preguntas por sesión' },
  catLabel:  { en: 'Category', zh: '题目分类', zhTW: '題目分類', es: 'Categoría' },
  startBtn:  { en: 'Start Practice Test', zh: '开始练习 →', zhTW: '開始練習 →', es: 'Comenzar →' },
  allCats:   { en: 'All', zh: '全部', zhTW: '全部', es: 'Todas' },
  allCount:  { en: 'All', zh: '全部', zhTW: '全部', es: 'Todo' },
  qTotal:    { en: 'Questions', zh: '题目', zhTW: '題目', es: 'Preguntas' },
  cats:      { en: 'Categories', zh: '分类', zhTW: '分類', es: 'Categorías' },
  langs:     { en: 'Languages', zh: '语言', zhTW: '語言', es: 'Idiomas' },
  tip:       { en: 'Tip: use keys 1–4 to answer and Enter to advance', zh: '提示：按1–4选答案，按回车前进', zhTW: '提示：按1–4選答案，按回車前進', es: 'Consejo: teclas 1–4 para responder, Enter para avanzar' },
  wrongBank: { en: 'Wrong Question Bank', zh: '错题集', zhTW: '錯題集', es: 'Banco de Errores' },
  wrongDesc: { en: 'Practice questions you got wrong', zh: '专项训练你的错题', zhTW: '專項訓練你的錯題', es: 'Practica tus respuestas incorrectas' },
  wrongEmpty:{ en: 'No wrong questions yet', zh: '暂无错题', zhTW: '暫無錯題', es: 'Sin errores todavía' },
}
function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

// Count questions per category
const catCounts = questions.reduce((acc, q) => {
  acc[q.cat] = (acc[q.cat] || 0) + 1
  return acc
}, {})

export default function Home({ lang, onStart, onOpenWrongBank, totalQuestions, categories, wrongCount }) {
  const [count, setCount]       = useState(20)
  const [category, setCategory] = useState('all')

  const catKeys = ['all', ...Object.keys(categories)]
  const effectiveCount = category === 'all' ? totalQuestions : (catCounts[category] || 0)
  const actualCount    = count === 'all' ? effectiveCount : Math.min(count, effectiveCount)

  return (
    <main className="page fade-in">
      {/* Hero */}
      <div className="home-hero">
        <div className="home-badge">CA DMV</div>
        <h1 className="home-title">
          {lang === 'zh' ? '加州驾考宝典' :
           lang === 'zhTW' ? '加州駕考寶典' :
           lang === 'es'   ? 'Guía DMV California' :
                             'CA DMV Study Guide'}
        </h1>
        <p className="home-subtitle">{t('sub', lang)}</p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-pill">
          <div className="stat-number">{totalQuestions}</div>
          <div className="stat-label">{t('qTotal', lang)}</div>
        </div>
        <div className="stat-pill">
          <div className="stat-number">{Object.keys(categories).length}</div>
          <div className="stat-label">{t('cats', lang)}</div>
        </div>
        <div className="stat-pill">
          <div className="stat-number">4</div>
          <div className="stat-label">{t('langs', lang)}</div>
        </div>
      </div>

      {/* Count picker */}
      <div className="config-card">
        <div className="config-label">{t('perSess', lang)}</div>
        <div className="chip-group">
          {COUNT_OPTIONS.map(c => (
            <button key={c} className={`chip${count === c ? ' active' : ''}`} onClick={() => setCount(c)}>
              {c === 'all' ? t('allCount', lang) : c}
            </button>
          ))}
        </div>
      </div>

      {/* Category picker */}
      <div className="config-card">
        <div className="config-label">{t('catLabel', lang)}</div>
        <div className="chip-group">
          {catKeys.map(k => {
            const cnt   = k === 'all' ? totalQuestions : (catCounts[k] || 0)
            const label = k === 'all' ? t('allCats', lang) : (categories[k]?.[lang] || categories[k]?.en)
            const icon  = k === 'all' ? '📚' : (CAT_ICONS[k] || '')
            return (
              <button key={k} className={`chip${category === k ? ' active' : ''}`} onClick={() => setCategory(k)}>
                <span>{icon}</span>
                {label}
                <span className="chip-count">{cnt}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Start */}
      <button className="start-btn" onClick={() => onStart({ count: count === 'all' ? effectiveCount : count, category })}>
        {t('startBtn', lang)}
        {actualCount < (count === 'all' ? effectiveCount : count) && (
          <span style={{ fontSize: 13, opacity: .75, marginLeft: 6 }}>({actualCount})</span>
        )}
      </button>

      {/* Wrong Bank entry */}
      <button className="wrong-bank-card" onClick={onOpenWrongBank}>
        <div className="wb-card-left">
          <span className="wb-card-icon">📕</span>
          <div>
            <div className="wb-card-title">{t('wrongBank', lang)}</div>
            <div className="wb-card-desc">{t('wrongDesc', lang)}</div>
          </div>
        </div>
        <div className={`wb-card-badge${wrongCount === 0 ? ' empty' : ''}`}>
          {wrongCount === 0
            ? (lang === 'zh' ? '暂无' : lang === 'zhTW' ? '暫無' : lang === 'es' ? '–' : '–')
            : wrongCount}
        </div>
      </button>

      <p className="home-tip">{t('tip', lang)}</p>
    </main>
  )
}
