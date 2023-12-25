const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment", required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    submissionDate: { type: Date },
    status: { type: String },
    remarks: { type: String },
}, {
    versionKey: false
});

const ModelSubmission = mongoose.model("Submission", submissionSchema);

module.exports = {
    ModelSubmission
};
