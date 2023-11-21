import React from 'react'; //import React Component
import HomePage from "./HomePage.js"
import ScheduleTable from './Schedule.js';
import MatchupTable from './Matchup.js';
import LeaguePage from './LeaguePage';
import PlayersPage from './Players.js';

import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="league" element={<LeaguePage />} />
        <Route path="schedule" element={<ScheduleTable />} />
        <Route path="matchup" element={<MatchupTable />} />
        <Route path="players" element={<PlayersPage />} />
      </Routes>
  )
}

export default App;
