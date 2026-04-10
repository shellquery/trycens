import { useState } from 'react'

const COUNT_OPTIONS = [10, 20, 50, 100, 'all']

const UI = {
  subtitle:    { en: 'California DMV · 500 Questions · 4 Languages', zh: '加州驾照考试 · 500题 · 四语切换', zhTW: '加州駕照考試 · 500題 · 四語切換', es: 'Examen DMV California · 500 preguntas · 4 idiomas' },
  questionsLabel: { en: 'Questions per session', zh: '每次练习题数', zhTW: '每次練習題數', es: 'Preguntas por sesión' },
  categoryLabel:  { en: 'Category', zh: '题目分类', zhTW: '題目分類', es: 'Categoría' },
  startBtn:    { en: 'Start Practice Test', zh: '开始练习', zhTW: '開始練習', es: 'Comenzar Práctica' },
  all:         { en: 'All Categories', zh: '全部分类', zhTW: '全部分類', es: 'Todas las categorías' },
  allCount:    { en: 'All', zh: '全部', zhTW: '全部', es: 'Todo' },
  totalQ:      { en: 'Total Questions', zh: '题目总数', zhTW: '題目總數', es: 'Total de Preguntas' },
  cats:        { en: 'Categories', zh: '题目分类', zhTW: '題目分類', es: 'Categorías' },
  langs:       { en: 'Languages', zh: '支持语言', zhTW: '支持語言', es: 'Idiomas' },
}

function t(key, lang) { return UI[key]?.[lang] || UI[key]?.en || key }

export default function Home({ lang, onStart, totalQuestions, categories }) {
  const [count, setCount]       = useState(20)
  const [category, setCategory] = useState('all')

  const catKeys = ['all', ...Object.keys(categories)]

  return (
    <main className="page fade-in">
      {/* Hero */}
      <div className="home-hero">
        <div className="home-badge">🚗 CA DMV</div>
        <h1 className="home-title">
          {lang === 'zh' ? '加州驾考宝典' :
           lang === 'zhTW' ? '加州駕考寶典' :
           lang === 'es' ? 'Guía de Examen DMV' :
           'CA DMV Study Guide'}
        </h1>
        <p className="home-subtitle">{t('subtitle', lang)}</p>
      </div>

      {/* Stats */}
      <div className="stats-row" style={{ marginBottom: 20 }}>
        <div className="stat-pill">
          <div className="stat-number">{totalQuestions}</div>
          <div className="stat-label">{t('totalQ', lang)}</div>
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

      {/* Question count */}
      <div className="config-card">
        <div className="config-label">{t('questionsLabel', lang)}</div>
        <div className="chip-group">
          {COUNT_OPTIONS.map(c => (
            <button
              key={c}
              className={`chip${count === c ? ' active' : ''}`}
              onClick={() => setCount(c)}
            >
              {c === 'all' ? t('allCount', lang) : c}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="config-card">
        <div className="config-label">{t('categoryLabel', lang)}</div>
        <div className="chip-group">
          {catKeys.map(k => (
            <button
              key={k}
              className={`chip${category === k ? ' active' : ''}`}
              onClick={() => setCategory(k)}
            >
              {k === 'all' ? t('all', lang) : (categories[k]?.[lang] || categories[k]?.en)}
            </button>
          ))}
        </div>
      </div>

      <button
        className="start-btn"
        onClick={() => onStart({ count: count === 'all' ? totalQuestions : count, category })}
      >
        {t('startBtn', lang)} →
      </button>
    </main>
  )
}
