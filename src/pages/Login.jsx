import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Welcome");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md border-2 border-dotted border-black rounded-xl p-8 shadow-md bg-white text-black"
      >
        <h2 className="text-4xl font-sans mb-6 text-center">LOG IN</h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-400 underline">
            Sign Up
          </a>
        </p>

        <p className="text-center mt-4 text-sm text-gray-400">
          Made with <span className="text-red-500">❤️</span> by Team technomaniaLabs
        </p>
      </form>
    </div>
  );
}
