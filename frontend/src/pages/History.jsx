import { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://resume-review-ai.onrender.com/api/resume/history",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setResumes(res.data.resumes);

      } catch (err) {
        console.log(err);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 text-white">

      <h1 className="text-3xl font-bold text-purple-400 mb-8">
        History
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {resumes.map((item) => (
          <div
            key={item._id}
            className="bg-gray-900 p-6 rounded-2xl shadow hover:scale-105 transition"
          >
            <h2 className="text-lg font-semibold mb-2">
              Resume
            </h2>

            <p className="text-gray-400 text-sm mb-2">
              {new Date(item.uploadedAt).toLocaleDateString()}
            </p>

            <p className="text-green-400 font-bold">
              ATS Score: {item.ATS_score}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default History;
