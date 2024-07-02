import React, { MouseEvent } from 'react'


interface ButtonEvent {
    buttonClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonEvent) => {

  return (
    <div>
      <button onClick={props.buttonClick}>Click Me</button>
    </div>
  )
}

export default Button
