import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app-container">

      {/* Content on top of background */}
      <div className="content-wrapper">

        {/* Top Header */}
        <header className="header">
          <div className="logo-container">
            <Leaf className="logo-icon" size={28} />
            <h1 className="logo-text">Hopemo</h1>
          </div>
          <p className="subtitle">your emotional companion</p>
        </header>

        {/* Main Content */}
        <main className="main-content">
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

        {/* Spacer to push card to bottom */}
        <div className="spacer"></div>

        {/* Bottom Buttons Card */}
        <div className="bottom-card-container">
          <div className="trusted-card">
            <div className="buttons-container">
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
    </div>
  );
}

export default App;
