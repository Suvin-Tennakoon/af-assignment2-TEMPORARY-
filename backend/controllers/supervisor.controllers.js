
const Supervisor = require('../models/supervisor.model');

const signUpSupervisor = (req, res)=> {
    const fullname = req.body.fullname;
    const pnum = req.body.pnum;
    const Email = req.body.Email;
    const password = req.body.password;
    const title = req.body.title;

    const newSupervisor = new Supervisor({
        fullname,
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



const getSupervisortById = (req, res) => {
    Supervisor.findById(req.params.id)
        .then((Supervisor) => res.json(Supervisor))
        .catch(err => res.json(err))
}

const updateSupervisor = (req, res) => {

    Supervisor.findByIdAndUpdate(req.params.id, {$set:{password:req.body.password, pnum:req.body.pnum, Email:req.body.Email, title:req.body.title}})
        .then(() => res.json('Good'))
        .catch(err => res.status(400).json('Error : ' +err));
}

module.exports ={
    signUpSupervisor,
    getAllSupervisors,
    deleteSupervisor,
    getSupervisortById,
    updateSupervisor
}