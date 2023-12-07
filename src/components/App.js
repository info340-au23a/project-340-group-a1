import React, { useEffect, useState } from 'react'; //import React Component
import HomePage from "./HomePage.js"
import LeaguePage from './LeaguePage';
import ScheduleTable from './SchedulePage.js';
import MatchupTable from './MatchupPage.js';
import PlayersPage from './PlayersPage.js';
import { NavBar } from './Navigation.js';
import { Footer } from './StaticComponents.js';

import fakePlayerData from "../data/fake-player-data.json";
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

function App(props) {
  /* KEY FOR API STUFF: a2ecfca222414704ac1b4666b877f1e8 */
  // pulls schedule data for the current year
  const scheduleData = "https://api.sportsdata.io/v3/nfl/scores/json/SchedulesBasic/" + new Date().getFullYear() + "?key=a2ecfca222414704ac1b4666b877f1e8";
  // const teamPlayerData = "https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/" + /* team name */ + "?key=a2ecfca222414704ac1b4666b877f1e8"
  

  

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
          <Route path="/home?/:dashtab?/*" element={<HomePage />} />
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
