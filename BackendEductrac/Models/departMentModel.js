const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }],
}, {
    versionKey: false
});

const ModelDepartment = mongoose.model("Department", departmentSchema);

module.exports = {
    ModelDepartment
};
