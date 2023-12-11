import React from 'react';
import { Link } from "react-router-dom";

export function Footer(props) {
    return(
        <footer className="footer">
            <p>&copy; 2023 Fantasy Football 340 Version A1. All rights reserved. | <a href="mailto:contact@fantasyfootball.com">contact@fantasyfootball.com</a></p>
        </footer>
    )
}

export function ErrorPage(props) {
    return(
        <div>
            <h1>The page you are looking for does not exist</h1>
            <main>
                <h2>Links to Rest of the Web App:</h2>
                <ul>
                    <li><Link to="/home">Back to Home</Link></li>
                    <li><Link to="/league">League</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/matchup">Matchup</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/sign-in">Login</Link></li>
                </ul>
            </main>
        </div>
    )
}