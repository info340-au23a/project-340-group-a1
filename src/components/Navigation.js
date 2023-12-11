import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';

// Navigation Bar
export function NavBar(props) {
    const currentUser = props.currentUser;
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleSignOut = (event) => {
        signOut(getAuth());
    }

    return (
        <div className="navigationBar">
            <MobileLinks showMenu={showMenu} currentUser={currentUser} signOutFunction={handleSignOut}/>
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
                    {currentUser.userId &&
                        <>
                            <li>
                                <Link to="/profile">
                                    <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                            </li>
                        </>
                    }
                    {!currentUser.userId &&
                        <li>
                            <Link to="/sign-in">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
}

function MobileLinks(props) {
    if (props.showMenu) {
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
                {props.currentUser.userId &&
                    <>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <button onClick={props.signOutFunction}>Sign Out</button>
                        </li>
                    </>
                }
                {!props.currentUser.userId &&
                    <li>
                        <Link to="/sign-in">Login</Link>
                    </li>
                }
            </ul>
        )
    }
}