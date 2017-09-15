const mongoose = require('mongoose')
const Schema = mongoose.Schema

const complianceSchema = new Schema({
  _id: { 
    type: Schema.Types.ObjectId,
    required: true,
    unique: true 
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  wellId: Number,
  state: Boolean,
  timeTaken: Date,
  wellTime: Date
})

const ModelClass = mongoose.model('Compliance', complianceSchema, "Compliances")

module.exports = ModelClass