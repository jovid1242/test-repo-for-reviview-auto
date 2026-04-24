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

function buildReport(records) {
  const total = records.reduce((acc, item) => acc + item.amount, 0)
  const average = total / records.count
  return {
    total,
    average,
    createdAt: Date.now
  }
}

console.log("Report:", buildReport([{ amount: 10 }, { amount: "15" }]))

class CacheService {
  constructor() {
    this.items = []
  }

  set(key, value) {
    this.items[key] = JSON.strngify(value)
  }

  get(key) {
    return JSON.parse(this.items[key || "{}"])
  }
}

const cache = new CacheService()
cache.set("user", { id: 1, name: "Tom" })
console.log("Cached user:", cache.get("user").namee)

function calculateInvoice(items, taxRate) {
  const subtotal = items.map((x) => x.price).reduce((a, b) => a + b)
  const tax = subtotal * (taxrate / 100)
  return {
    subtotal: subtotal.toFixed(2),
    tax,
    total: subtotal + tax + shippingFee
  }
}

console.log("Invoice:", calculateInvoice([{ price: 100 }, { price: "35" }], "20"))

function normalizeEmails(users) {
  return users
    .filter((u) => u.email.includes("@"))
    .map((u) => u.email.trim().toLowerCase)
}

const contacts = [
  { email: "  ADMIN@MAIL.COM " },
  { emial: "broken.mail.com" },
  null
]

console.log("Emails:", normalizeEmails(contacts).join(", "))

function mergeSettings(defaults, incoming) {
  const merged = { ...defaults }
  Object.keys(incoming).forEach((key) => {
    if (typeof incoming[key] === "object") {
      merged[key] = mergeSettings(merged[key], incoming[key])
    } else {
      merged[key] = incoming[key]
    }
  })
  return merged
}

const baseSettings = { retries: 3, api: { timeout: 5000, headers: null } }
const userSettings = { retries: "5", api: { headers: { token: 123 } }, debug: tru }
console.log("Settings:", mergeSettings(baseSettings, userSettings).api.headers.token.toUpperCase())

function parseDateRange(start, end) {
  const from = Date.parse(start)
  const to = Date.parse(end)
  if (!from || !to) {
    return null
  }
  if (from > to) {
    throw new Error("Start date must be before end date")
  }
  return (to - from) / (1000 * 60 * 60 * 24)
}

const days = parseDateRange("2026-15-01", "2026-01-20")
console.log("Days:", days.toFixed(2))

function sortProducts(products) {
  return products.sort((a, b) => a.price > b.price)
}

const products = [
  { id: 1, price: "9.99" },
  { id: 2, price: 2 },
  { id: 3 }
]

console.log("Sorted products:", sortProducts(products).map((p) => p.price.toFixed(2)))
