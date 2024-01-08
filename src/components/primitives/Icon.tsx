import { FC } from 'react'

import IconsSVG from '../../assets/icons.svg'

interface IconProps {
  name: string
  className?: string
  width?: string
  height?: string
}

const Icon: FC<IconProps> = ({
  name,
  className = 'm-auto',
  width = '24',
  height = '24',
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="true"
    >
      <use href={`${IconsSVG}#${name}`}></use>
    </svg>
  )
}

export default Icon
