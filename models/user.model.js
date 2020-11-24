const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: { type: String, unique: true },
    name: String,
    password: String,
    role: {
      type: String,
      enum: ['IRONHACK-RECRUITER', 'BUSINESS-RECRUITER', 'Student'],
      default: 'BUSINESS-RECRUITER',
    }

  }, { timestamps: true })

module.exports = mongoose.model('User', userSchema)