import React from "react";
import HomeDashboard from "./HomeDashboard.js";

export default function HomePage(props) {
    return(
        <div className="HomePage">
            <header className="homeHeader">
                <h1>Fantasy Football</h1>
            </header>
            <main className="homePageContent">
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
            </main>
            

        </div>
    )
}