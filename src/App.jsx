import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MemeCard from './components/MemeCard';
import RatingSystem from './components/RatingSystem';

function App() {
  const [allMemes, setAllMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem('memeRatings');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setAllMemes(data.data.memes);
          console.log(data.data.memes)
          // Pick a random one initially
          const randomMeme = data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
          setCurrentMeme(randomMeme);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch memes", err);
        setLoading(false);
      });
  }, []);

  const generateMeme = () => {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setCurrentMeme(randomMeme);
  };

  const handleRate = (value) => {
    if (!currentMeme) return;

    const newRatings = {
      ...ratings,
      [currentMeme.id]: value
    };

    setRatings(newRatings);
    localStorage.setItem('memeRatings', JSON.stringify(newRatings));
  };

  const getCurrentRating = () => {
    if (!currentMeme) return null;
    return ratings[currentMeme.id];
  };

  return (
    <div className="App">
      <Header />
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        paddingBottom: '3rem'
      }}>
        {loading ? (
          <p style={{ color: 'var(--text-secondary)' }}>Loading meme library...</p>
        ) : (
          <>
            {currentMeme && <MemeCard meme={currentMeme} />}

            <RatingSystem
              currentRating={getCurrentRating()}
              onRate={handleRate}
            />

            <button
              onClick={generateMeme}
              style={{
                marginTop: '2rem',
                padding: '1rem 3rem',
                fontSize: '1.25rem',
                fontWeight: '700',
                background: 'var(--accent-gradient)',
                color: '#fff',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-glow)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Generate New Meme ✨
            </button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
