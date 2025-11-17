import { useState, useEffect } from 'react'
import './App.css'

interface PetFact {
  emoji: string;
  fact: string;
}

const petFacts: PetFact[] = [
  { emoji: "🐕", fact: "Dogs can learn over 100 words and gestures!" },
  { emoji: "🐈", fact: "Cats sleep for 12-16 hours a day on average." },
  { emoji: "🐰", fact: "Rabbits can jump nearly 3 feet high!" },
  { emoji: "🐹", fact: "Hamsters can run up to 5 miles per night on their wheel!" },
  { emoji: "🐦", fact: "Birds are direct descendants of dinosaurs!" },
  { emoji: "🐠", fact: "Goldfish can recognize their owners' faces!" },
  { emoji: "🐢", fact: "Turtles have been around for over 200 million years!" },
  { emoji: "🐇", fact: "Bunnies purr when they're happy, just like cats!" },
  { emoji: "🦎", fact: "Geckos can walk upside down on ceilings!" },
  { emoji: "🐴", fact: "Horses can sleep both lying down and standing up!" }
];

function App() {
  const [currentFact, setCurrentFact] = useState<PetFact>(petFacts[0]);
  const [petCount, setPetCount] = useState<number>(0);

  useEffect(() => {
    // Load pet count from Chrome storage
    chrome.storage.local.get(['petCount'], (result) => {
      if (result.petCount) {
        setPetCount(result.petCount);
      }
    });
  }, []);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * petFacts.length);
    setCurrentFact(petFacts[randomIndex]);
  };

  const petThePet = () => {
    const newCount = petCount + 1;
    setPetCount(newCount);
    chrome.storage.local.set({ petCount: newCount });
  };

  return (
    <div className="app">
      <div className="header">
        <h1>🐾 Pets are the Best! 🐾</h1>
        <p className="subtitle">Your daily dose of pet love</p>
      </div>
      
      <div className="pet-card">
        <div className="pet-emoji">{currentFact.emoji}</div>
        <p className="pet-fact">{currentFact.fact}</p>
        <button className="btn-primary" onClick={getRandomFact}>
          Show me another pet fact! 🎲
        </button>
      </div>

      <div className="counter-section">
        <p className="counter-label">Times you've petted a pet today:</p>
        <div className="counter">{petCount}</div>
        <button className="btn-secondary" onClick={petThePet}>
          Pet a pet! 🤗
        </button>
      </div>

      <div className="footer">
        <p>Made with ❤️ for all pet lovers</p>
      </div>
    </div>
  )
}

export default App
