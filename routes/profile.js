const { Router } = require("express");
const controllers = require("../controllers/profile");

const router = Router();

router.get("/profile/:id", controllers.getProfile);
router.post("/profile/create", controllers.createProfile);
router.put("/profile/:id", controllers.updateProfile);
router.delete("/profile/:id", controllers.deleteProfile);

module.exports = router;
