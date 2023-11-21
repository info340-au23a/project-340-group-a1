import React from 'react';

const PlayerCard = (props) => {
    const { imageUrl, playerName, position, team, additionalInfo } = props;
    return (
        <div className="player-card">
            <div className="player-image-container">
                <img src={imageUrl} className="player-img" alt={playerName} />
            </div>
            <div className="player-info">
                <h2 className="player-name">{playerName}</h2>
                <p className="player-details">{position} - {team}</p>
                <p className="player-additional">{additionalInfo}</p>
            </div>
        </div>
    );
};

export default PlayerCard;