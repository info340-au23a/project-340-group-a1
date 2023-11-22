import React from 'react';
import PlayerCard from './PlayerCard';

export default function PlayersPage(props) {
    const addPlayer = props.addPlayerFunction;
    const playerData = props.playerData;

    const playerList = playerData.map((player) => {
        const name = player.playerName;
        const position = player.position;
        const team = player.team;
        const imgUrl = player.imgUrl;
        return(
            <PlayerCard 
                imageUrl={imgUrl}
                playerName={name}
                position={position}
                team={team} 
                additionalInfo="Additional info or stats"
                key={name}
            />
        )
    });

    const handleSubmit = (event) => {
        const newPlayerName = document.getElementById('addPlayer').value;
        const newPlayerYards = document.getElementById('yards').value;
        const newPlayerTouchdowns = document.getElementById('touchdowns').value;
        const newPlayerPosition = document.getElementById('position').value;
        const newPlayerTeam = document.getElementById('team').value;
        addPlayer(newPlayerName, newPlayerYards, newPlayerTouchdowns, newPlayerPosition, newPlayerTeam);
    }

    return (
        <div className="players-page">

            <header className="players-header">
                <h1>Players</h1>
            </header>

            {/* Main content */}
            <main className="players-main">
                <div className="players-container">
                    <div className="players-row">
                        {playerList}
                    </div>
                </div>
            </main>


            <div>
            <form id="playerForm">
                <div>
                    <label htmlFor="addPlayer">Player Name:</label>
                    <input type="text" id="addPlayer" placeholder="Enter player name" required/>
                </div>
                <div>
                    <label htmlFor="yards">Yards:</label>
                    <input type="number" id="yards" placeholder="Enter yards" />
                </div>
                <div>
                    <label htmlFor="touchdowns">Touchdowns:</label>
                    <input type="number" id="touchdowns" placeholder="Enter touchdowns" />
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" placeholder="Enter position" />
                </div>
                <div>
                    <label htmlFor="team">Team:</label>
                    <input type="text" id="team" placeholder="Enter team name" />
                </div>
                <button type="button" onClick={handleSubmit}>Add Player</button>
                
            </form>
            </div>
        </div>
    );
}