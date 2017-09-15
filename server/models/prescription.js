const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prescriptionSchema = new Schema({
  _id: { 
    type: Schema.Types.ObjectId,
    required: true,
    unique: true 
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  dosage: String,
  startDate: Date,
  endDate: Date,
  inTray: Boolean,
  numberofpills: Number,
  needsRenewal: Boolean,
  threshold: Number,
  scheduleText: String,
  schedule: [Number],
  notes: String,
  totalPills: Number,
  name: String
})

const ModelClass = mongoose.model('Prescription', prescriptionSchema, 'Prescriptions')

module.exports = ModelClass