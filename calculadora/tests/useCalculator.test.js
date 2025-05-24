/* global test, expect, describe*/
import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../src/hooks/useCalculator'

describe('Advanced useCalculator scenarios', () => {
  test('decimal input and concatenation', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDot() })
    expect(result.current.display).toBe('0.')      // comienza con 0.
    act(() => { result.current.inputDigit('1') })
    act(() => { result.current.inputDigit('2') })
    expect(result.current.display).toBe('0.12')    // construye correctamente
  })

  test('modulo operation: 7 % 4 = 3', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('7') })
    act(() => { result.current.chooseOp('%') })
    act(() => { result.current.inputDigit('4') })
    act(() => { result.current.evaluate() })
    expect(result.current.display).toBe('3')
  })

  test('toggle sign (+/-)', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('5') })
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('-5')     // convierte a negativo
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('5')      // vuelve a positivo
  })

  test('overflow after addition: shows ERROR', () => {
    const { result } = renderHook(() => useCalculator())
    // ingresa 999999999
    act(() => {
      '999999999'.split('').forEach(d => result.current.inputDigit(d))
    })
    expect(result.current.display).toBe('999999999')
    act(() => { result.current.chooseOp('+') })
    act(() => { result.current.inputDigit('1') })
    act(() => { result.current.evaluate() })
    expect(result.current.display).toBe('ERROR')  // supera el máximo
  })

  test('chained operations: 2 + 3 × 4 = 20', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('2') })
    act(() => { result.current.chooseOp('+') })
    act(() => { result.current.inputDigit('3') })
    // al elegir ×, primero calcula 2+3
    act(() => { result.current.chooseOp('×') })
    expect(result.current.display).toBe('5')
    act(() => { result.current.inputDigit('4') })
    act(() => { result.current.evaluate() })
    expect(result.current.display).toBe('20')
  })
})
