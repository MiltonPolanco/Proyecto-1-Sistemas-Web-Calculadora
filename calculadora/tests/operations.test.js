/* global test, expect, describe */
import { OPERATIONS, formatResult } from '../src/utils/operations'

describe('OPERATIONS object', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(OPERATIONS['+'](2, 3)).toBe(5)
  })

  test('subtraction: 5 - 2 = 3', () => {
    expect(OPERATIONS['-'](5, 2)).toBe(3)
  })

  test('multiplication: 4 × 6 = 24', () => {
    expect(OPERATIONS['×'](4, 6)).toBe(24)
  })

  test('division: 8 ÷ 2 = 4', () => {
    expect(OPERATIONS['÷'](8, 2)).toBe(4)
  })

  test('division by zero returns NaN', () => {
    expect(OPERATIONS['÷'](8, 0)).toBeNaN()
  })

  test('modulo: 7 % 4 = 3', () => {
    expect(OPERATIONS['%'](7, 4)).toBe(3)
  })
})

describe('formatResult helper', () => {
  test('allows up to 9 digits', () => {
    const nine = '123456789'
    expect(formatResult(nine)).toBe(nine)
  })

  test('rejects more than 9 characters', () => {
    expect(formatResult('1234567890')).toBe('ERROR')
  })

  test('rejects any string containing a "-"', () => {
    expect(formatResult('-5')).toBe('ERROR')
  })

  test('passes decimal strings of length ≤9', () => {
    expect(formatResult('123.456')).toBe('123.456')
  })

  test('counts the dot as one character', () => {
    // 9 chars including dot
    expect(formatResult('1234.5678')).toBe('1234.5678')
    // now 10 chars
    expect(formatResult('12345.6789')).toBe('ERROR')
  })
})
