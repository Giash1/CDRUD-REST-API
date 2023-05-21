
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Add constructor to Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };



// exporting the modules
module.exports = {Student}
