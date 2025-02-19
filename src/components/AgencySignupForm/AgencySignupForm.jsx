import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function AgencySignupForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    agencyType: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-100 to-indigo-600 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full  max-w-xl">
        <h2 className="text-center text-xl font-semibold mb-4">Create an Agency Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="companyName" placeholder="Enter Agency Name" className="input-field w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
           value={formData.companyName} onChange={handleChange} required />
          
          <select name="agencyType" className="input-field w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.agencyType} onChange={handleChange} required>
            <option value="">Select Agency Type</option>
            <option value="Recruitment">Recruitment</option>
            <option value="Consulting">Consulting</option>
          </select>
          
          <input type="text" name="ownerName" placeholder="Enter Your Agency Owner Name" className="input-field w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.ownerName} onChange={handleChange} required />
          
          <input type="tel" name="phoneNumber" placeholder="Phone Number" className="input-field w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.phoneNumber} onChange={handleChange} required />
          
          <input type="email" name="email" placeholder="Enter Your Email Address" className="input-field w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={handleChange} required />
          
          <input type="password" name="password" placeholder="Enter Your Password" className="input-field w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.password} onChange={handleChange} required />
          
          <div className="flex items-center">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" required />
            <span className="text-sm">I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a></span>
          </div>
          
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Create an account</button>
        </form>
        
        <div className="text-center mt-4">
          <p>OR</p>
          <button className="flex items-center justify-center gap-2 w-full border py-2 mt-2 rounded-lg hover:bg-gray-100">

            < FcGoogle className="w-5 h-5"></FcGoogle>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
