const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: { 
    type: String,
    required: true,
    unique: true 
  },
  salt: { 
    type: String,
    required: true
  },
  phoneNumber: { 
    type: Number,
    required: true
  },
  username: { 
    type: String,
    required: true,
    unique: true 
  },
  provider: { 
    type: String,
    required: true
  },
  program: { 
    type: String,
    required: true
  }
})

const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass