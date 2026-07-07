import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart2, Edit3, ArrowRight } from 'lucide-react';
import './MoodTracker.css';

const moodCards = [
  {
    id: 'happy',
    label: 'HAPPY',
    img: '/mood_happy.png',
    emoji: '😊',
  },
  {
    id: 'sad',
    label: 'SAD',
    img: '/mood_overwhelmed.png',
    emoji: '😔',
  },
  {
    id: 'normal',
    label: 'NORMAL',
    img: '/mood_calm.png',
    emoji: '😐',
  },
  {
    id: 'anxious',
    label: 'ANXIOUS',
    img: '/mood_anxious.png',
    emoji: '😟',
  },
  {
    id: 'loved',
    label: 'LOVED',
    img: '/mood_loved.png',
    emoji: '🥰',
  },
];

function MoodTracker() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setActiveIndex((i) => Math.min(moodCards.length - 1, i + 1));

  return (
    <div className="tracker-container">

      {/* Full background nature scene */}
      <div className="tracker-bg">
        <img src="/hopemo_bg.png" alt="nature background" />
      </div>

      {/* Content */}
      <div className="tracker-content">

        {/* Header */}
        <div className="tracker-header">
          <button className="tracker-back-btn" onClick={() => navigate('/checkin')}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="tracker-title">Mood Tracker</h1>
          <button className="tracker-chart-btn">
            <BarChart2 size={22} color="#2B7A5C" />
          </button>
        </div>

        {/* Mood Carousel */}
        <div className="tracker-carousel-wrapper">
          <div className="tracker-carousel">
            {moodCards.map((mood, idx) => {
              const offset = idx - activeIndex;
              const isActive = idx === activeIndex;
              return (
                <div
                  key={mood.id}
                  className={`tracker-card ${isActive ? 'tracker-card--active' : ''}`}
                  style={{
                    transform: `translateX(calc(${offset * 90}px)) scale(${isActive ? 1 : 0.82})`,
                    opacity: Math.abs(offset) > 1 ? 0 : (isActive ? 1 : 0.65),
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <p className="tracker-card-label">{mood.label}</p>
                  <div className="tracker-card-emoji">
                    {mood.img ? (
                      <img src={mood.img} alt={mood.label} />
                    ) : (
                      <span>{mood.emoji}</span>
                    )}
                  </div>
                  <div className="tracker-card-status">
                    <span>Mood Added</span>
                    <span className="tracker-card-check">✓</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel nav arrows */}
          <button className="carousel-arrow carousel-arrow--left" onClick={handlePrev}>‹</button>
          <button className="carousel-arrow carousel-arrow--right" onClick={handleNext}>›</button>
        </div>

        {/* Dot pagination */}
        <div className="tracker-dots">
          {moodCards.map((_, idx) => (
            <span
              key={idx}
              className={`tracker-dot ${idx === activeIndex ? 'tracker-dot--active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* Today's Reflection Card */}
        <div className="tracker-reflection">
          <div className="tracker-reflection-header">
            <div className="tracker-reflection-title">
              <Edit3 size={16} color="#2B7A5C" />
              <span>Today's Reflection</span>
            </div>
            <span className="tracker-reflection-time">7:25 AM</span>
          </div>
          <p className="tracker-reflection-text">
            The grandchildren visited today and it was the absolute best! We baked cookies,
            laughed so much, and played my favorite card game.
          </p>
          <button className="tracker-reflection-btn" onClick={() => navigate('/')}>
            Get started
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default MoodTracker;
