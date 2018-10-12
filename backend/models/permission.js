const mongoose = require("mongoose");

const permissionSchema = mongoose.Schema({
  module: { type: String, required: true },

  name: { type: String, required: true },

  description: { type: String, required: true },

  isActive: {
    type: Boolean,
    default: true
  },

  createdDate: {
    type: Date,
    default: Date.now
  },

  createdBy: {
    type: String,
    required: true
  },

  updatedDate: Date,

  updatedBy: String
});

module.exports = mongoose.model("Permission", permissionSchema);
