const Concert = require("../models/concerts.model");


module.exports = {
    findAllConcerts: (req, res) => {
        Concert.find({})
        .then((allConcerts) => {
            console.log(allConcerts);
            res.json(allConcerts)
        })
        .catch((err) => {
            console.log("Find All Concerts Failed");
            res.json({message: "Something went wrong in Find All Concerts", errors: err})
        })
    },

    createConcert: (req, res) => {
        Concert.create(req.body)
        .then((newConcert) => {
            console.log(newConcert);
            res.json(newConcert)
        })
        .catch((err) => {
            console.log("Something went wrong in Create New Concert");
            res.status(400).json(err)
        })
    },

    findOneConcert: (req, res) => {
        Concert.findOne({_id: req.params.id})
        .then((oneConcert) => {
            console.log(oneConcert);
            res.json(oneConcert)
        })
        .catch((err) => {
            console.log("Find One Concert Failed");
            res.json({message: "Something went wrong in Find One Concert", errors: err})
        })
    },

    updateOneConcert: (req, res) => {
        Concert.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedConcert => {
                console.log(updatedConcert);
                res.json(updatedConcert)
            })
            .catch((err) => {
                console.log("Something went wrong in Update Concert");
                res.status(400).json(err)
            })
    },

    deleteConcert: (req, res) => {
        Concert.deleteOne({_id: req.params.id})
            .then((deletedConcert) => {
                console.log(deletedConcert);
                res.json(deletedConcert)
            })
            .catch((err) => {
                console.log("Delete One Concert Failed");
                res.json({message: "Something went wrong in Delete One Concert", errors: err})
            })
    },

};