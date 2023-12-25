const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    
    gender: { type: String,},
    dateOfBirth: { type: Date },
    
    email: { type: String, required: true },
    contactNumber: { type: String },
    password:{type: String,required:true}
}, {
    versionKey: false
});

const ModelStudent = mongoose.model("students", studentSchema);

module.exports = {
    ModelStudent
};

