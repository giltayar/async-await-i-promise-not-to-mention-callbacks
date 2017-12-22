const fetch = require('node-fetch')
const sparkly = require('./sparkly')

async function fetchDollarRate (date, symbol) {
  const response = await fetch(`https://api.fixer.io/${date}?base=USD&symbols=${symbol}`)

  if (!response.ok) throw new Error('failed request')

  const ratesResponse = await response.json()

  return ratesResponse.rates[symbol]
}

async function main () {
  console.log(sparkly(await Promise.all(range(1, 10).map(i => fetchDollarRate(`2017-12-0${i}`, 'ILS')))))
}

main()

function range (from, almostTo) {
  const ret = []
  for (let i = from; i < almostTo; ++i) {
    ret.push(i)
  }

  return ret
}
