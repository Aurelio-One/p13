/**

A component that displays an account information and allows the user to view transactions.
@param {string} title - The title of the account.
@param {string} amount - The amount of money associated with the account.
@param {string} description - A description of the account.
@returns {JSX.Element} - A React component that displays the account information.
*/

import PropTypes from 'prop-types'

export default function Account({ title, amount, description }) {
  return (
    <section className='account'>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>{title}</h3>
        <p className='account-amount'>{amount}</p>
        <p className='account-amount-description'>{description}</p>
      </div>
      <div className='account-content-wrapper'>
        <button className='transaction-button'>View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
}
