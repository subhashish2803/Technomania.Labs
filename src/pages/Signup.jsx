import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md border-2 border-dotted border-black rounded-xl p-8 shadow-md bg-white text-black"
      >
        <h2 className="text-4xl font-sans mb-6 text-center">SIGN UP</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 rounded border border-gray-300 placeholder-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-gray-300 placeholder-gray-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-gray-300 placeholder-gray-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 p-2 rounded border border-gray-300 placeholder-gray-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Sign Up
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">
            Log In
          </a>
        </p>

        <p className="text-center mt-4 text-sm text-gray-600">
          Made with <span className="text-red-500">❤️</span> by Team technomaniaLabs
        </p>
      </form>
    </div>
  );
}
