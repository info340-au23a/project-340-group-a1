import React from "react";
import { Link } from "react-router-dom";

// Navigation Bar
export function NavBar(props) {
    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    return(
        <div className="navigationBar">
            <nav>
                {/* Page Logo */}
                <Link to="/home"><img src="imgs/FantasyFootballLogo.png" alt="Home" /></Link>
                {/* Hamburger Logo */}
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
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
                    {/* <li>
                        Login
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}