import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../state/slices/user.slice'
import Api from '../../utils/Api/Api'
import Account from '../../components/Account/Account'
import NotFound from '../NotFound/NotFound'

/**
 * Renders the user's profile page
 * @return {JSX.Element} The profile page
 */
function Profile() {
  const [editContent, setEditContent] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const user = useSelector((state) => state.user)
  const validToken = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // If user is not authenticated, redirect to sign in page after 7 seconds
    if (!validToken) {
      setTimeout(() => {
        navigate('/signin')
      }, 7000)
    } else {
      // Populate first and last name fields with user's info
      setFirstName(user.firstName)
      setLastName(user.lastName)
    }
  }, [user])

  /**
   * Submits updated user info to the API
   * @param {Object} e - The event object
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    await Api.setUserInfo(validToken, { firstName, lastName })
    dispatch(getUser({ firstName: firstName, lastName: lastName }))
    setEditContent(false)
  }

  if (validToken) {
    return (
      <main className='user main bg-dark'>
        <div className='header'>
          {editContent ? (
            <>
              <h1>Welcome back</h1>
              <form className='profil-form'>
                <div className='profil-inputs'>
                  <input
                    type='text'
                    name='firstName'
                    className='input-update'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <input
                    type='text'
                    name='lastName'
                    className='input-update'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className='profil-buttons'>
                  <button
                    className='button-update'
                    onClick={(e) => handleSubmit(e)}
                  >
                    Save
                  </button>
                  <button
                    className='button-update'
                    onClick={() => setEditContent(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {user.firstName} {user.lastName} !
              </h1>
              <button
                className='edit-button'
                onClick={() => setEditContent(true)}
              >
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <Account
          title='Argent Bank Checking (x8349)'
          amount='$2,082.79'
          description='Available Balance'
        />
        <Account
          title='Argent Bank Savings (x6712)'
          amount='$10,928.42'
          description='Available Balance'
        />
        <Account
          title='Argent Bank Credit Card (x8349)'
          amount='$184.30'
          description='Current Balance'
        />
      </main>
    )
  } else {
    return (
      <NotFound
        title='401'
        text=' Vous devez être connecté pour accéder à cette page. Vous
    serez automatiquement redirigé dans 7 secondes.'
      />
    )
  }
}

export default Profile
