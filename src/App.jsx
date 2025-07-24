import { useEffect, useState } from 'react';
import TeamCard from './components/TeamCard.jsx';
import './App.css';

function App() {
  const [visibleTeam, setVisibleTeam] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const toggleDetails = (id) => {
    setVisibleTeam((prev) => (prev === id ? null : id));
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  const teams = [
    {
      id: 1,
      name: 'The Hawks',
      summary: 'Top of the league with 10 wins',
      details: 'They’ve dominated this season with consistent defense and strategic plays.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2936/2936882.png',
    },
    {
      id: 2,
      name: 'The Chargers',
      summary: 'Fierce rivals, known for comeback games',
      details: 'The Chargers are notorious for second-half turnarounds and aggressive tactics.',
      logo: 'https://cdn-icons-png.flaticon.com/512/1972/1972697.png',
    },
    {
      id: 3,
      name: 'The Titans',
      summary: 'Defending champions',
      details: 'Known for their powerful offense and loyal fanbase.',
      logo: 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png',
    },
  ];

  return (
    <>
      <header>
        <h1>Sports Central</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
      </header>

      <div className="hero">
        <h2>Welcome to the Home of Sports</h2>
        <p>Track scores, fixtures, and highlights across all sports.</p>
      </div>

      <section className="section">
        <h3>Featured Teams</h3>
        <div className="card-grid">
          {teams.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              index={index}
              isVisible={visibleTeam === team.id}
              toggleDetails={toggleDetails}
            />
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Sports Central. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
