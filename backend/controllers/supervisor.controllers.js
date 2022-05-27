
const Supervisor = require('../models/supervisor.model');

const signUpSupervisor = (req, res)=> {
    const firstname = req.body.firstname;
    const pnum = req.body.pnum;
    const Email = req.body.Email;
    const password = req.body.password;
    const title = req.body.title;

    const newSupervisor = new Supervisor({
        firstname,
        pnum,
        Email,
        password,
        title
    });

    newSupervisor.save().then((Supervisor) => {
        res.json(Supervisor);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllSupervisors = (req, res) => {
    Supervisor.find().then((Supervisor) => {
        res.json(Supervisor);
    }).catch((err) => {
        res.json(err);
    })
}

const deleteSupervisor = (req, res) => {
    Supervisor.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

module.exports ={
    signUpSupervisor,
    getAllSupervisors,
    deleteSupervisor
}