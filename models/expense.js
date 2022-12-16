const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 256
    },
    amount: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    }
  },
  { timestamps: true }
);

module.exports =  expenseSchema;
