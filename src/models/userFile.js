const mongoose = require("mongoose")
const validator = require("validator")

const fileSchema = mongoose.Schema({
    photo_passport: {
        type: String,
        // required: true
    },
    
    marksheet_10: {
        type: String,
        // required: true
    },

    marksheet_12: {
        type: String,
        // required: true
    },

    certificate_10: {
        type: String,
        // required: true
    },

    certificate_12: {
        type: String,
        // required: true
    },

    certificate_caste: {
        type: String,
        // required: true
    },

    certificate_residential: {
        type: String,
        // required: true,
    },
})


const Userfile = mongoose.model("Userfile", fileSchema)
module.exports = Userfile;