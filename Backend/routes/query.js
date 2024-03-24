const express = require("express");
const { addQuery, getAllQuery } = require("../controllers/query");
const router = express.Router();

router.post("/", addQuery);
router.get("/getData", getAllQuery);

module.exports = router;
