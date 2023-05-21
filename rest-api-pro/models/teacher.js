
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  subject: String,
});

// Add constructor to Teacher model
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Teacher };
