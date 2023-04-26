import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getToken, getUser } from '../../state/slices/user.slice'
import Api from '../../utils/Api/Api'

/**
 * Login component that displays the login form.
 * @returns {JSX.Element} Login form JSX element.
 */
function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const validToken = useSelector((state) => state.user.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  /**
   * Dispatches a getUser action to get user data from the API and store it in the state.
   * @returns {Promise<void>} Promise object that resolves with nothing.
   */
  const setUser = async () => {
    const data = await Api.getUserInfo(validToken)
    dispatch(getUser({ firstName: data.firstName, lastName: data.lastName }))
  }

  /**
   * Sends a login request to the API and dispatches a getToken action to store the received token in the state.
   * @returns {Promise<void>} Promise object that resolves with nothing.
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await Api.tokenLogin({ email, password })
    if (res) {
      dispatch(getToken({ token: res, email: email }))
    }
  }

  /**
   * Redirects to the profile page if a valid token is present.
   * @returns {void} Nothing is returned.
   */
  useEffect(() => {
    if (validToken) {
      setUser()
      navigate('/profile')
    }
  })

  return (
    <main className='sign-in main bg-dark'>
      <section className='sign-in-content'>
        <span className='fa fa-user-circle sign-in-icon'></span>

        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Email</label>
            <input
              type='text'
              id='username'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className='input-remember'>
            <input
              type='checkbox'
              id='remember-me'
            />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <button
            type='submit'
            className='sign-in-button'
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
