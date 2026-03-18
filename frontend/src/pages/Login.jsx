import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // ⭐ important

    try {
      const res = await axios.post(
        "https://resume-review-ai.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🚀");

      // redirect home
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">

      {/* Card */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-[350px]">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-purple-400">
          ResumeAI
        </h1>

        <h2 className="text-xl text-center mt-2 text-white">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-400 text-sm mt-1">
          Login to continue your journey
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-purple-500 p-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 shadow-lg"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-400 hover:underline">
            Register
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;
