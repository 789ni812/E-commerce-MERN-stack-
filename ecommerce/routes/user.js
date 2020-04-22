const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById } = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  });
});

router.param("userId", userById);

// Debug: allows you to test requiresSignin or if removed then displays message
// router.get("/hello", requireSignin, (req, res) => {
//   res.send("hello there");
// });

module.exports = router;
