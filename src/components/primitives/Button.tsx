import classNames from 'classnames'
import { FC } from 'react'

interface ButtonProps {
  label: string
  type?: 'primary' | 'secondary'
  className?: string
  [key: string]: any
}

const Button: FC<ButtonProps> = ({
  label,
  type = 'primary',
  className,
  ...attributes
}) => {
  return (
    <button
      className={classNames(
        'flex justify-center items-center',
        className,
        type === 'primary'
          ? 'py-2.5 px-3 bg-white rounded-[6.25rem] font-medium leading-normal w-28 h-9 text-shadow-custom'
          : 'py-3 px-6 bg-white bg-opacity-10 text-white rounded-2xl'
      )}
      {...attributes}
    >
      {label}
    </button>
  )
}

export default Button
