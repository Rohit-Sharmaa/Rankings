import mongoose from "mongoose";

const ContestSchema = new mongoose.Schema({
  host: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});

// Create and export the model
const UpcomingContestModel = mongoose.model("UpcomingContest", ContestSchema);

export default UpcomingContestModel;
