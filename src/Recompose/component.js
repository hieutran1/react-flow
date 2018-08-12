import React from 'react'
import {withMyActionHandlers} from './container.js'

type Props = {
  onClick: () => void,
}

export default function MyComponent (props: Props) {
  return (
    <button onClick={props.onClick}>Click me!</button>
  )
}