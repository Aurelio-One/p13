/**
The NotFound component renders a 404 error page with an optional title and text message.
@param {Object} props - The props object containing optional 'title' and 'text' properties.
@param {string} props.title - The optional title of the error page.
@param {string} props.text - The optional text message of the error page.
@returns {JSX.Element} - A React JSX Element that renders a 404 error page.
*/

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
