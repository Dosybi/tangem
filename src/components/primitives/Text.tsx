import { ElementType, HTMLAttributes, FC } from 'react'
import classNames from 'classnames'

interface TextProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
  text: string
  className?: string
  [key: string]: any
}

const Text: FC<TextProps> = ({
  as: Tag = 'p',
  text,
  className,
  ...attributes
}: TextProps) => {
  const processText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\/\/.*?\/\/)/).filter(Boolean)
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <span key={index} className="font-bold">
                {part.slice(2, -2)}
              </span>
            )
          } else if (part.startsWith('//') && part.endsWith('//')) {
            return (
              <span key={index} className="text-primary-yellow font-bold">
                {part.slice(2, -2)}
              </span>
            )
          } else {
            return <span key={index}>{part}</span>
          }
        })}
      </>
    )
  }

  return (
    <Tag className={classNames(className, '')} {...attributes}>
      {processText(text)}
    </Tag>
  )
}

export default Text
