const express = require("express");

const { getTodo, updateCompleted } = require("../control/todos");

const router = express.Router();

router.route("/").get(getTodo);
router.route("/completed").post(updateCompleted);

module.exports = router;
