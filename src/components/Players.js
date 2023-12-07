import React from 'react';
import PlayerCard from './PlayerCard';

export default function PlayersPage(props) {

    return (
        <div className="players-page">

            <header className="players-header">
                <h1>Players</h1>
            </header>

            {/* Main content */}
            <main className="players-main">
                <div className="players-container">
                    <div className="players-row">
                        <PlayerCard 
                            imageUrl="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-10/patrick-mahomes-020221-getty-ftrjpg_1cd4z4o4rotcf1hqbou86f7lru.jpg?itok=uDvRkiGV" 
                            name="Patrick Mahomes" 
                            position="QB" 
                            team="Kansas City Chiefs" 
                            additionalInfo="Additional info or stats"
                        />
                        <PlayerCard 
                            imageUrl="https://cdn.vox-cdn.com/thumbor/LSFpoGLta6--lVonJLt1tV5G384=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24018462/usa_today_19037371.jpg" 
                            name="Geno Smith" 
                            position="QB" 
                            team="Seattle Seahawks" 
                            additionalInfo="Additional info or stats"
                        />
                    </div>
                </div>
            </main>


            <div>
            <form id="playerForm">
                <label for="addPlayer">Player Name:</label>
                <input type="text" id="addPlayer" placeholder="Enter player name" required/>
                <label for="yards">Yards:</label>
                <input type="number" id="yards" placeholder="Enter yards" />
                <label for="touchdowns">Touchdowns:</label>
                <input type="number" id="touchdowns" placeholder="Enter touchdowns" />
                <label for="position">Position:</label>
                <input type="text" id="position" placeholder="Enter position" />
                <label for="team">Team:</label>
                <input type="text" id="team" placeholder="Enter team name" />
                <button type="button" onclick="addPlayer()">Add Player</button>
            </form>
            </div>

            <footer className="players-footer">
                <p>&copy; 2023 Fantasy Football Standings. All rights reserved. | <a href="mailto:contact@fantasyfootball.com">contact@fantasyfootball.com</a></p>
            </footer>
        </div>
    );
}

