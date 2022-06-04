const displayCurrency = (amount, currency) => {
  const a = amount > 1 ? amount : 0
  const c = currency !== undefined && currency.length > 1 ? currency : 'USD'

  return (a / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: c,
  })
}

export default displayCurrency
