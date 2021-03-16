const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost:27017/slyMusic_db";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully Established Connection with MongoDB")
    })
    .catch(err => {
        console.log("Cannot Establish a connection to the database");
        process.exit()
    });

module.exports = mongoose;