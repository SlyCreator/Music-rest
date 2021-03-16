const Music = require('../models/music.model');

//Create and save a new music

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Cannot create music without title" });
        return;
    }

    //Create a Tutorial
    const music = new Music({
        title: req.body.title,
        genre: req.body.genre,
        duration: req.body.duration,
        year: req.body.year
    })

    //Here we save it uisng thee save() method

    music.save(music)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Server error try again"
            })
        })
}