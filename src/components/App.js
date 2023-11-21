import React, { useState } from 'react'; //import React Component
import HomePage from "./HomePage.js"
import ScheduleTable from './Schedule.js';
import MatchupTable from './Matchup.js';
import LeaguePage from './LeaguePage';
import PlayersPage from './Players.js';
import { NavBar } from './Navigation.js';
import fakePlayerData from "../data/fake-player-data.json";
import { Routes, Route } from 'react-router-dom';

function App(props) {
  const [playerData, setPlayerData] = useState(fakePlayerData);

  return (
    <div>
      <NavBar />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/schedule" element={<ScheduleTable />} />
          <Route path="/matchup" element={<MatchupTable />} />
          <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </div>
  )
}

export default App;
