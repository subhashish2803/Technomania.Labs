import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // import auth

export default function Welcome() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // fetch current user name
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || "User");
    }

    const timer = setTimeout(() => {
      navigate("/");
    }, 1000); // redirect after 3 sec

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-4xl w-full flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-sans text-black">{userName.split(" ")[0]}</h1>
          <h1 className="text-5xl font-sans text-black mb-4">
            {userName.split(" ")[1] || ""}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Hey {userName}, welcome to technomaniaLabs! <br />
          </p>
        </div>

        <img
          src="/logos/profile-page.svg"
          alt="profile"
          className="w-72 h-auto"
        />
      </div>
    </div>
  );
}
