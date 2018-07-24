require("dotenv").config()

const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_TEST_PK)

const app = express()

// Start Database
const db = require("./db")
const Candle = require("./models/Candle")

const PORT = process.env.PORT || 3000

const options = {
  root: __dirname + "/public/",
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true
  }
}

// Replace following line in order to handle React files
// app.use(express.static("public"))
app.use('/', express.static(__dirname + '/dist'));
app.use(require("body-parser").urlencoded({ extended: false }))

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

  res.redirect('/candles');
});

app.get("/candles", (req, res) => {
  console.log('Querying database...');

  const query = Candle.find();

  query.exec((err, candles) => {
    if (err) console.log(err);
    res.send(`
    <a href="/">Back to home</a>
    <h1>Here is a list of candles!</h1>
    <p>${candles}</p>
    `);
  });
});

app.get("/donations", (req, res) => res.sendFile("donations.html", options))

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
