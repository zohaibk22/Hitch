const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    fullName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: false },
    bio: { type: String, required: false },
    school: { type: String, required: false },
    major: { type: String, required: false },
    graduationYear: { type: String, required: false },
    age: { type: String, required: false },
    recentReview: { type: String, required: false },
    hometown: { type: String, required: false },
    travelPref: { type: String, required: false },
    smokeFree: { type: Boolean, required: false },
    snacks: { type: Boolean, required: false },
    active: { type: Boolean, required: false },
    music: { type: String, required: false },
  },

  { timestamps: true }
);

module.exports = mongoose.model("profile", Profile);
