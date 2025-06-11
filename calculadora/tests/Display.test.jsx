/* global test */
import { render, screen } from '@testing-library/react'
import { Display } from '../src/components/Display.jsx'
import { expect } from 'vitest'
import '@testing-library/jest-dom'

test('muestra el valor en display', () =>{
  render(<Display value="123" />)
  expect(screen.getByText('123')).toBeInTheDocument()
})