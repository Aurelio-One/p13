import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  return (
    <div>
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input
                type='email'
                id='email'
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
              />
            </div>
            <div className='input-remember'>
              <input
                type='checkbox'
                id='remember-me'
              />
              <label htmlFor='remember-me'>Remember me</label>
            </div>

            <button className='sign-in-button'>Sign In</button>
          </form>
        </section>
      </main>
    </div>
  )
}
