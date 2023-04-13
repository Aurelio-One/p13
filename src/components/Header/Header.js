import { Link } from 'react-router-dom'
import Logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <nav className='main-nav'>
      <Link
        className='main-nav-logo'
        to='/'
      >
        <img
          className='main-nav-logo-image'
          src={Logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        <Link
          className='main-nav-item'
          to='/profile'
        >
          <FontAwesomeIcon icon={faCircleUser} />
          Tony
        </Link>
        <Link
          className='main-nav-item'
          onClick
          to='/login'
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sign Out
        </Link>
        <Link
          className='main-nav-item'
          to='/login'
        >
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  )
}
