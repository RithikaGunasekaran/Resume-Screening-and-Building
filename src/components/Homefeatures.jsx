import React from 'react';
import { IoTimeOutline, IoPersonAddOutline, IoSearchOutline, IoDocumentTextOutline, IoSettingsOutline, IoTrendingUpOutline, IoShieldCheckmarkOutline, IoCloudDownloadOutline } from "react-icons/io5";

const Homefeatures = () => {
  return (
    <section id="services" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our powerful resume-building and screening features.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Feature 1: Quick and Efficient */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100  p-3 rounded-full mb-4">
            <IoTimeOutline size={48} />
          </div>
          <h3 className="font-bold">Quick and Efficient</h3>
          <p className="text-gray-600 text-center">
            Create a professional resume with customizable templates quickly.
          </p>
        </div>

        {/* Feature 2: AI-Powered Screening */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoSearchOutline size={48} />
          </div>
          <h3 className="font-bold">AI-Powered Screening</h3>
          <p className="text-gray-600 text-center">
            Instantly analyze resumes to match job requirements efficiently.
          </p>
        </div>

        {/* Feature 3: Auto Candidate Shortlisting */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoPersonAddOutline size={48} />
          </div>
          <h3 className="font-bold">Auto Shortlisting</h3>
          <p className="text-gray-600 text-center">
            Automatically filter candidates based on skills and experience.
          </p>
        </div>

        {/* Feature 4: Pre-designed Templates */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoDocumentTextOutline size={48} />
          </div>
          <h3 className="font-bold">Pre-designed Templates</h3>
          <p className="text-gray-600 text-center">
            Choose from a variety of resume templates for different industries.
          </p>
        </div>

        {/* Feature 5: Customization Options */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoSettingsOutline size={48} />
          </div>
          <h3 className="font-bold">Customization Options</h3>
          <p className="text-gray-600 text-center">
            Personalize colors, fonts, and layout to match your style.
          </p>
        </div>

        {/* Feature 6: Performance Analytics */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoTrendingUpOutline size={48} />
          </div>
          <h3 className="font-bold">Performance Analytics</h3>
          <p className="text-gray-600 text-center">
            Gain insights with analytics on resume trends and hiring efficiency.
          </p>
        </div>

        {/* Feature 7: Security & Privacy */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoShieldCheckmarkOutline size={48} />
          </div>
          <h3 className="font-bold">Security & Privacy</h3>
          <p className="text-gray-600 text-center">
            Keep your data secure with encrypted resume storage and protection.
          </p>
        </div>

        {/* Feature 8: Easy Download & Sharing */}
        <div className="flex flex-col items-center">
          <div className="bg-fuchsia-100 p-3 rounded-full mb-4">
            <IoCloudDownloadOutline size={48} />
          </div>
          <h3 className="font-bold">Easy Download & Sharing</h3>
          <p className="text-gray-600 text-center">
            Download resumes in PDF or share directly via email and social media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Homefeatures;
