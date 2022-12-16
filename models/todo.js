const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 256
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = expenseSchema;
