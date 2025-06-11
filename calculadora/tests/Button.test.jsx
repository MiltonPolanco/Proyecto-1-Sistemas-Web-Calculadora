/* global test */
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../src/components/Button.jsx'
import { vi, expect } from 'vitest'

test('click en boton 2', () => {
  const spy = vi.fn()
  render(<Button onClick={spy}>2</Button>)
  fireEvent.click(screen.getByText('2'))
  expect(spy).toHaveBeenCalledTimes(1)
})