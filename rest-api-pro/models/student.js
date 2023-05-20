let mongoose = require('mongoose');



// Students Schema
const Student = mongoose.model('Student', {
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
    }
});


// exporting the modules
module.exports = {Student}
