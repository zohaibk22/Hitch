const { Router } = require("express");
const controllers = require("../controllers/profile");

const router = Router();
router.get("/profiles", controllers.getProfiles);
router.get("/profile/:id", controllers.getProfile);
router.post("/profiles", controllers.createProfile);
router.put("/profile/:id", controllers.updateProfile);
router.delete("/profile/:id", controllers.deleteProfile);

module.exports = router;
