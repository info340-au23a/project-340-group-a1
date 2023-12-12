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

import fakePlayerData from "../data/fake-player-data.json";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getDatabase, ref, update as firebaseUpdate, push as firebasePush, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import TEST_USERS from '../data/users.json';

function App(props) {
  /* KEY FOR API STUFF: a2ecfca222414704ac1b4666b877f1e8 */
  // pulls schedule data for the current year
  const scheduleData = "https://api.sportsdata.io/v3/nfl/scores/json/SchedulesBasic/" + new Date().getFullYear() + "?key=a2ecfca222414704ac1b4666b877f1e8";
  const teamPlayerData = "https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/" + /* team name */ + "?key=a2ecfca222414704ac1b4666b877f1e8"
  
  // State variables
  const [currentUser, setCurrentUser] = useState(TEST_USERS[0]);
  const [fantasyDataArray, setFantasyDataArray] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  console.log("currentUser: "+currentUser);
  // console.log(fantasyDataArray);

  const navigateTo = useNavigate(); //navigation hook

  //Sign-in Page
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, function(firebaseUser) {
      console.log("firebaseUser: " + firebaseUser);

      if(firebaseUser === null) { //logged out
        setCurrentUser(TEST_USERS[0]);
      } else { // logged in
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "imgs/barstool.jpeg";
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

  // updates realtime database
  const changeTeamName = (userObj, text) => {
    const newUserObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "TeamName": text
    }
    // const newTeamObj = [...messageStateArray, newMessageObj];
    // setMessageStateArray(newMessageArray); //update state & rerender

    /// ADD message to database /// UPDATE DATABASE ///
    const db = getDatabase();
    const AllUserDataRef = ref(db, "AllUserData");
    
    firebaseUpdate(AllUserDataRef, newUserObj);
    
  }
  changeTeamName(currentUser, "Trevor Team");

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
      const url = `https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/${team}?key=6c483ba7d49746c5848dc41d70c44d19`;
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

  const changeUser = (userObj) => {
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/'); //go to home after login
    }
  }

  // useEffect to call fetchPlayerData on component mount
  useEffect(() => {
    fetchPlayerData();
  }, []);

  return (
    <div>
      <NavBar currentUser={currentUser}/>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home/:dashtab?" element={<HomePage />} />
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/schedule" element={<ScheduleTable />} />
          <Route path="/matchup" element={<MatchupTable />} />
          <Route path="/players" element={<PlayersPage playerData={playerData} addPlayerFunction={addPlayer}/>} />
          <Route path="/profile" element={<ProfilePage currentUser={currentUser} />} />
          <Route path="/sign-in" element={<SignInPage currentUser={currentUser} setUser={changeUser} />} />
          <Route path="*" element={<Static.ErrorPage />} />

      </Routes>
      <Static.Footer />
    </div>
  )
}

export default App;