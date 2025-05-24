export const OPERATIONS = {
  '+': (a,b) => a + b,
  '-': (a,b) => a - b,
  '×': (a,b) => a * b,
  '÷': (a,b) => {
    if (b === 0) return NaN
    return a / b
  },
  '%': (a,b) => a % b
}

// asegura límites y errores
export function formatResult(numStr) {
  if (numStr.includes('-')) return 'ERROR'
  if (numStr.length > 9) return 'ERROR'
  return numStr
}
