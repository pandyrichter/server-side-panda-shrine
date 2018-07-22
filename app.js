require("dotenv").config()

const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_TEST_PK)

// Start Database
const db = require("./db")
const Candle = require("./models/Candle")

const app = express()

const PORT = process.env.PORT || 3000

const options = {
  root: __dirname + "/public/",
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true
  }
}

app.use(require("body-parser").urlencoded({ extended: false }))
app.use(express.static("public"))

// app.get("/", (req, res) => res.send("Hello world"));

app.get("/donations", (req, res) => res.sendFile("donations.html", options))

app.post("/candle", (req, res) => {
  console.log(req.body)

  const candledonor = new Candle({
    from: req.body.from,
    message: req.body.message,
    donation: req.body.donation
  })

  candledonor.save((err, test) => {
    if (err) return console.error(err)
    test.lightCandle()
  })

  res.sendFile("candle.html", options)
})

app.post("/thankyou", (req, res) => {
  const token = req.body.stripeToken

  stripe.charges.create({
    amount: 200,
    currency: "usd",
    description: "Example charge",
    source: token
  })

  res.sendFile("thankyou.html", options)
})

app.use((req, res, next) => {
  res.status(404).send("Sorry, cannot find that file!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke! See error message in console")
})

app.listen(PORT, () => console.log(`App loading on port ${PORT}`))
