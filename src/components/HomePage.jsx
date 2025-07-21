import React from 'react';
import Footer from './Footer';
import Homebuild from './Homebuild';
import Homefeatures from './Homefeatures';
import Homescreen from './Homescreen';
import img from "../assets/main1.png"

const HomePage = () => {
    return (
        <div className="font-sans">
            {/* Header Section */}
            <header className="bg-[#1A1A1D]  text-white py-6 px-10 flex justify-between items-center">
                <div className="text-2xl  font-bold">Resume360</div>
                <nav className="flex  space-x-6">
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#features" className="hover:underline">Features</a>
                    <a href="#pricing" className="hover:underline">Pricing</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
                <button className="bg-white text-blue-900 px-4 py-2 rounded">Download</button>
            </header>

            {/* Hero Section */}
            <section className="bg-[#1A1A1D] text-white p-10  flex items-center justify-between">
                <div className='ml-8 mr-6'>
                    <h1 className="text-4xl font-extrabold  mb-4">
                    Build & Screen Your Resume with Ease
                    </h1>
                    <p className="mb-6">
                    Our AI-driven platform provides powerful tools to build a professional resume and screen it for ATS compatibility.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-[#C8ACD6] hover:bg-blue-700 text-white px-6 py-3 rounded">Get Started</button>
                        <button className="bg-transparent border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-blue-900">See Pricing</button>
                    </div>
                </div>
                <img src={img} className="w-1/3" />
            </section>

            <Homefeatures />            
            <Homebuild />
            <Homescreen />
            <Footer />
        </div>
    );
};

export default HomePage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const navigate = useNavigate();

//     const handleResumeScreening = () => {
//         // Redirect to the Flask app
//         window.location.href = 'http://localhost:5000';  // Ensure Flask is running here
//     };

//     const handleResumeBuilder = () => {
//         navigate('/resume-builder');
//     };

//     return (
//         <div>
//         <h1 className="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//             <h1>Welcome to the Resume Platform</h1>
//             <button onClick={handleResumeScreening}>Go to Resume Screening</button>
//             <button onClick={handleResumeBuilder} style={{ marginLeft: '20px' }}>
//                 Go to Resume Builder
//             </button>
//         </div>
//     );
// };

// export default HomePage;
