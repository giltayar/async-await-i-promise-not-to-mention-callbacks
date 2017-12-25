const fetch = require('node-fetch')

async function fetchDollarRate (date, symbol) {
  const response = await fetch(`https://api.fixer.io/${date}?base=USD&symbols=${symbol}`)

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  return ratesResponse.rates[symbol]
}

async function main () {
  const rate1 = await Promise.race([fetchDollarRate('2017-12-20', 'ILS'), delay(50)])
  const rate2 = await Promise.race([fetchDollarRate('2017-12-20', 'ILS'), delay(5000)])

  console.log(rate1, rate2)
}

async function delay (ms) {
  await new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

main()
