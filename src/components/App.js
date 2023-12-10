import React, { useEffect, useState } from 'react'; //import React Component
import HomePage from "./HomePage.js"
import LeaguePage from './LeaguePage';
import ScheduleTable from './SchedulePage.js';
import MatchupTable from './MatchupPage.js';
import PlayersPage from './PlayersPage.js';
import SignInPage from './SignInPage.js';
import { NavBar } from './Navigation.js';
import * as Static from './StaticComponents.js';

import fakePlayerData from "../data/fake-player-data.json";
import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App(props) {
  /* KEY FOR API STUFF: a2ecfca222414704ac1b4666b877f1e8 */
  // pulls schedule data for the current year
  const scheduleData = "https://api.sportsdata.io/v3/nfl/scores/json/SchedulesBasic/" + new Date().getFullYear() + "?key=a2ecfca222414704ac1b4666b877f1e8";
  // const teamPlayerData = "https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/" + /* team name */ + "?key=a2ecfca222414704ac1b4666b877f1e8"
  
  // State variables
  const [currentUser, setCurrentUser] = useState(null);
  const [fantasyDataArray, setFantasyDataArray] = useState([]);
  console.log(currentUser);
  console.log(fantasyDataArray);

  //Sign-in Page
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, function(firebaseUser) {
      if(firebaseUser === null) { //logged out
        setCurrentUser(null);
      } else { // logged in
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        setCurrentUser(firebaseUser);
      }
    })
  }, [])

   /// Set up database listener /// READS DATABASE ///
   useEffect(() => {
    const db = getDatabase();
    const allUserDataRef = ref(db, "AllUserData");

    onValue(allUserDataRef, function(snapshot) { // snapshot of what the database currently looks like after the change
      const allUserDataRef = snapshot.val();
      
      const keyArray = Object.keys(allUserDataRef); // make an array of all the "unique" keys

      const allUserDataArray = keyArray.map((keyString) => {
        const userDataObj = allUserDataRef[keyString];
        userDataObj.firebasekey = keyString;
        return userDataObj;
      });
      
      //update database state
      setFantasyDataArray(allUserDataArray);
    });
  }, []);

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
          <Route path="/" element={<HomePage />} />
          <Route path="/home/:dashtab?" element={<HomePage />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/schedule" element={<ScheduleTable />} />
          <Route path="/matchup" element={<MatchupTable />} />
          <Route path="/players" element={<PlayersPage playerData={playerData} addPlayerFunction={addPlayer}/>} />
          <Route path="/sign-in" element={<SignInPage setUser={setCurrentUser} />} />
          <Route path="*" element={<Static.ErrorPage />} />        
      </Routes>
      <Static.Footer />
    </div>
  )
}

export default App;
