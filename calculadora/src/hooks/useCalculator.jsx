// src/hooks/useCalculator.jsx
import { useState } from 'react'
import { formatResult, OPERATIONS } from '../utils/operations'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [acc, setAcc] = useState(null)
  const [op, setOp] = useState(null)
  const [overwrite, setOverwrite] = useState(false)

  const inputDigit = d => {
    setDisplay(prev => {
      if (overwrite || prev === '0') {
        return d
      }
      if (prev.length < 9) {
        return prev + d
      }
      return prev
    })
    setOverwrite(false)
  }

  const chooseOp = newOp => {
    const curr = parseFloat(display)
    if (acc == null) {
      setAcc(curr)
    } else if (op) {
      const result = OPERATIONS[op](acc, curr)
      setAcc(result)
      setDisplay(formatResult(String(result)))
    }
    setOp(newOp)
    setOverwrite(true)
  }

  const evaluate = () => {
    if (op == null || acc == null) return
    const curr = parseFloat(display)
    const result = OPERATIONS[op](acc, curr)
    setDisplay(formatResult(String(result)))
    setAcc(null)
    setOp(null)
    setOverwrite(true)
  }

  const clear = () => {
    setDisplay('0')
    setAcc(null)
    setOp(null)
    setOverwrite(false)
  }

  const toggleSign = () => {
    setDisplay(prev => {
      if (prev.startsWith('-')) {
        return prev.slice(1)
      }
      if (prev !== '0' && prev.length < 9) {
        return '-' + prev
      }
      return prev
    })
  }

  const inputDot = () => {
    setDisplay(prev => {
      if (overwrite) {
        setOverwrite(false)
        return '0.'
      }
      if (!prev.includes('.') && prev.length < 9) {
        return prev + '.'
      }
      return prev
    })
  }

  return {
    display,
    inputDigit,
    chooseOp,
    evaluate,
    clear,
    toggleSign,
    inputDot
  }
}
