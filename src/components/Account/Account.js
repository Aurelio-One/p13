export default function Account({ title, amountString, description }) {
  const amount = parseFloat(amountString)
  return (
    <section className='account'>
      <div>
        <h3 className='account-title'> {title} </h3>
        <p className='account-amount'>${amount} </p>
        <p className='account-amount-description'> {description} </p>
      </div>
      <div className='cta'>
        <button className='transaction-button'> View transactions </button>
      </div>
    </section>
  )
}
