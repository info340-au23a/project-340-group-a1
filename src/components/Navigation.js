import React from "react";
import { Link } from "react-router-dom"

// Navigation Bar
export function NavBar(props) {
    return(
        <div className="navigationBar">
            <nav>
                {/* Page Logo */}
                <Link to="/"><img src="imgs/FantasyFootballLogo.png" alt="Home" /></Link>
                {/* tab to different pages */}
                <ul>
                    <li>
                        <Link to="/league">League</Link>
                    </li>
                    <li>
                        <Link to="/schedule">Schedule</Link>
                    </li>
                    <li>
                        <Link to="/matchup">Matchup</Link>
                    </li>
                    <li>
                        <Link to="/players">Players</Link>
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </nav>
        </div>
    )
}