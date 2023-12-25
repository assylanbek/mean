const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
}, {
    versionKey: false
});

const ModelEnrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = {
    ModelEnrollment
};
