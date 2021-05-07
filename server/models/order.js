'use strict';

const mongoose = require('mongoose');

//mongoose.Schema.Types.ObjectId

const orderschema = new mongoose.Schema({
  client: {
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true
    },
    adress: {
      type: String,
      trim: true
    }
  },
  order: {
    skateboard: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Skateboard'
    },
    finalprice: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Order', orderschema);
