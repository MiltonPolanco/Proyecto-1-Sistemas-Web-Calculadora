import { Button } from './Button'
const L=[['C','+/-','%','÷'],['7','8','9','×'],['4','5','6','-'],['1','2','3','+'],['0','.','=',null]]
export function Keypad({onDigit,onOp,onEqual,onClear,onToggle,onDot}){return(
  <div className="keypad">
    {L.flat().map((c,i)=>
      c==null?<div key={i}/>:
      <Button key={i}
        className={c==='C'?'clear span-2':c==='='?'equal span-2':/[+\-×÷%]/.test(c)?'operation':''}
        onClick={c==='C'?onClear:c==='+/-'?onToggle:c==='.'?onDot:c==='='?onEqual:/[+\-×÷%]/.test(c)?()=>onOp(c):()=>onDigit(c)}
      >{c}</Button>
    )}
  </div>
)}
