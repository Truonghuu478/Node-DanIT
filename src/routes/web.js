//khai báo route
const express =  require("express")
// set router
const router = express.Router();
// import controller
const {getHomePage, getAboutPage, renderHomePage} = require("../controllers/webController");

router.get("/home", getHomePage);
router.get("/about", getAboutPage);
router.get("/logo", renderHomePage)
  module.exports = router;
  