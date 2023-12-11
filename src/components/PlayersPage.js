import React, {useState} from 'react';
import PlayerCard from './PlayerCard';

export default function PlayersPage(props) {
    const addPlayer = props.addPlayerFunction;
    const playerData = props.playerData;

    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');

    const filteredPlayerData = playerData.filter(player => {
        const playerName = player.FirstName + ' ' + player.LastName;
        return (!selectedPlayer || playerName.toLowerCase() === selectedPlayer.toLowerCase()) && 
        (!selectedTeam || player.Team === selectedTeam) &&
        (!selectedPosition || player.Position === selectedPosition);
    });

    const playerList = filteredPlayerData.map((player) => {
        return (
            <PlayerCard 
                playerName={player.FirstName + ' ' + player.LastName}
                position={player.Position}
                team={player.Team}
                additionalInfo={`Height: ${player.Height}, Weight: ${player.Weight}`}
                key={player.PlayerID}
            />
        );
    });

    const handleDropdownChange = (event) => {
        setSelectedPlayer(event.target.value);
    };

    const handleTeamDropdownChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    const handlePositionDropdownChange = (event) => {
        setSelectedPosition(event.target.value);
    };

    const handleSubmit = (event) => {
        const newPlayerFirstName = document.getElementById('addPlayerFirst').value;
        const newPlayerLastName = document.getElementById('addPlayerLast').value;
        const newPlayerYards = document.getElementById('yards').value;
        const newPlayerTouchdowns = document.getElementById('touchdowns').value;
        const newPlayerPosition = document.getElementById('position').value;
        const newPlayerTeam = document.getElementById('team').value;
        const newPlayerHeight = document.getElementById('height').value;
        const newPlayerWeight = document.getElementById('weight').value;
        addPlayer(newPlayerFirstName, newPlayerLastName, newPlayerYards, newPlayerTouchdowns, newPlayerPosition, newPlayerTeam, newPlayerHeight, newPlayerWeight);
    }

    return (
        <div className="players-page">

            <header className="players-header">
                <h1>Players</h1>
            </header>

            {/* Dropdown for selecting a player */}
            <div className="player-select-dropdown">
                <label htmlFor="playerSelect" className="dropdown-label">Choose a Player: </label>
                <select id="playerSelect" value={selectedPlayer} onChange={handleDropdownChange}>
                    <option value="">Select a player</option>
                    {playerData.map(player => (
                        <option key={player.PlayerID} value={player.FirstName + ' ' + player.LastName}>
                            {player.FirstName + ' ' + player.LastName}
                        </option>
                    ))}
                </select>
            </div>

            {/* Dropdown for selecting a team */}
            <div className="team-select-dropdown">
                <label htmlFor="teamSelect" className="dropdown-label">Choose a Team: </label>
                <select id="teamSelect" value={selectedTeam} onChange={handleTeamDropdownChange}>
                    <option value="">Select a team</option>
                    {Array.from(new Set(playerData.map(player => player.Team)))
                         .map(team => (
                             <option key={team} value={team}>{team}</option>
                         ))}
                </select>
            </div>

            {/* Dropdown for selecting a position */}
            <div className="position-select-dropdown">
                <label htmlFor="positionSelect" className="dropdown-label">Choose a Position: </label>
                <select id="positionSelect" value={selectedPosition} onChange={handlePositionDropdownChange}>
                    <option value="">Select a position</option>
                    {Array.from(new Set(playerData.map(player => player.Position)))
                         .map(position => (
                             <option key={position} value={position}>{position}</option>
                         ))}
                </select>
            </div>

            {/* Main content */}
            <main className="players-main">
                <div className="players-container">
                    {playerList}
                </div>
            </main>


            <div>
            <form id="playerForm">
                <div>
                    <label htmlFor="addPlayerFirst">Player First Name:</label>
                    <input type="text" id="addPlayerFirst" placeholder="Enter player first name" required/>
                </div>
                <div>
                    <label htmlFor="addPlayerLast">Player Last Name:</label>
                    <input type="text" id="addPlayerLast" placeholder="Enter player last name" required/>
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
                <div>
                    <label htmlFor="height">Height:</label>
                    <input type="text" id="height" placeholder="Enter height" />
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" placeholder="Enter weight" />
                </div>
                <button type="button" onClick={handleSubmit}>Add Player</button>
                
            </form>
            </div>
        </div>
    );
}