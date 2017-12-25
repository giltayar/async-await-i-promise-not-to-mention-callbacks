const fetch = require('node-fetch')

async function main () {
  const response = fetch('https://api.fixer.io/2017-12-20?base=USD&symbols=ILS')

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  console.log(ratesResponse.rates.ILS)
}

main().catch(err => console.error(err.stack || err))
