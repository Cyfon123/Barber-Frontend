import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      navigate("/home");
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-yellow-800 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg bg-opacity-80 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 backdrop-filter backdrop-blur-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gray-900 via-black to-yellow-600 p-8 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400 tracking-wide">
            Admin Login
          </h2>
          <p className="text-gray-400 mt-2">
            Enter your credentials to proceed.
          </p>
        </div>

        <form onSubmit={handleLogin} className="p-10 space-y-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="text-yellow-400" size={22} />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-900 text-yellow-400 border-2 border-gray-700 rounded-xl 
            focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:border-yellow-400 transition duration-300 transform focus:scale-105"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="text-yellow-400" size={22} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-900 text-yellow-400 border-2 border-gray-700 rounded-xl 
            focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:border-yellow-400 transition duration-300 transform focus:scale-105"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-black rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 
          hover:from-yellow-400 hover:to-yellow-500 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="bg-gray-900 py-4 text-center border-t border-gray-700">
          <p className="text-sm text-gray-500">
            © 2024 Admin Panel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
