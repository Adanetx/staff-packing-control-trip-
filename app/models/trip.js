const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema(
  {
    date: Date,
    driverName: String,
    location: String,
    destination: String,

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
