const mongoose = require("../config/db.config");
console.log('h4')
const schema = new mongoose.Schema(
    {
        title: {
            desc: "Title of Song",
            type: String,
            trim: true,
            required: true,
        },
        genre: {
            desc: "Genre of music",
            type: String,
            trim: true,
            required: true
        },
        duration: {
            desc: "Duration of song",
            type: String,
            trim: true,
            required: true,

        },
        year: {
            desc: "year of production",
            type: Number,
            required: true
        }
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
)

module.exports = mongoose.model("Music",schema)