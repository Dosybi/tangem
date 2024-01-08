import classNames from 'classnames'

import type { AlertProps } from './Alert'
import Alert from './Alert'

interface HeaderProps {
  alert: AlertProps
  onClose?: () => void
  isVisible?: boolean
}

const Header = ({ alert, onClose, isVisible = true }: HeaderProps) => {
  return (
    <header className="relative">
      <div
        className={classNames(
          isVisible ? 'absolute bg-gradient-dark h-14 top-14 w-full' : 'hidden'
        )}
      >
        <Alert {...alert} onClose={onClose} />
      </div>
    </header>
  )
}

export default Header
