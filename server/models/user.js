const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  _id: { 
    type: Schema.Types.ObjectId,
    required: true,
    unique: true 
  },
  username: { 
    type: String,
    required: true,
    unique: true 
  },
  salt: String,
  phoneNumber: Number,
  provider: String,
  program: String,
  acuity: String,
  doctor: String,
  insurance: String,
  dateofbirth: String,
  deviceId: String,
  pharmacyType: String,
  failedOutreach: Boolean,
  activeDate: Date,
  active: Boolean,
  threedayperc: Number,
  isAlarmsEnable: Boolean,
  isCall: Boolean,
  isEmail: Boolean,
  isText: Boolean,
  gracePeriod: Number,
  compliance: Number,
  futureReminderTime: Number,
  created: Date,
  timeString: String,
  timezone: String,
  password: String,
  compliancePerc: Number,
  email: String,
  lastName: String,
  firstName: String,
  riskscore: Number,
  mostMissed: Number,
  weektoweek: Number,
  streak: Number
})

const ModelClass = mongoose.model('User', userSchema, "Users")

module.exports = ModelClass