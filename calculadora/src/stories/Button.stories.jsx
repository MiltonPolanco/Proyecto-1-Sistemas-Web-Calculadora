import React from 'react'
import { Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = args => <Button {...args} />

export const Digit = Template.bind({})
Digit.args = {
  children: '7',
  className: '',
}

export const Operation = Template.bind({})
Operation.args = {
  children: '+',
  className: 'operation',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'C',
  className: 'span-2 clear',
}
