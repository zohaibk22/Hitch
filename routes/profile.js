const { Router } = require("express");
const controllers = require("../controllers/profile");

const router = Router();
router.get("/profiles", controllers.getProfiles);
router.get("/profile/:id", controllers.getProfile);
<<<<<<< HEAD
router.post("/profile/create", controllers.createProfile);
router.put("/profile/update/:id", controllers.updateProfile);
=======
router.post("/profiles", controllers.createProfile);
router.put("/profile/:id", controllers.updateProfile);
>>>>>>> c6e69158efb1bc2317784b23edfcbfc98918b6e9
router.delete("/profile/:id", controllers.deleteProfile);

module.exports = router;
