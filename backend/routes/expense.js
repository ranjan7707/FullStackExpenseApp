
//routes
//expense.js

const express = require("express");
const router = express.Router();

const expenseController = require("../backend/controller/expense");

router.get("/", expenseController.getUsers);
router.post("/user", expenseController.postUser);
router.delete("/delete/:id", expenseController.deleteUser);
router.get("/edit/:id", expenseController.getEditUser);
router.put("/edit/:id", expenseController.postEditUser);

module.exports = router;