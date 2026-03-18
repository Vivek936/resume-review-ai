const fs = require("fs");
const Resume = require("../models/Resume");
const pdf = require("pdf-parse");
const analyzeResume = require("../utils/aiAnalyzer");

exports.getResumeHistory = async (req, res) => {
  try {

    const resumes = await Resume.find();

    res.json({
      count: resumes.length,
      resumes
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadResume = async (req, res) => {
  try {

    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);

    const data = await pdf(dataBuffer);

    const resumeText = data.text;

    const analysis = await analyzeResume(resumeText);

    const newResume = new Resume({
  fileName: req.file.filename,
  ATS_score: analysis.ATS_score,
  strengths: analysis.strengths,
  missing_skills: analysis.missing_skills,
  improvements: analysis.improvements
});

await newResume.save();

    res.json({
  message: "Resume uploaded and analyzed",
  analysis
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};