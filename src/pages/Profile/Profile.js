import Account from '../../components/Account/Account'

export default function Profile() {
  return (
    <div>
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            <form onSubmit>
              <div className='username-inputs'>
                <div>
                  <input
                    type='text'
                    id='username'
                    defaultValue='Tony'
                    className='input-update'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    id='lastname'
                    defaultValue='Jarvis'
                    className='input-update'
                  />
                </div>
              </div>
              <div className='username-buttons'>
                <button
                  type='submit'
                  className='button-update'
                >
                  Save
                </button>
                <button
                  type='button'
                  className='button-update'
                  onClick
                >
                  Cancel
                </button>
              </div>
            </form>
          </h1>
          <button
            className='edit-button'
            onClick
          >
            Edit Name
          </button>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <Account
          title='Argent Bank Checking (x8349)'
          amountString='2082.79'
          description='Available Balance'
        />
        <Account
          title='Argent Bank Savings (x6712)'
          amountString='10928.42'
          description='Available Balance'
        />
        <Account
          title='Argent Bank Credit Card (x8349)'
          amountString='184.30'
          description='Current Balance'
        />
      </main>
    </div>
  )
}
