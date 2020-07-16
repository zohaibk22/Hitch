const db = require("../db/connection");
const Profile = require("../models/profile");

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

const main = async () => {
  const profiles = [
    {
      fullName: "Jackie Jane",
      email: "jackie-jane@jamesmadison.edu",
      password: "Hello123",
      bio: "I am a student GA.",
      School: "James Madison University",
      Major: "Film Studies",
      GraduationYear: "2024",
      age: "18",
      recentReview: "Ride was great! 5 Stars!",
      hometown: "New York City",
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
