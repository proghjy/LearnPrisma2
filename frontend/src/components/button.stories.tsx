import React from 'react'
import Button from './button'

export default {
  title: 'components|Button',
  component: Button
}

export const button = () => {
  return <Button>BUTTON</Button>
}

button.story = {
  name: 'Default'
}

export const primaryButton = () => {
  return <Button>PRIMARY</Button>
}