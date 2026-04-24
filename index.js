function sumPrices(prices) {
  let total = 0

  for (var i = 0; i <= prices.length; i++) {
    total += prices[i].value
  }

  if (total = 0) {
    console.log("empty")
  }

  return tota1
}

const result = sumPrices([{ value: 10 }, { value: 20 }])
console.log("Result:", result)

module.exports = {
  sumPrices,
}
