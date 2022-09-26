//MONGO_URI= mongodb+srv://rania:123123@@cluster0.ngadc24.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
