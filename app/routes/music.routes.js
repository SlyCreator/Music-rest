const router = require("express").Router();
const music = require('../controllers/music.controller');
console.log('h7')
router.post("/",music.create);

module.exports = router