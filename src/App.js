import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ActionHubPage from './pages/ActionHubPage';
import CommunityPage from './pages/CommunityPage';
import GalleryPage from './pages/GalleryPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/act" element={<ActionHubPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
