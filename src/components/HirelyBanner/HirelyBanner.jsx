
const HirelyBanner = () => {
  return (
    <div className="bg-[#1F2131] p-8">
          <div className="2xl:max-w-[1400px] max-w-full xl:max-w-[1200px] container mx-auto flex md:flex-row flex-col md:justify-between">  
        <div className="flex flex-col justify-start items-start">
        <h1 className="lg:text-2xl md:text-base text-sm font-bold text-white mb-4">Are you looking for a job?</h1>
      <p className="text-white mb-4 lg:text-2xl md:text-base text-sm">Hirely is Your Gateway to Success Starts Here!</p>
      <p className="text-[#0275D8] mb-8 text-xs">Our goal is to make your job search as easy as possible.</p>
        </div>
     
      <div className="flex gap-2 lg:items-center items-end flex-col lg:flex-row">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Sign In</button>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Register as Candidate</button>
      </div>
      </div>
    </div>
  );
};

export default HirelyBanner;