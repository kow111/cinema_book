const { postLogin, postSignup } = require("../controllers/auth.controller");
const { signupValidator } = require("../validators/user.validator");

const router = require("express").Router();

router.post("/signup", signupValidator, postSignup);
router.post("/login", postLogin);

module.exports = router;
