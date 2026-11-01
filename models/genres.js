const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, minLength: 3, maxLength: 100, trim: true },
    description: { type: String, maxLength: 1000, trim: true },
  },
  { timestamps: true }
);

GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);