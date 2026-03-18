import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  // ⭐ Stats calculate
  const total = resumes.length;
  const avgScore =
    total > 0
      ? Math.round(
          resumes.reduce((acc, cur) => acc + cur.ATS_score, 0) / total
        )
      : 0;

  const bestScore =
    total > 0
      ? Math.max(...resumes.map((r) => r.ATS_score))
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6 text-white">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-purple-400 mb-8">
        Dashboard 🚀
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gray-900 p-6 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-400">Total Resumes</h2>
          <p className="text-3xl font-bold text-purple-400 mt-2">{total}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-400">Average ATS Score</h2>
          <p className="text-3xl font-bold text-green-400 mt-2">{avgScore}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow hover:scale-105 transition">
          <h2 className="text-gray-400">Best Score</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">{bestScore}</p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow">

        <h2 className="text-xl font-semibold text-purple-400 mb-4">
          Recent Activity
        </h2>

        {resumes.length === 0 ? (
          <p className="text-gray-400">No resumes uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {resumes.slice(0, 5).map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
              >
                <div>
                  <p className="text-sm text-gray-300">
                    {new Date(item.uploadedAt).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    Resume Uploaded
                  </p>
                </div>

                <div className="text-green-400 font-bold">
                  {item.ATS_score}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;
