import classNames from 'classnames'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export default function Button({ ...props }: ButtonProps) {
  return (
    <button {...props} className={classNames('btn disabled', props.className)}>
      {props.content}
    </button>
  )
}
