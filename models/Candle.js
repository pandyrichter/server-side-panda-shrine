const mongoose = require("mongoose")

const candleSchema = mongoose.Schema({
  from: String,
  message: String,
  donation: String
})

candleSchema.methods.lightCandle = function() {
  const message = this.from
    ? `${this.from} wishes Panda a peacful infinity`
    : "Anonymous sends their best wishes"
  console.log(message)
}

module.exports = mongoose.model("Candle", candleSchema)
