const express = require("express");

const router = express.Router();

const { validateBody } = require("../../middlewares");

const { recepiesSchemas } = require("../../models/recepie");

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../controllers/ingridients");

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", validateBody(recepiesSchemas), add);

router.delete("/:id", deleteById);

router.put("/:id", validateBody(recepiesSchemas), updateById);

module.exports = router;
