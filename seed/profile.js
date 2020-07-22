const db = require("../db/connection");
const Profile = require("../models/profile");

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

const main = async () => {
  const profiles = [
    {
      fullName: "Jackie Jane",
      email: "jackie-jane@jamesmadison.edu",
      password: "Hello123",
      profilePicture: "test.png",
      bio: "I am a student GA.",
      school: "James Madison University",
      major: "Film Studies",
      graduationYear: "2024",
      age: "18",
      recentReview: "Ride was great! 5 Stars!",
      hometown: "New York City",
      travelPref: "rap",
      smokeFree: true,
      snacks: false,
      active: true,
    },
  ];

  await Profile.insertMany(profiles);
  console.log("Profile Created");
};

const run = async () => {
  await main();
  db.close();
};

run();
