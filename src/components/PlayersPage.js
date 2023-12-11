import React, {useState} from 'react';
import PlayerCard from './PlayerCard';

export default function PlayersPage(props) {
    const addPlayer = props.addPlayerFunction;
    const playerData = props.playerData;

    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');

    const filteredPlayerData = selectedPlayer
        ? playerData.filter(player => player.playerName === selectedPlayer)
        : playerData;

        const playerList = filteredPlayerData.map((player) => {
            return (
                <PlayerCard 
                    imageUrl={player.UsaTodayHeadshotUrl}
                    playerName={player.FirstName + ' ' + player.LastName}
                    position={player.Position}
                    team={player.Team}
                    additionalInfo={`Height: ${player.Height}, Weight: ${player.Weight}`}
                    key={player.PlayerID}
                />
            );
        });

    

    const handleDropdownChange = (event) =>{
        setSelectedPlayer(event.target.value);
    }

    const handleTeamDropdownChange = (event) => {
        setSelectedTeam(event.target.value);
    }

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

            {/* Dropdown for selecting a player */}
            <div className="player-select-dropdown">
                <label htmlFor="playerSelect " className="dropdown-label">Choose a Player: </label>
                <select id="playerSelect" value={selectedPlayer} onChange={handleDropdownChange}>
                    <option value="">Select a player</option>
                    {playerData.map(player => (
                        <option key={player.playerName} value={player.playerName}>{player.playerName}</option>
                    ))}
                </select>
            </div>

            {/* Dropdown for selecting a team */}
            <div className="team-select-dropdown">
                <label htmlFor="teamSelect" className="dropdown-label">Choose a Team: </label>
                <select id="teamSelect" value={selectedTeam} onChange={handleTeamDropdownChange}>
                    <option value="">Select a team</option>
                    {Array.from(new Set(playerData.map(player => player.team)))
                         .map(team => (
                             <option key={team} value={team}>{team}</option>
                         ))}
                </select>
            </div>

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