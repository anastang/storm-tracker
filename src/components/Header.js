import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/storm-advisory'


const Header = () => {
  return (
    <header className='header'>
      <h1><Icon icon={locationIcon} /> Storm Tracker (Powered by NASA)</h1>
    </header>
  )
}

export default Header
