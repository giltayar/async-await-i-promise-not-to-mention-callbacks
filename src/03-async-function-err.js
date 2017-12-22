const fetch = require('node-fetch')

async function fetchDollarRate (date, symbol) {
  const response = await fetch(`https://api.fixer.io-error/${date}?base=USD&symbols=${symbol}`)

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  return ratesResponse.rates[symbol]
}

async function main () {
  try {
    console.log(await fetchDollarRate('2017-12-22', 'ILS'))
  } catch (err) {
    console.error('Error, aborting...', err.stack || err)
    process.exit(1)
  }
}

main()
