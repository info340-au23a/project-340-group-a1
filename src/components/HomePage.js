import React, { useState } from "react";
import { NavBar } from "./Navigation.js";

export default function HomePage(props) {
    return(
        <div className="HomePage">
            <NavBar />
            <header className="homeHeader">
                <h1>Fantasy Football</h1>
            </header>
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

                <HomeDashboard />
                
            </div>

        </div>
    )
}

function HomeDashboard(props) {
    const [currentTab, setCurrentTab] = useState("Overview");

    const handleClick = (event) => {
        setCurrentTab(event.target.name);
    }

    return(
        <div className="dashboardContainer">
            <h2>Dashboard</h2>
            <div className="dashboard">
                {/* Dash Tab links */}
                <div className="dash-tabs">
                    <button className="dash-tablinks" name="Overview" onClick={handleClick}>Overview</button>
                    <button className="dash-tablinks" name="Ranks" onClick={handleClick}>Ranks</button>
                    <button className="dash-tablinks" name="My Stats" onClick={handleClick}>My Stats</button>
                </div>
                {/* <Dash Tab content */}
                <HomeDashContent dashTab={currentTab} />
            </div>
        </div>
    )
}

function HomeDashContent(props) {
    const {dashTab} = props;
    return(
        <div id={dashTab} className="dashcontent">
            <h3>{dashTab}</h3>
            <p>{dashTab} content (probably table)</p>
        </div>
    )
}