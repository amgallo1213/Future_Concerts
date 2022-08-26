const mongoose = require('mongoose');

const ConcertSchema = new mongoose.Schema({
    bandName: {
        type: String,
        minlength: [3, "Band name must be at least 3 characters"],
        required: [true, "What band are you going to see?"]
    },
    venue: {
        type: String,
        minlength: [3, "Venue name must be at least 3 characters"],
        required: [true, "Where are they playing?"]
    },
    date: {
        type: String,
        required: [true, "When are they playing?"]
    },
    ticketsPurchased: {
        type: Boolean,
        required: [true, "Did you buy tickets yet?"]
    },
}, {timestamps: true});

const Concert = mongoose.model('Concert', ConcertSchema);
module.exports = Concert;
