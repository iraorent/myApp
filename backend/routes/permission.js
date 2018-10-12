const express = require("express");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const PermissionController = require("../controllers/permission");
const router = express.Router();

router.post("",checkAuth,PermissionController.cretePermission);

module.exports = router;