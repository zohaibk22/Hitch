const Profile = require("../models/profile");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);
    if (profile) {
      return res.json(profile);
    }
    res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfile = async (req, res) => {
  try {
    const profile = await new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  await Profile.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, profile) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!profile) {
        return res.status(404).json({ message: "Profile not found!" });
      }
      res.status(200).json(profile);
    }
  );
};

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Profile.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product Deleted");
    }
    throw new Error("Product was not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProfiles,
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
};
