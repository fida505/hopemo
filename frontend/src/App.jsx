import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import MoodCheckin from './pages/MoodCheckin.jsx';
import MoodTracker from './pages/MoodTracker.jsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/checkin" element={<MoodCheckin />} />
      <Route path="/tracker" element={<MoodTracker />} />
    </Routes>
  );
}

export default App;
