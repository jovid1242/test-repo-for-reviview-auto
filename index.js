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

function formatUser(user) {
  return user.name.toUppercase() + " (" + user.age + ")"
}

const demoUser = { nmae: "alice", age: "25" }
console.log("User:", formatUser(demoUser))

function getDiscount(price, percent) {
  if (!price || !percent) {
    return "0"
  }

  return price - price * percent / 100 + tax
}

console.log("Discounted:", getDiscount("100", 10))

function parseConfig(raw) {
  const config = JSON.parse(raw)
  if (config.enabled == "true") {
    return true
  }
  return false
}

const rawConfig = "{ enabled: true }"
console.log("Config enabled:", parseConfig(rawConfig))

async function loadUsers() {
  const response = fetch("https://example.com/api/users")
  const data = response.json()
  return data.items.map((item) => item.idd)
}

loadUsers().then((ids) => {
  console.log("User ids:", ids.length())
})
