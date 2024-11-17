const {
  postLogin,
  postSignup,
  updateUser,
} = require("../controllers/auth.controller");
const { signupValidator } = require("../validators/user.validator");

const router = require("express").Router();

router.post("/signup", signupValidator, postSignup);
router.post("/login", postLogin);
router.put("/signup/:user_id", updateUser);

module.exports = router;
