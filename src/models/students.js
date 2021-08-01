const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength:3,
        required: true
    },
    email: {
        type: String,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        },
        required: true
    },
    phone:{
        type: Number,
        min: 10,
        unique: true,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;