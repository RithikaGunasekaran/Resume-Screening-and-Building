import { FaSearch, FaClipboardCheck, FaChartLine } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import img from "../assets/pic.jpg"
const Homescreen = () => {
      const navigate = useNavigate();

    const handleResumeScreening = () => {
        // Redirect to the Flask app
        window.location.href = 'http://localhost:5000';  // Ensure Flask is running here
    };

  return (
    <div className="flex  flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12">
      {/* Left Image Section */}
      

      {/* Right Content Section */}
      <div className="w-full md:w-1/2">
        <p className="text-[#A64D79] uppercase font-semibold text-sm">
          Optimize Your Hiring Process
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Efficient Resume Screening for Better Hiring
        </h2>
        <a href="#" className="text-gray-600 mt-4 inline-block hover:underline">
          Learn More →
        </a>

        {/* Resume Screening Features List */}
        <div className="mt-6 space-y-6">
          <div className="flex bg-fuchsia-100 p-5 rounded-2xl items-start gap-4">
            <FaSearch className="text-[#A64D79] w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                AI-Powered Resume Analysis
              </h3>
              <p className="text-gray-600 text-sm">
                Our intelligent system scans and evaluates resumes based on job
                requirements, ensuring you find the best candidates faster.
              </p>
            </div>
          </div>

          <div className="flex bg-fuchsia-100 p-5 rounded-2xl items-start gap-4">
            <FaClipboardCheck className="text-[#A64D79] w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Automated Candidate Shortlisting
              </h3>
              <p className="text-gray-600 text-sm">
                Automatically filter and rank resumes based on qualifications,
                skills, and experience, saving valuable time.
              </p>
            </div>
          </div>

          <div className="flex bg-fuchsia-100 p-5 rounded-2xl items-start gap-4">
            <FaChartLine className="text-[#A64D79] w-6 h-6 " />
              
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Data-Driven Insights & Reports
              </h3>
              <p className="text-gray-600 text-sm">
                Get comprehensive analytics on candidate trends, skill gaps, and
                hiring efficiency to improve decision-making.
              </p>
            </div>
          </div>
        </div>
        <button 
        onClick={handleResumeScreening}
        className="bg-transparent border-2 hover:bg-[#A64D79] mt-5 border-[#C8ACD6] px-6 py-3 rounded  hover:text-white">Screen your resume</button>


      </div>
      <div className="w-full p-15 md:w-1/2">
        <img
         // src="https://media.istockphoto.com/id/1034198748/vector/cv-resume-job-interview-concept-writing-a-resume.jpg?s=612x612&w=0&k=20&c=tLDTQNhZmWJynY2wr33033Ti1WRAEz_0jagF41dHxCE="
          src={img}
          alt="Resume Screening"
          className=" w-full h-100 object-cover"
        />
      </div>
    </div>
  );
};

export default Homescreen;
