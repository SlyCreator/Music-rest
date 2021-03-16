const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://locahost:8089"
}

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('h1')
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my App" })
});

console.log('h2')
app.use("/api/musics", require('./app/routes/music.routes'))
console.log('h5')

const PORT = process.env.PORT || 8064;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}.`)
})