import React from "react";
import { NavBar } from "./Navigation.js";

const PlayersPage = () => {
    return (
        <>
            <nav>
                <a href="index.html"><img src="imgs/FantasyFootballLogo.png" alt="Home" /></a>
                <ul>
                    <li><a href="league.html">League</a></li>
                    <li><a href="schedule.html">Schedule</a></li>
                    <li><a href="matchup.html">Matchup</a></li>
                    <li><a href="players.html">Players</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </nav>
            <header>
                <h1>Players</h1>
            </header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <img src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-10/patrick-mahomes-020221-getty-ftrjpg_1cd4z4o4rotcf1hqbou86f7lru.jpg?itok=uDvRkiGV" className="card-img-top" alt="Patrick Mahomes" />
                            <div className="card-body">
                                <h2 className="card-title">Patrick Mahomes</h2>
                                <p className="card-text">QB - Kansas City Chiefs</p>
                                <p className="card-text">Additional info or stats</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <img src="https://cdn.vox-cdn.com/thumbor/LSFpoGLta6--lVonJLt1tV5G384=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24018462/usa_today_19037371.jpg" className="card-img-top" alt="Geno Smith" />
                                <div className="card-body">
                                    <h2 className="card-title">Geno Smith</h2>
                                    <p className="card-text">QB - Seattle Seahawks</p>
                                    <p className="card-text">Additional info or stats</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2023 Fantasy Football Standings. All rights reserved. | <a href="mailto:contact@fantasyfootball.com">contact@fantasyfootball.com</a></p>
            </footer>
        </>
    );
}

export default PlayersPage;