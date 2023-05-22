
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});



// Add constructor to Student model
// class Student {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }


const Student = mongoose.model('Student', studentSchema);
// explanation is in the Readme.md file
// exporting the modules
module.exports = {Student}
