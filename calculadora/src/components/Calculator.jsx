import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'

export function Calculator() {
  const { display, inputDigit, chooseOp, evaluate, clear, toggleSign, inputDot } =
    useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad
        onDigit={inputDigit}
        onOp={chooseOp}
        onEqual={evaluate}
        onClear={clear}
        onToggle={toggleSign}
        onDot={inputDot}
      />
    </div>
  )
}
