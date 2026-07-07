import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './MoodCheckin.css';

const moods = [
  {
    id: 'overwhelmed',
    label: 'Overwhelmed',
    desc: 'Feeling stressed\nor mentally full',
    img: '/mood_overwhelmed.png',
    color: '#FADADD',
    border: '#F4A7B9',
  },
  {
    id: 'happy',
    label: 'Happy & grateful',
    desc: 'Feeling good and\nappreciative',
    img: '/mood_happy.png',
    color: '#FFF9C4',
    border: '#FFD54F',
  },
  {
    id: 'calm',
    label: 'Calm & balanced',
    desc: 'Feeling peaceful\nand in control',
    img: '/mood_calm.png',
    color: '#DCEDC8',
    border: '#AED581',
  },
  {
    id: 'loved',
    label: 'Loved & supported',
    desc: 'Feeling cared for\nand understood',
    img: '/mood_loved.png',
    color: '#E8F5E9',
    border: '#81C784',
  },
  {
    id: 'anxious',
    label: 'Anxious',
    desc: 'Feeling worried\nor restless',
    img: '/mood_anxious.png',
    color: '#FFF8E1',
    border: '#FFD740',
  },
  {
    id: 'sad',
    label: 'Sad or low',
    desc: 'Feeling down\nor discouraged',
    img: '/mood_sad.png',
    color: '#E0F7FA',
    border: '#80DEEA',
  },
  {
    id: 'excited',
    label: 'Excited',
    desc: 'Feeling motivated\nand energized',
    img: null,
    emoji: '🤩',
    color: '#EDE7F6',
    border: '#CE93D8',
  },
  {
    id: 'numb',
    label: 'Numb or empty',
    desc: 'Feeling detached\nor unmotivated',
    img: null,
    emoji: '😶',
    color: '#F3E5F5',
    border: '#CE93D8',
  },
];

function MoodCheckin() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="checkin-container">

      {/* Nature scene top-right */}
      <div className="checkin-scene">
        <img src="/hopemo_bg.png" alt="scene" className="checkin-scene-img" />
      </div>

      {/* Scrollable content */}
      <div className="checkin-scroll">

        {/* Badge */}
        <div className="checkin-badge">
          <span>🍃</span>
          <span>Let's check in</span>
        </div>

        {/* Title */}
        <h1 className="checkin-title">
          How are you feeling <span className="checkin-title-green">right now?</span>
        </h1>
        <p className="checkin-subtitle">
          There's no right or wrong answer.<br />
          Just what's true for you today.
        </p>

        {/* Mood Grid */}
        <div className="mood-grid">
          {moods.map((mood) => (
            <button
              key={mood.id}
              className={`mood-card ${selected === mood.id ? 'mood-card--selected' : ''}`}
              style={{
                '--card-color': mood.color,
                '--card-border': mood.border,
              }}
              onClick={() => setSelected(mood.id)}
            >
              {/* Checkbox */}
              <span className={`mood-check ${selected === mood.id ? 'mood-check--active' : ''}`}>
                {selected === mood.id ? '✓' : ''}
              </span>

              {/* Emoji / Image */}
              <div className="mood-emoji">
                {mood.img ? (
                  <img src={mood.img} alt={mood.label} />
                ) : (
                  <span className="mood-emoji-text">{mood.emoji}</span>
                )}
              </div>

              {/* Label */}
              <p className="mood-label">{mood.label}</p>
              <p className="mood-desc">{mood.desc}</p>
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="checkin-buttons">
          <button
            className="checkin-btn-primary"
            onClick={() => selected && navigate('/tracker')}
            style={{ opacity: selected ? 1 : 0.6 }}
          >
            Get started
            <ArrowRight size={20} />
          </button>
          <button className="checkin-btn-secondary">
            I already have an account
          </button>
        </div>

        {/* Bottom scene */}
        <div className="checkin-bottom-scene">
          <img src="/hopemo_bg.png" alt="nature" />
        </div>

      </div>
    </div>
  );
}

export default MoodCheckin;
