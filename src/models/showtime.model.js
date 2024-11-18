const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({
  film_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Film",
    required: true,
    trim: true,
  },
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
    trim: true,
  },
  screen_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch.list_screen",
    required: true,
    trim: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Showtime = mongoose.model("Showtime", showtimeSchema);

module.exports = Showtime;
