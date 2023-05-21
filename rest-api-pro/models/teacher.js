let mongoose = require('mongoose');



// Teacher Schema
const Teacher = mongoose.model('Teacher', {
    // declaring the fields
    name: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    subject: {
        type:String,
        required:true
    }
});


// exporting the modules
module.exports = {Teacher}
