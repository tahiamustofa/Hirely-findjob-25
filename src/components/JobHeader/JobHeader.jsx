export default function JobHeader() {
    return (
      <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-3 justify-between items-center">
        <p className="text-black text-lg">
          We found <span className="text-[#0275D8] cursor-pointer">(2,170)</span> jobs
        </p>
        <div className="flex items-center gap-3">
          <label className="text-black text-sm">Sort By:</label>
          <select className="border rounded-lg px-3 py-1 text-black focus:outline-none">
            <option>Select</option>
          </select>
          <button className="p-1 border rounded-lg text-[#0275D8] hover:bg-blue-100">
            ⏹️
          </button>
          <button className="p-1 border rounded-lg text-[#0275D8] hover:bg-gray-200">
            📄
          </button>
        </div>
      </div>
    );
  }
  