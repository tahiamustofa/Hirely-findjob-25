import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  p-2 my-5">
      <div className="w-full  max-w-xl bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-xl font-semibold mb-4 text-black">New Member Registration</h2>
        <button className="text-black flex items-center justify-center w-full p-2 border rounded-lg mb-4 hover:bg-gray-100">
          <FcGoogle className="mr-2 text-xl" /> Sign up with Google
        </button>
        <div className="text-center text-black mb-4">OR</div>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center border rounded-lg p-2">
            <span className="mr-2 flex text-xs">🇧🇩 +880</span>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full focus:outline-none"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              By clicking --Create an account--, you confirm that you agree to our
              <a href="#" className="text-blue-500"> Terms and Conditions </a>
              and <a href="#" className="text-blue-500">Privacy Policy</a>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Create an account
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-blue-500">Log In</a>
        </p>
      </div>
    </div>
  );
}
