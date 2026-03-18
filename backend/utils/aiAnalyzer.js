const analyzeResume = async (text) => {

  const result = {
    ATS_score: Math.floor(Math.random() * 30) + 70,
    strengths: [
      "Good project experience",
      "Clear education section"
    ],
    missing_skills: [
      "Docker",
      "AWS"
    ],
    improvements: [
      "Add quantified achievements",
      "Improve skill section formatting"
    ]
  };

  return result;
};

module.exports = analyzeResume;