
const Supervisor = require('../models/supervisor.model');

const signUpSupervisor = (req, res)=> {
    const firstname = req.body.fullname;
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

module.exports ={
    signUpSupervisor,
    getAllSupervisors
}