import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './NotFound.css'

export default function NotFound({ title, text }) {
  return (
    <div className='error'>
      <div className='error-content'>
        <p className='error-number'>{title ? title : '404'}</p>
        <p className='error-message'>
          {text ? text : "Oups! La page que vous demandez n'existe pas."}
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

NotFound.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}
