const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    name_candidate: {
        type: String,
        // required: true,
        minLenght: 3
    },

    whatsapp_number: {
        type: Number,
        // required: true,
        min: 10
    },

    calling_number: {
        type: Number,
        // required: true,
        min: 10
    },

    name_mother: {
        type: String,
        // required: true,
        minLenght: 3
    },

    name_father: {
        type: String,
        // required: true,
        minLenght: 3
    },

    mother_number: {
        type: Number,
        // required: true,
        min: 10
    },

    father_number: {
        type: Number,
        // required: true,
        min: 10
    },

    address_permanent: {
        type: String,
        // required: true,
        minLenght: 5
    },

    address_present: {
        type: String,
        // required: true,
        minLenght: 5
    },

    nationality: {
        // required: true,
        // add more here
    },

    dob: {
        type: Date,
        // required: true
    },

    percentage_12: {
        type: Number,
        // required: true
    },

    year_12: {
        type: Number,
        // required: true
    },

    percentage_10: {
        type: Number,
        // required: true
    },

    year_10: {
        type: Number,
        // required: true
    },

    board_name_12: {
        type: String,
        // required: true
    },

    sex: {
        // required: true
    }, // isko bhi waps dekho

    name_address_tel: {
        type: String,
        // required: true,
        minLenght: 5
    },

    category: {
        type: String,
        // required: true
    }, //isko bhi waps dekho

    declaration: {
        type: String,
        // required: true
    }, //isko bhi waps dekho

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

const User = mongoose.model("User", userSchema)

module.exports = User;