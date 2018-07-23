require("dotenv").config()

const mongoose = require("mongoose")
const Candle = require("./models/Candle")

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${
    process.env.DB_HOST
  }`
)

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => {
  console.log("connected to db!")
})
