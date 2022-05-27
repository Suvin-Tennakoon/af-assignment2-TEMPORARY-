
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

const getDetailsToEdit = (req, res) => {
    const logMobile = req.params.id;

    Customer.find({cusMobile:logMobile}).then((Customer) => {
        res.json(Customer);
    }).catch((err) => {
        res.json(err);
    })
}

const getSupervisortById = (req, res) => {
    Supervisor.findById(req.params.id)
        .then((Supervisor) => res.json(Supervisor))
        .catch(err => res.json(err))
}

module.exports ={
    signUpSupervisor,
    getAllSupervisors,
    deleteSupervisor,
    getSupervisortById
}