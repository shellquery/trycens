import { useState, useCallback } from 'react'

const KEY = 'ca-dmv-wrong-bank'

function load() {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')) }
  catch { return new Set() }
}

function persist(set) {
  localStorage.setItem(KEY, JSON.stringify([...set]))
}

export function useWrongBank() {
  const [ids, setIds] = useState(load)

  // Called after every quiz: adds wrong IDs, removes newly-correct IDs
  const syncAfterQuiz = useCallback((questions, answers) => {
    setIds(prev => {
      const next = new Set(prev)
      questions.forEach((q, i) => {
        if (answers[i] === null) return           // skipped — leave unchanged
        if (answers[i] === q.ans) next.delete(q.id)
        else next.add(q.id)
      })
      persist(next)
      return next
    })
  }, [])

  // Called immediately when a single question is answered wrong
  const addOne = useCallback((id) => {
    setIds(prev => {
      if (prev.has(id)) return prev   // already there, no re-render needed
      const next = new Set(prev)
      next.add(id)
      persist(next)
      return next
    })
  }, [])

  const removeOne = useCallback((id) => {
    setIds(prev => {
      const next = new Set(prev)
      next.delete(id)
      persist(next)
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    const empty = new Set()
    persist(empty)
    setIds(empty)
  }, [])

  return { ids, addOne, syncAfterQuiz, removeOne, clearAll }
}
