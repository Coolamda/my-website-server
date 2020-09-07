const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    required: true,
    type: String,
    trim: true,
    minlength: 1,
  },
  text: {
    required: true,
    type: String,
    trim: true,
    minlength: 1,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
