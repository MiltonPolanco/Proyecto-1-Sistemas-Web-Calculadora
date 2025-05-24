import React from 'react'
import { Keypad } from '../components/Keypad'

export default {
  title: 'Components/Keypad',
  component: Keypad,
  argTypes: {
    onDigit: { action: 'digit pressed' },
    onOp:    { action: 'operation pressed' },
    onEqual: { action: 'equal pressed' },
    onClear: { action: 'clear pressed' },
    onToggle:{ action: 'toggle pressed' },
    onDot:   { action: 'dot pressed' },
  },
}

const Template = args => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {
  onDigit: () => {},
  onOp: () => {},
  onEqual: () => {},
  onClear: () => {},
  onToggle: () => {},
  onDot: () => {},
}
