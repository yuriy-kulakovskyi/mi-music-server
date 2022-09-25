const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  }
});

const Song = mongoose.model("SongData", SongSchema);
module.exports = Song;