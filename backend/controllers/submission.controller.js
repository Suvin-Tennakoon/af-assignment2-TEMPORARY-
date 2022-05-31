const Submission = require('../models/submission.model');

const addNewSubmission = (req, res) => {
    const submissionName = req.body.submissionName;
    const deadline = req.body.deadline;
    const additionalDetail = req.body.additionalDetail;

    const newSubmission = new Submission({
        submissionName,
        deadline,
        additionalDetail
    });

    newSubmission.save().then((Submission) => {
        res.json(Submission);
    }).catch((err) => {
        res.json(err);
    })

}

module.exports = {
    addNewSubmission
}