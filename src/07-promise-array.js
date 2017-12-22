const fetch = require('node-fetch')
const sparkly = require('./sparkly')

async function fetchDollarRate (date, symbol) {
  const response = await fetch(`https://api.fixer.io/${date}?base=USD&symbols=${symbol}`)

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  return ratesResponse.rates[symbol]
}

async function main () {
  const ratePromises = []
  for (let i = 1; i < 10; ++i) {
    ratePromises.push(fetchDollarRate(`2017-12-0${i}`, 'ILS'))
  }

  const rates = []
  for (let i = 0; i < ratePromises.length; ++i) {
    rates.push((await ratePromises[i]) * 10000)
  }

  console.log(sparkly(rates))
}

main()
