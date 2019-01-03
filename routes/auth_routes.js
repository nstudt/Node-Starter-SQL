const express = require("express");

const auth_controller = require("../controllers/auth_controller");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/login", auth_controller.getLogin);

router.get("/signup", auth_controller.getSignup);

router.post("/login", auth_controller.postLogin);

router.post("/signup", auth_controller.postSignup);

router.post("/logout", auth_controller.postLogout);

module.exports = router;

// router.post('/login', function (req, res, next) {
//     passport.authenticate('local-login', function (err, user, info) {
//         if (err) {
//             return next(err); // will generate a 500 error
//         }
//         if (!user) {
//             return res.send({ success: false, message: info.message || 'Falha no login' });
//         }

//         req.logIn(user, function (err) {
//             if (err) { return next(err); }
//             return res.send({ success: true, message: 'Login efetivado com sucesso', user: user });
//         });

//         //return res.send({ success : true, message : 'Login efetivado com sucesso', user: user });
//     })(req, res, next);
// });

module.exports = router;