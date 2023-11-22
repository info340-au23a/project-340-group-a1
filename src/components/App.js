import React, { useState } from 'react'; //import React Component
import HomePage from "./HomePage.js"
import LeaguePage from './LeaguePage';
import ScheduleTable from './SchedulePage.js';
import MatchupTable from './MatchupPage.js';
import PlayersPage from './PlayersPage.js';
import { NavBar } from './Navigation.js';
import { Footer } from './StaticComponents.js';

import fakePlayerData from "../data/fake-player-data.json";
import { Routes, Route } from 'react-router-dom';

function App(props) {
  const [playerData, setPlayerData] = useState(fakePlayerData);

  const addPlayer = (name, yards, touchdowns, position, team) => {
    const newPlayer = {
      "playerName": name,
      "position": position,
      "team": team,
      "yards": yards,
      "touchdowns": touchdowns,
      "score": 21.0,
    }
    const newPlayerData = [...playerData, newPlayer];
    setPlayerData(newPlayerData);
  }

  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/home/:dashtab?/*" element={<HomePage />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/schedule" element={<ScheduleTable />} />
          <Route path="/matchup" element={<MatchupTable />} />
          <Route path="/players" element={<PlayersPage playerData={playerData} addPlayerFunction={addPlayer}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
