const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slideSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    lastUpdatedDate: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Slide", slideSchema);