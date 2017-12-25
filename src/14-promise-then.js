const fetch = require('node-fetch')

async function fetchDollarRate (date, base, symbol, value) {
  const response = await fetch(`https://api.fixer.io/${date}?base=${base}&symbols=${symbol}`)

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  return parseFloat(ratesResponse.rates[symbol], 10) * value
}

async function main () {
  const rate = await fetchDollarRate('2017-12-20', 'USD', 'ILS', 1)
    .then(rate => fetchDollarRate('2017-12-20', 'ILS', 'USD', rate))

  console.log(rate)
}

main()
