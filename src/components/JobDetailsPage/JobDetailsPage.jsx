const JobDetailsPage = () => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-full mx-auto px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

            {/* Navigation */}
            <div className="flex flex-col md:flex-row gap-5 justify-between p-4 text-black bg-white border-gray-200 text-lg border-b">
                <span className="text-blue-600 font-semibold border-b-2 border-blue-600 cursor-pointer">
                    Job Details
                </span>
                <span className="cursor-pointer">Company Details</span>
                <span className="cursor-pointer">Opening</span>
                <span className="cursor-pointer">Interview</span>
                <span className="cursor-pointer">FAQ</span>
            </div>

            {/* Job Title and Buttons */}
            <div className="flex flex-col xl:flex-row gap-5 xl:justify-between xl:items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-blue-600 mt-4">অডিটর ও মনিটরিং</h1>
                    <p className="text-gray-600">
                        Gram Bangla Shonchoy O Reen Doan Shomobay Shomiti Ltd.
                        <span className="text-gray-500">(গ্রাম বাংলা সঞ্চয় ও ঋণ দান সমবায় সমিতি লিঃ)</span>
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex items-center space-x-4">
                    <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#00A264] rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-400 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-400 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Apply Now</span>
                    </a>
                    <button className="p-2 rounded shadow-2xl hover:bg-gray-100">
                        ❤️
                    </button>
                    <button className="shadow-2xl p-2 rounded hover:bg-gray-100">
                        👍
                    </button>
                </div>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 text-gray-700 text-sm">
                <div>
                    <p className="font-semibold">Monthly Salary</p>
                    <p>25000-35000 Taka</p>
                </div>
                <div>
                    <p className="font-semibold">Experience</p>
                    <p>1-2 Years</p>
                </div>
                <div>
                    <p className="font-semibold">Duty Time</p>
                    <p>8 Hours</p>
                </div>
                <div>
                    <p className="font-semibold">Job Location</p>
                    <p className="font-semibold">Chapapur, Bogura</p>
                </div>
                <div>
                    <p className="font-semibold">Deadline</p>
                    <p className="font-semibold">Mar, 2025</p>
                </div>
            </div>

            {/* Job Description */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-green-600">Job Description</h2>
                <h3 className="text-lg font-semibold hover:text-green-600 text-blue-600 my-2">Job Responsibilities:</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Assist in various departments, including agriculture financing, supply chain management, and data analytics.</li>
                    <li>Conduct research and market analysis to support business strategies.</li>
                    <li>Work closely with farmers, suppliers, and stakeholders.</li>
                    <li>Participate in training sessions and mentorship programs.</li>
                    <li>Support cross-functional teams in project execution.</li>
                    <li>Analyze data using remote sensing and machine learning models.</li>
                </ul>
            </div>

            {/* Education */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-green-600">Education</h3>
                <p>Minimum Qualification: Bachelor Degree</p>
            </div>

            {/* Job Requirements */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-green-600">Job Requirements</h3>
                <p>Fresh graduates from any reputed university in Bangladesh or final-year students seeking academic internships.</p>
            </div>

            {/* Additional Requirements */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-green-600">Additional Requirements</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Strong communication, problem-solving, and analytical skills.</li>
                    <li>Adaptable, curious, and driven to excel.</li>
                    <li>Passion for the agriculture industry.</li>
                </ul>
            </div>

            {/* Compensation & Other Benefits */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-green-600">Compensation & Other Benefits</h3>
                <p>Salary: 15000</p>
                <p>Employment Status: Full-time</p>
                <p>Job Location: 8E, Road - 81, Gulshan-2, Dhaka-1212, Bangladesh</p>
            </div>

            {/* Working Conditions */}
            <div className="mt-6">
                <p>Show Less</p>
                <h3 className="text-lg font-semibold text-green-600">Working Conditions:</h3>
            </div>
        </div>
    );
};

export default JobDetailsPage;