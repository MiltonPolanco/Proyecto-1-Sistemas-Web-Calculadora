/* global test */
import { render, screen, fireEvent } from '@testing-library/react'
import { Calculator } from '../src/components/Calculator.jsx'
import { expect } from 'vitest'
import '@testing-library/jest-dom'

test('suma basica',() => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('3'))
  fireEvent.click(screen.getByText('='))
  expect(document.querySelector('.display')).toHaveTextContent('5')
})