import { mongoose } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  CodingProfiles: {
    leetcode: {
      username: {
        type: String,
        default: "",
      },

      rating: {
        type: Number,
        default: 0,
      },

      questionSolved: {
        type: Number,
        default: 0,
      },
    },

    gfg: {
      username: {
        type: String,
        default: "",
      },

      rating: {
        type: Number,
        default: 0,
      },

      questionSolved: {
        type: Number,
        default: 0,
      },
    },

    codechef: {
      username: {
        type: String,
        default: "",
      },

      rating: {
        type: Number,
        default: 0,
      },

      questionSolved: {
        type: Number,
        default: 0,
      },
    },

    codeforces: {
      username: {
        type: String,
        default: "",
      },

      rating: {
        type: Number,
        default: 0,
      },

      questionSolved: {
        type: Number,
        default: 0,
      },
    },
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
