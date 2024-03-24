const express = require("express");
const { addTemplate, getAllTemplate } = require("../controllers/template");
const router = express.Router();

router.post("/addTemplate", addTemplate);
router.get("/", getAllTemplate);

module.exports = router;
