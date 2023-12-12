import React, { useEffect, useState } from 'react'; //import React Component
import HomePage from "./HomePage.js"
import LeaguePage from './LeaguePage';
import ScheduleTable from './SchedulePage.js';
import MatchupTable from './MatchupPage.js';
import PlayersPage from './PlayersPage.js';
import SignInPage from './SignInPage.js';
import ProfilePage from './ProfilePage.js';
import { NavBar } from './Navigation.js';
import * as Static from './StaticComponents.js';

import { Routes, Route } from 'react-router-dom';
import { getDatabase, ref, update as firebaseUpdate, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import TEST_USERS from '../data/users.json';

function App(props) {
 
  // State variables
  const [currentUser, setCurrentUser] = useState(TEST_USERS[0]);
  const [fantasyDataArray, setFantasyDataArray] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  const userData = fantasyDataArray.filter((user) => {
    return user.firebasekey === currentUser.uid;
  })[0];

  //Sign-in Page
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, function (firebaseUser) {
      if (firebaseUser === null) { //logged out
        setCurrentUser(TEST_USERS[0]);
      } else { // logged in
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "imgs/barstool.jpeg";
        firebaseUser.userName = firebaseUser.leagueName;
        setCurrentUser(firebaseUser);
      }
    })
  }, [])

  /// Set up database listener /// READS DATABASE ///
  useEffect(() => {
    const db = getDatabase();
    const allUserDataRef = ref(db, "AllUserData");

    onValue(allUserDataRef, function (snapshot) { // snapshot of what the database currently looks like after the change
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

  // updates realtime database with user information
  const changeTeamData = (userObj, teamText, leagueText, recordText) => {
    const newUserObj = {
      "userImg": userObj.userImg,
      "TeamName": teamText,
      "LeagueName": leagueText,
      "Record": recordText
    }
    // const newTeamObj = [...messageStateArray, newMessageObj];
    // setMessageStateArray(newMessageArray); //update state & rerender

    /// ADD message to database /// UPDATE DATABASE ///
    const db = getDatabase();
    const AllUserDataRef = ref(db, "AllUserData/" + userObj.uid);

    firebaseUpdate(AllUserDataRef, newUserObj);

  }

  // updates realtime database with player information
  const addPlayerData = (newPlayerName) => {

    const playerObj = newPlayerName

    /// ADD message to database /// UPDATE DATABASE ///
    const db = getDatabase();
    const AllUserDataRef = ref(db, "AllUserData/" + currentUser.userId + "/PlayerList");

    firebaseUpdate(AllUserDataRef, { playerObj });
  }

  const addPlayer = (firstName, lastName, yards, touchdowns, position, team, height, weight) => {
    const newPlayer = {
      "FirstName": firstName,
      "LastName": lastName,
      "Position": position,
      "Team": team,
      "Yards": yards,
      "Touchdowns": touchdowns,
      "Height": height,
      "Weight": weight,
      "PlayerID": weight + yards,
      "score": 21.0
    }
    const newPlayerData = [...playerData, newPlayer];
    setPlayerData(newPlayerData);
  }

  //fetchPlayer Data
  // List of NFL team abbreviations
  const nflTeams = ['ARI', 'ATL', 'BAL', 'BUF', 'CAR', 'CHI', 'CIN', 'CLE', 'DAL', 'DEN', 'DET', 'GB', 'HOU', 'IND', 'JAX', 'KC', 'LAC', 'LAR', 'LV', 'MIA', 'MIN', 'NE', 'NO', 'NYG', 'NYJ', 'PHI', 'PIT', 'SEA', 'SF', 'TB', 'TEN', 'WAS'];

  const fetchPlayerData = async () => {
    let allPlayerData = [];

    for (const team of nflTeams) {
      const url = `https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/${team}?key=f764a9ee4a1c4565bf1112a55006de65`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const teamData = await response.json();
        allPlayerData = allPlayerData.concat(teamData);
      } catch (error) {
        console.error('There has been a problem with your fetch operation for team ' + team + ':', error);
      }
    }

    setPlayerData(allPlayerData);
  }

  // useEffect to call fetchPlayerData on component mount
  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home/:dashtab?" element={<HomePage currentUser={currentUser} fantasyDataArray={fantasyDataArray} />} />
        <Route path="/league" element={<LeaguePage />} />
        <Route path="/schedule" element={<ScheduleTable />} />
        <Route path="/matchup" element={<MatchupTable />} />
        <Route path="/players" element={<PlayersPage playerData={playerData} addPlayerFunction={addPlayer} addToTeamFunction={addPlayerData} />} />
        <Route path="/profile" element={<ProfilePage currentUser={currentUser} fantasyDataArray={fantasyDataArray} changeTeamData={changeTeamData} />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="*" element={<Static.ErrorPage />} />

      </Routes>
      <Static.Footer />
    </div>
  )
}

export default App;