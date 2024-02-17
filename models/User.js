const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

module.exports = new mongoose.model("user", userSchema);