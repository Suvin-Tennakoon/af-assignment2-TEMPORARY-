const DocSubmission = require('../models/documentSubmission.model');

const addNewDocSubmission = (req, res) => {
    const author = req.body.author;
    const submittedDate = req.body.submittedDate;
    const grpID = req.body.grpID;
    const fileName = req.body.fileName;
    const submissionType = req.body.submissionType;

    const newDocSubmission = new DocSubmission({
        author,
        submittedDate,
        grpID,
        fileName,
        submissionType
    });

    newDocSubmission.save().then((DocSubmission) => {
        res.json(DocSubmission);
    }).catch((err) => {
        res.json(err);
    })

}


module.exports = {
    addNewDocSubmission
}