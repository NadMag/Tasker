const express = require("express");
const router = express.Router();

const task_controller = require("../controllers/task");

// a simple test url to check that all of our files are communicating correctly.

router.get("/", task_controller.getAll);

router.post("/create", task_controller.create);

router.get("/:id", task_controller.getById);

router.put("/:id/update", task_controller.update);

router.delete("/:id/delete", task_controller.delete);

module.exports = router;
