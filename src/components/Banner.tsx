import Button from './primitives/Button'
import Icon from './primitives/Icon'
import Text from './primitives/Text'

interface BannerProps {
  title: string
  discount: string
  text: string
  image: string
  button: {
    label: string
    link: string
  }
  closeIcon: string
  onClose: () => void
}

const Banner = ({
  title,
  discount,
  text,
  image,
  button,
  closeIcon,
  onClose,
}: BannerProps) => {
  return (
    <div className="absolute w-[37.5rem] h-[21.8125rem] top-[41.6rem] right-9 rounded-2xl overflow-hidden md:right-4">
      <div className="relative">
        <img src={image} alt={title} className="absolute inset-0" />
        <div className="absolute right-8 text-center top-16">
          <Text text={title} className="text-white text-5xl mb-6" />
          <Text
            text={discount}
            className="text-gradient-golden text-[40px] mb-4"
          />
          <Text text={text} className="text-primary-gray mb-10" />
          <Button {...button} type="secondary" />
        </div>
        <button onClick={onClose}>
          <Icon
            name={closeIcon}
            className="absolute top-4 right-4 cursor-pointer"
          />
        </button>
      </div>
    </div>
  )
}

export default Banner
