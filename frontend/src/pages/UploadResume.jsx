import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select file");

    const formData = new FormData();
    formData.append("resume", file);

    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await axios.post(
        "https://resume-review-ai.onrender.com/api/resume/upload",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // ⭐ ANALYSIS STORE
      setAnalysis(res.data.analysis);

    } catch (err) {
      console.log(err);
      alert("Upload Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <DashboardLayout>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6">

        {/* Upload Card */}
        <div className="max-w-lg mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl">

          <h2 className="text-2xl font-bold text-center text-purple-400">
            Upload Resume
          </h2>

          <p className="text-center text-gray-400 mt-2">
            Get instant AI analysis 🚀
          </p>

          <input
            type="file"
            className="mt-6 w-full p-3 rounded-lg bg-gray-800 text-white"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            onClick={handleUpload}
            className="mt-6 w-full bg-purple-500 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            {loading ? "Analyzing..." : "Upload & Analyze"}
          </button>

        </div>

        {/* RESULT SECTION */}
        {analysis && (
          <div className="max-w-4xl mx-auto mt-10 bg-gray-900 p-8 rounded-2xl shadow-2xl text-white">

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Analysis Result
            </h2>

            {/* ATS Score */}
            <p className="text-xl mb-4">
              ATS Score: 
              <span className="text-green-400 font-bold">
                {" "} {analysis.ATS_score}
              </span>
            </p>

            {/* Strengths */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-purple-400">Strengths</h3>
              <ul className="list-disc ml-6 text-gray-300">
                {analysis.strengths.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Missing Skills */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-purple-400">Missing Skills</h3>
              <ul className="list-disc ml-6 text-gray-300">
                {analysis.missing_skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400">Improvements</h3>
              <ul className="list-disc ml-6 text-gray-300">
                {analysis.improvements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>

    // </DashboardLayout>
  );
}

export default UploadResume;
