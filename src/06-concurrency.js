const fetch = require('node-fetch')

async function fetchDollarRate (date, symbol) {
  const response = await fetch(`https://api.fixer.io/${date}?base=USD&symbols=${symbol}`)

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  return ratesResponse.rates[symbol]
}

async function main () {
  const ilsRatePromise = fetchDollarRate('2017-12-22', 'ILS')
  const eurRatePromise = fetchDollarRate('2017-12-22', 'EUR')

  const ilsRate = await ilsRatePromise
  const eurRate = await eurRatePromise

  console.log(ilsRate, eurRate)
}

main()
