import React from 'react';
import PlayerCard from './PlayerCard';

export default function PlayersPage() {
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

            <footer className="players-footer">
                <p>&copy; 2023 Fantasy Football Standings. All rights reserved. | <a href="mailto:contact@fantasyfootball.com">contact@fantasyfootball.com</a></p>
            </footer>
        </div>
    );
}