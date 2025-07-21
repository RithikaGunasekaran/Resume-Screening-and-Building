import { FaCheckCircle, FaPalette, FaFileAlt } from "react-icons/fa";
import myimg from "../assets/build.png"
const Homebuild = () => {
  return (
    <div className="flex bg-fuchsia-50 flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12">
      {/* Left Image Section */}
      <div className="w-full m-15 md:w-1/2">
        <img
          src={myimg}
          alt="Resume Builder"
          className="  w-full h-100 object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full  md:w-1/2">
        <p className="text-[#A64D79] uppercase font-semibold text-sm">
          Build Your Perfect Resume
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Create a Standout Resume with Our Features
        </h2>
        <a href="#" className="text-gray-600 mt-4 inline-block hover:underline">
          Learn More →
        </a>

        {/* Resume Features List */}
        <div className="mt-6 space-y-6">
          <div className="flex bg-fuchsia-100 p-5 rounded-2xl items-start gap-4">
            <FaCheckCircle className="text-[#A64D79] w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Pre-designed Resume Templates
              </h3>
              <p className="text-gray-600 text-sm">
                Choose from a variety of professionally designed resume templates
                that suit different industries and job roles.
              </p>
            </div>
          </div>

          <div className="flex bg-fuchsia-100 p-5 rounded-2xl items-start gap-4">
            <FaPalette className="text-[#A64D79] w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Customizable Design & Colors
              </h3>
              <p className="text-gray-600 text-sm">
                Personalize your resume by selecting colors, fonts, and layouts
                to make it visually appealing and unique.
              </p>
            </div>
          </div>

          <div className="flex bg-fuchsia-100 p-5 rounded-2xl items-start gap-4">
            <FaFileAlt className="text-[#A64D79] w-6 h-6 " />
              
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Real-Time Content Suggestions
              </h3>
              <p className="text-gray-600 text-sm">
                Get AI-powered suggestions for optimizing your resume content,
                including skills, experience, and keywords.
              </p>
            </div>
          </div>
        </div>
        <button 
  onClick={() => window.open("http://localhost:5173", "_blank")}
  className="bg-transparent border-2 hover:bg-[#A64D79] mt-5 border-[#C8ACD6] px-6 py-3 rounded hover:text-white"
>
  Build your resume
</button>


      </div>
    </div>
  );
};

export default Homebuild;
