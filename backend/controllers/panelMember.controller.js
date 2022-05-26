
const PanelMember = require('../models/panelMember.model');

const signUpPanelMember = (req, res)=> {
    const fullname = req.body.fullname;
    const pnum = req.body.pnum;
    const Email = req.body.Email;
    const password = req.body.password;

    const newPanelMember = new PanelMember({
        fullname,
        pnum,
        Email,
        password
    });

    newPanelMember.save().then((PanelMember) => {
        res.json(PanelMember);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllPanelMembers = (req, res) => {
    PanelMember.find().then((PanelMember) => {
        res.json(PanelMember);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports ={
    signUpPanelMember,
    getAllPanelMembers
}