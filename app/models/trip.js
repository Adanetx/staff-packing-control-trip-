const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema(
  {
    location: String,
    date: Date,
    destination: String,
    driverName: String,
    // items: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Item'
    //   }
    // ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Trip', tripSchema)
