import React from 'react'
import { Display } from '../components/Display'

export default {
  title: 'Components/Display',
  component: Display,
}

const Template = args => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '0',
}

export const LongNumber = Template.bind({})
LongNumber.args = {
  value: '123456789',
}

export const ErrorState = Template.bind({})
ErrorState.args = {
  value: 'ERROR',
}
