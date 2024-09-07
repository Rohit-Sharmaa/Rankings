import { mongoose } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
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

        globalRanking: {
          type: Number,
          default: 0,
        },
        attendedContest: {
          type: Number,
          default: 0,
        },

        streak: {
          type: Number,
          default: 0,
        },

        totalActiveDays: {
          type: Number,
          default: 0,
        },
        questionSolved: {
          type: Number,
          default: 0,
        },
        EasySolved: {
          type: Number,
          default: 0,
        },
        MediumSolved: {
          type: Number,
          default: 0,
        },
        HardSolved: {
          type: Number,
          default: 0,
        },
      },

      gfg: {
        username: {
          type: String,
          default: "",
        },
        instituteRank: {
          type: String,
          default: 0,
        },
        questionSolved: {
          type: Number,
          default: 0,
        },
        codingScore: {
          type: Number,
          default: 0,
        },
        EasySolved: {
          type: Number,
          default: 0,
        },
        MediumSolved: {
          type: Number,
          default: 0,
        },
        HardSolved: {
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

        maxRating: {
          type: Number,
          default: 0,
        },
        globalRank: {
          type: Number,
          default: 0,
        },
        countryRank: {
          type: Number,
          default: 0,
        },
        stars: {
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
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
