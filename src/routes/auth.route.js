const {
  postLogin,
  postSignup,
  postSendOtp,
  postResetPassword,
} = require("../controllers/auth.controller");
const { signupValidator } = require("../validators/user.validator");

const router = require("express").Router();

router.post("/signup", signupValidator, postSignup);
router.post("/login", postLogin);
router.post("/send-otp", postSendOtp);
router.post("/reset-password", postResetPassword);

module.exports = router;
