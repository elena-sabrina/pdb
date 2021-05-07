'use strict';

const mongoose = require('mongoose');

//mongoose.Schema.Types.ObjectId

const skateboardschema = new mongoose.Schema({
    skateboard: {
        type: {
          type: String,
          trim: true
        },
        wheels: {
          type: String,
          lowercase: true,
          trim: true
        },
        typeprice: {
            type: Number,
            required: true
        },
        wheelsprice: {
            type: Number,
            required: true
        },
        totalprice: {
            type: Number,
            required: true
        }
});

module.exports = mongoose.model('Skateboard', skateboardschema);