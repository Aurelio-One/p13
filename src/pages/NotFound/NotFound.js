import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='error'>
      <div className='error-content'>
        <p className='error-number'>404</p>
        <p className='error-message'>
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link
        to='/'
        className='back-link'
      >
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}