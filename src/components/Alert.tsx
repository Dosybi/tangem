import Text from './primitives/Text'
import Button from './primitives/Button'
import Icon from './primitives/Icon'

export interface AlertProps {
  date: string
  discount: string
  text: string
  image: string
  button: {
    label: string
    link: string
  }
  closeIcon: string
  onClose?: () => void
}

const Alert = ({
  date,
  discount,
  text,
  image,
  button,
  closeIcon,
  onClose,
}: AlertProps) => {
  return (
    <div className="flex justify-between items-center">
      <img src={image} alt={text} />
      <div className="flex justify-center gap-7 text-white items-center py-4">
        <div className="flex gap-0.5">
          <Text text={date} />
        </div>
        <Text text={discount} className="text-primary-yellow font-bold" />
        <Text text={text} />
      </div>
      <div className="mr-5 flex gap-3.5 items-center">
        <Button label={button.label} />
        <button onClick={onClose}>
          <Icon name={closeIcon} className="cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

export default Alert
