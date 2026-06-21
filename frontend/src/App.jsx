import React from 'react';
import { Leaf, Sun, Sprout, ArrowRight } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Landscape Image Background sliding up first */}
      <div className="landscape-bg animate-landscape"></div>

      {/* Top White Section sliding down from top */}
      <div className="top-section animate-slide-down">
        {/* Top Header */}
        <header className="header animate-fade-in-delayed">
          <div className="logo-container">
            <Leaf className="logo-icon" size={28} />
            <h1 className="logo-text">Hopemo</h1>
          </div>
          <p className="subtitle">your emotional companion</p>
        </header>

        {/* Main Content */}
        <main className="main-content animate-fade-in-delayed">
          <h2 className="title">
            A space that listens<br />
            without judgment
          </h2>
          
          <p className="description">
            Hopemo helps you understand your<br />
            emotions, build resilience, and grow —<br />
            one gentle conversation at a time.
          </p>
        </main>
      </div>

      {/* Bottom Card overlapping landscape */}
      <div className="bottom-card-container">
        <div className="trusted-card animate-slide-up-card">
          <p className="trusted-title animate-fade-in-delayed">Trusted by people seeking:</p>
          
          <div className="features-grid">
            <div className="feature-item animate-bounce-up">
              <Leaf className="feature-icon leaf-icon" size={24} />
              <span>More calm</span>
            </div>
            <div className="feature-item animate-bounce-up">
              <Sun className="feature-icon sun-icon" size={24} />
              <span>More clarity</span>
            </div>
            <div className="feature-item animate-bounce-up">
              <Sprout className="feature-icon sprout-icon" size={24} />
              <span>More hope</span>
            </div>
          </div>
          
          <div className="buttons-container animate-slide-up-buttons">
            <button className="btn-primary">
              Get started
              <ArrowRight size={20} />
            </button>
            
            <button className="btn-secondary">
              I already have an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
