/* global test */
import { render, screen, fireEvent } from '@testing-library/react'
import { Keypad } from '../src/components/Keypad.jsx'
import { vi, expect } from 'vitest'

test('click en numero 5', () => {
  const spy = vi.fn()
  render(<Keypad onDigit={spy} />)
  fireEvent.click(screen.getByText('5'))
  expect(spy).toHaveBeenCalledWith('5')
})

test('click en operacion +', () => {
  const spy = vi.fn()
  render(<Keypad onOp={spy} />)
  fireEvent.click(screen.getByText('+'))
  expect(spy).toHaveBeenCalledWith('+')
})

test('click en clear', () => {
  const spy = vi.fn()
  render(<Keypad onClear={spy} />)
  fireEvent.click(screen.getByText('C'))
  expect(spy).toHaveBeenCalled()
})