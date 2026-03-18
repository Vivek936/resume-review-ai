const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { uploadResume } = require("../controllers/resumeController");
const { getResumeHistory } = require("../controllers/resumeController");


router.post("/upload", upload.single("resume"), uploadResume);
router.get("/history", getResumeHistory);


module.exports = router;