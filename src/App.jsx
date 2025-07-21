import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume-builder" element={<ResumeBuilder />} />
            </Routes>
        </Router>
    );
}

export default App;
