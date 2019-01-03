const express = require("express");
const router = express.Router();
const admin_controller = require('../controllers/admin_controller')
const isAuth = require("../middleware/is-auth");

// router.get("/add-user", admin_controller.getAddUser);

router.get("/get-users", isAuth, admin_controller.getUsers);

router.post('/add-user', admin_controller.postAddUser);

router.get("/add-user", admin_controller.getAddUser);

// router.get('/edit-user/:userID', admin_controller.getEditUser);

// router.post('/edit-user', admin_controller.postEditUser);

// router.post('/delete-user', admin_controller.postDeleteUser);

router.get("/make-users", admin_controller.makeUsers);

module.exports = router;