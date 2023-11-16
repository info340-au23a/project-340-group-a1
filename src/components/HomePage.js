import React from "react";
import { NavBar } from "./Navigation.js";

export default function HomePage(props) {
    return(
        <div className="HomePage">
        <NavBar />
        <h1>Fantasy Football</h1>
            <div className="homePageContent">
                <div className="myTeam">
                    <h2>My Team</h2>
                    <div className="myTeamSummary">
                        <div className="myTeamRecord">
                            <h3>Record</h3>
                            {/* add record here */}
                            <p>4-2-0</p>
                        </div>
                        <div className="myTeamLastMatchup">
                            <h3>Last Matchup</h3>
                            {/* add last matchup here */}
                            <p>Team F</p>
                        </div>
                        <div className="myTeamNextMatchup">
                            <h3>Next Matchup</h3>
                            {/* add next matchup here */}
                            <p>Team J</p>
                        </div>
                    </div>
                </div>

                <div className="dashboardContainer">
                    <h2>Dashboard</h2>
                    <div class="dashboard">
                        {/* Dash Tab links */}
                        <div class="dash-tabs">
                            <button class="dash-tablinks">Overview</button>
                            <button class="dash-tablinks">Ranks</button>
                            <button class="dash-tablinks">My Stats</button>
                        </div>
                        {/* <Dash Tab content */}
                        <div id="Overview" class="dashcontent">
                            <h3>Overview</h3>
                            <p>Overview content (probably table)</p>
                        </div>
                        <div id="Ranks" class="dashcontent">
                            <h3>Ranks</h3>
                            <p>Ranks content (probably table)</p>
                        </div>
                        <div id="myStats" class="dashcontent">
                            <h3>My Stats</h3>
                            <p>My Stats content (probably table)</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}