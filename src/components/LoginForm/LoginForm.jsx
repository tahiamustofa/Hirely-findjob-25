import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMethod, setLoginMethod] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-2">
      <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-black">Welcome Back!</h2>
        <p className="mb-4 text-center text-black">
          If you already have an account, sign in using your email address or mobile number.
        </p>
        <div className="mb-4 flex justify-center space-x-4 text-black">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              loginMethod === "email" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setLoginMethod("email")}
          >
            Email Address
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              loginMethod === "mobile" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setLoginMethod("mobile")}
          >
            Mobile Number
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-black">
            <input
              type="text"
              placeholder={loginMethod === "email" ? "Enter Your Email Address" : "Enter Your Mobile Number"}
              className="w-full rounded-md border p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full rounded-md border p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="absolute right-3 top-3 cursor-pointer text-gray-500">🔒</span>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600">
            SIGN IN
          </button>
        </form>
        <div className="my-4 text-center text-black">OR</div>
        <button className="flex gap-2 w-full items-center justify-center rounded-md border py-2 hover:bg-gray-100">
        <FcGoogle className="text-xl" />
         
          Sign in with Google
        </button>
        <p className="mt-4 text-center text-sm text-black">
          Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
