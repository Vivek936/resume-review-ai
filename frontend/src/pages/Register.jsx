import { useState } from "react";
import API from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);

      // optional redirect
      window.location.href = "/login";

    } catch (error) {
      alert("Registration failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">

      {/* Card */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-[380px]">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-purple-400">
          ResumeAI
        </h1>

        <h2 className="text-xl text-center mt-2 text-white">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-400 text-sm mt-1">
          Start your journey with us
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            Register
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Register;