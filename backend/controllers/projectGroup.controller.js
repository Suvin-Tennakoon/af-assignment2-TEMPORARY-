
const ProjectGroup = require('../models/projectGroup.model');

const addNewProjectGroup = (req, res)=> {
    const leader = req.body.leader;
    const member2 = req.body.member2;
    const member3 = req.body.member3;
    const member4 = req.body.member4;
    const topic = '';
    const allocatedPM = '';
    const grpID = '';
    const allocatedSupervisor='';
    const allocatedCoSup='';

    const newProjectGroup = new ProjectGroup({
        leader,
        member2,
        member3,
        member4,
        topic,
        allocatedSupervisor,
        allocatedPM,
        grpID,
        allocatedCoSup
    });

    newProjectGroup.save().then((ProjectGroup) => {
        res.json(ProjectGroup);
    }).catch((err) => {
        res.json(err);
    })

}

module.exports ={
    addNewProjectGroup
}