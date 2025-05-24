import { Button } from './button'

const DIGITS = ['7','8','9','4','5','6','1','2','3','0','.']
const OPS = ['+','-','×','÷','%']

export function Keypad({ onDigit, onOp, onEqual, onClear, onToggle, onDot }) {
  return (
    <div className="keypad">
      <Button className="span-2" onClick={onClear}>C</Button>
      <Button onClick={onToggle}>+/-</Button>
      <Button onClick={() => onOp('%')}>%</Button>
      {DIGITS.map(d =>
        <Button key={d} onClick={() => d === '.' ? onDot() : onDigit(d)}>
          {d}
        </Button>
      )}
      {OPS.map(o =>
        <Button key={o} onClick={() => onOp(o)}>{o}</Button>
      )}
      <Button className="span-2" onClick={onEqual}>=</Button>
    </div>
  )
}
