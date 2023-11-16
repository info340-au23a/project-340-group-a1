import React from "react";

// Navigation Bar
export function NavBar(props) {
    return(
        <div className="navigationBar">
            <nav>
                {/* Page Logo */}
                <a href="index.html"><img src="imgs/FantasyFootballLogo.png" alt="Home" /></a>
                {/* tab to different pages */}
                <ul>
                    <li>
                        <a href="league.html">League</a>
                    </li>
                    <li>
                        <a href="schedule.html">Schedule</a>
                    </li>
                    <li>
                        <a href="matchup.html">Matchup</a>
                    </li>
                    <li>
                        <a href="players.html">Players</a>
                    </li>
                    <li>
                        <a href="login.html">Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}