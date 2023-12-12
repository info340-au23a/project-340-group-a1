import React from 'react';

function PlayerCard(props) {
    const { playerName, position, team, additionalInfo, addPlayerData } = props;

    const handleClick = (event) => {
        addPlayerData(playerName);
    }

    return (
        <div className="player-card">
            <div className="player-info">
                <div className="player-add">
                    <h2 className="player-name">{playerName}</h2>
                    <button onClick={handleClick}>Favorite Player</button>
                </div>
                <p className="player-details">{position} - {team}</p>
                <p className="player-additional">{additionalInfo}</p>
            </div>
        </div>
    );
};

export default PlayerCard;