import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../state/slices/user.slice'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [connected, setConnected] = useState(false)
  const { firstName, isConnected } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDisconnect = () => {
    dispatch(logOut())
  }

  useEffect(() => {
    setConnected(isConnected)
  }, [isConnected])

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
        {connected ? (
          <>
            <Link
              className='main-nav-item'
              to='/profile'
            >
              <FontAwesomeIcon icon={faCircleUser} />
              {firstName}
            </Link>
            <Link
              className='main-nav-item'
              onClick={() => handleDisconnect()}
              to={'/'}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          </>
        ) : (
          <Link
            className='main-nav-item'
            to='/login'
          >
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
