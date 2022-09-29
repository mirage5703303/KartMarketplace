const express = require('express');
const router = express.Router();

const Gameusers = require('../../models/Gameusers');
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
// const passport = require('passport');

router.get('/test', (req, res) => res.json({ msg: 'letlogin Works' }));

router.post(`/add`, (req, res) => {
    console.log(req.body.username);
    res.json({ msg: req.body });


    const newUser = new Gameusers({
        email: req.body.username,
        password: req.body.password,
        claimmoney: 0,
        buy_epic : "no" ,
        buy_common : "no" , 
        buy_legendary : "no" , 
        buy_rare : "no",
        status : " "
    });

    newUser.save().then(user => res.json(user));
});

router.post(`/buycar`, (req, res) => {
    console.log(req.body);
    res.json({ msg: req.body });

    // Gameusers.findOne({ email: req.body.username }).then(user => {
    //     if (user) {
    //         errors.email = 'Email already exists';
    //         return res.status(400).json(errors);
    //     } 
    // });

    var type = req.body.cartype;

    Gameusers.updateOne({email : req.body.username} ,
        {$set : { [type] : "yes" }} , (err, docs) => { 
            if (err){ 
                console.log('err') 
            } 
            else{ 
                // res.status(200).json({data: 'data updated successfully'});
                console.log(132)
            } 
        }

    )

});

router.post(`/addmoney`, async (req, res) => {
    console.log(req.body);
    res.json({ msg: req.body });

    // Gameusers.findOne({ email: req.body.username }).then(user => {
    //     if (user) {
    //         errors.email = 'Email already exists';
    //         return res.status(400).json(errors);
    //     } 
    // });
    var current_claim;
    var type = req.body.cartype;
    var result = await Gameusers.findOne({email : req.body.username});
    current_claim = parseFloat(result.claimmoney) + parseInt(req.body.money);
    Gameusers.updateOne({email : req.body.username} ,
        { $set : {claimmoney : parseInt(current_claim) }} , (err, docs) => { 
            console.log(current_claim);
            if (err){ 
                console.log('err') 
            } 
            else{ 
                // res.status(200).json({data: 'data updated successfully'});
                console.log(132)
            } 
        }

    )

});

router.post(`/needmoney`, async (req, res) => {
    console.log(req.body);
    res.json({ msg: req.body });

    Gameusers.updateOne({email : req.body.username} ,
        { $set : {status : "need" }} , (err, docs) => { 
            if (err){ 
                console.log('err') 
            } 
            else{ 
                // res.status(200).json({data: 'data updated successfully'});
                // res.json({ result : docs});
            } 
        }

    )

});

//send data to frontend
router.get('/gettable' , (req,res) => {
    Gameusers.find({} , (err, docs) => {
        if (err ){ 
            throw(err);
        }
        else {
            res.json(docs);
        }
    }) 
})

//send data to unity
router.post('/getcarinf' , (req,res) => {
    Gameusers.findOne({email : req.body.username} , (err, docs) => {
        if (err ){ 
            throw(err);
        }
        else {
            res.json(docs);
        }
    }) 
})

module.exports = router;
