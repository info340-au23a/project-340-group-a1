import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navigation Bar
export function NavBar(props) {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navigationBar">
            <MobileLinks showMenu={showMenu} />
            <nav>
                {/* Page Logo */}
                <Link to="/home"><img src="imgs/FantasyFootballLogo.png" alt="Home" /></Link>

                {/* Hamburger Logo */}
                <a href="#!" className="icon" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </a>

                {/* Navigation links */}
                {/* <ul className={showMenu ? "nav-menu active" : "nav-menu"}> */}
                <ul className="linkMenu">
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
                        <Link to="/sign-in">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function MobileLinks(props) {
    if(props.showMenu) {
        return (
            <ul className="mobileLinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
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
                    <Link to="/sign-in">Login</Link>
                </li>
            </ul>
        )
    }
}