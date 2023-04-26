/**
Renders the footer component for the application
@returns {JSX.Element} Footer component
*/

export default function Footer() {
  return (
    <div>
      <footer className='footer'>
        <p className='footer-text'>
          Copyright {new Date().getFullYear()} Argent Bank
        </p>
      </footer>
    </div>
  )
}
